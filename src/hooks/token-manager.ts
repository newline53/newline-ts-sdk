/**
 * Token Manager for managing access tokens and automatic refresh
 * 
 * This utility handles:
 * - Token storage and retrieval
 * - Token expiration validation
 * - Automatic token refresh using HMAC-signed JWS
 */

import { validateAuthCredentials } from "./auth-credentials.js";

export interface TokenInfo {
  token: string;
  expiresAt: number; // Unix timestamp in milliseconds
}

export type TokenManagerFetcher = (input: RequestInfo | URL, init?: RequestInit) => Promise<Response>;

export interface TokenManagerConfig {
  programUid: string;
  hmacKey: string;
  tokenExpiryBuffer?: number; // Buffer time in milliseconds before actual expiry (default: 5 minutes)
  serverUrl?: string; // Optional custom server URL (defaults to production)
  fetcher?: TokenManagerFetcher; // Optional custom fetcher (e.g. proxy-aware)
}

/**
 * Manages access token lifecycle including validation and refresh
 */
export class TokenManager {
  private tokenInfo: TokenInfo | null = null;
  private refreshPromise: Promise<string> | null = null;
  private readonly programUid: string;
  private readonly hmacKey: string;
  private readonly tokenExpiryBuffer: number;
  private readonly serverUrl: string;
  private readonly fetcher: TokenManagerFetcher;

  constructor(config: TokenManagerConfig) {
    const credentials = validateAuthCredentials(config.programUid, config.hmacKey);
    this.programUid = credentials.programUid;
    this.hmacKey = credentials.hmacKey;
    // Default to 5 minutes buffer before actual expiry
    this.tokenExpiryBuffer = config.tokenExpiryBuffer ?? 5 * 60 * 1000;
    // Default to production URL
    this.serverUrl = config.serverUrl ?? "https://api.newline53.com/api/v1";
    this.fetcher = config.fetcher ?? fetch;
  }

  /**
   * Get the current valid token, refreshing if necessary
   */
  async getValidToken(): Promise<string> {
    // If we already have a valid token, return it
    if (this.isTokenValid()) {
      return this.tokenInfo!.token;
    }

    // If a refresh is already in progress, wait for it
    if (this.refreshPromise) {
      return this.refreshPromise;
    }

    // Start a new refresh
    this.refreshPromise = this.refreshToken()
      .then((token) => {
        this.refreshPromise = null;
        return token;
      })
      .catch((error) => {
        this.refreshPromise = null;
        throw error;
      });

    return this.refreshPromise;
  }

  /**
   * Check if the current token is valid (exists and not expired)
   */
  private isTokenValid(): boolean {
    if (!this.tokenInfo) {
      return false;
    }

    const now = Date.now();
    return now < (this.tokenInfo.expiresAt - this.tokenExpiryBuffer);
  }

  /**
   * Refresh the token by generating a new JWS and calling the auth endpoint
   */
  private async refreshToken(): Promise<string> {
    // Generate the refresh token (JWS)
    const refreshToken = await this.generateRefreshToken();

    // Call the auth endpoint to get a new access token
    const response = await this.callAuthEndpoint(refreshToken);

    // Store the new token with calculated expiry
    // Tokens are valid for 8 hours according to the API docs
    const expiresAt = Date.now() + (8 * 60 * 60 * 1000);
    
    this.tokenInfo = {
      token: response.token,
      expiresAt,
    };

    return response.token;
  }

  /**
   * Get a fresh JWS refresh token for direct use (e.g. the auth endpoint itself).
   */
  async getRefreshToken(): Promise<string> {
    return this.generateRefreshToken();
  }

  /**
   * Generate a JWS refresh token signed with HMAC-SHA512
   * Payload contains: sub (program UID) and iat (issued at timestamp)
   */
  private async generateRefreshToken(): Promise<string> {
    const header = {
      alg: "HS512",
      typ: "JWT",
    };

    const now = Math.floor(Date.now() / 1000); // Convert to seconds
    const payload = {
      sub: this.programUid,
      iat: now,
    };

    // Encode header and payload
    const encodedHeader = this.base64UrlEncode(JSON.stringify(header));
    const encodedPayload = this.base64UrlEncode(JSON.stringify(payload));

    // Create signature using HMAC-SHA512
    const message = `${encodedHeader}.${encodedPayload}`;
    const signature = await this.hmacSha512Sign(message, this.hmacKey);
    const encodedSignature = this.base64UrlEncode(signature);

    return `${message}.${encodedSignature}`;
  }

  /**
   * Call the auth endpoint to exchange refresh token for access token
   */
  private async callAuthEndpoint(refreshToken: string): Promise<{ token: string }> {
    const traceId = this.generateTraceId();
    
    const authUrl = `${this.serverUrl}/auth`;
    
    const fetchOptions: RequestInit = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "x-trace-id": traceId,
        "Authorization": refreshToken,
        "User-Agent": "newline-ts-sdk/0.0.2",
      },
    };
    
    const response = await this.fetcher(authUrl, fetchOptions);

    if (!response.ok) {
      const error = await response.text();
      throw new Error(`Failed to refresh token: ${response.status} ${error}`);
    }

    const data = await response.json();
    
    if (!data.token) {
      throw new Error("Auth response did not include a token");
    }

    return { token: data.token };
  }

  /**
   * Base64 URL encode (RFC 4648)
   */
  private base64UrlEncode(data: string | ArrayBuffer): string {
    let base64: string;
    
    if (typeof data === "string") {
      base64 = btoa(data);
    } else {
      const bytes = new Uint8Array(data);
      const binary = Array.from(bytes).map(b => String.fromCharCode(b)).join('');
      base64 = btoa(binary);
    }
    
    return base64
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  }

  /**
   * HMAC-SHA512 signing
   */
  private async hmacSha512Sign(message: string, secret: string): Promise<ArrayBuffer> {
    // Use Web Crypto API (available in modern browsers and Node.js 15+)
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secret);
    const messageData = encoder.encode(message);

    const key = await crypto.subtle.importKey(
      "raw",
      keyData,
      { name: "HMAC", hash: "SHA-512" },
      false,
      ["sign"]
    );

    return await crypto.subtle.sign("HMAC", key, messageData);
  }

  /**
   * Generate a UUID v4 for trace ID
   */
  private generateTraceId(): string {
    if (typeof crypto !== "undefined" && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    
    // Fallback UUID v4 generation
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  /**
   * Manually set a token (useful for testing or custom auth flows)
   */
  setToken(token: string, expiresAt?: number): void {
    this.tokenInfo = {
      token,
      expiresAt: expiresAt ?? Date.now() + (8 * 60 * 60 * 1000),
    };
  }

  /**
   * Clear the stored token
   */
  clearToken(): void {
    this.tokenInfo = null;
  }
}
