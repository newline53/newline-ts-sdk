import { BeforeRequestContext, BeforeRequestHook } from "./types.js";
import { TokenManager, TokenManagerConfig } from "./token-manager.js";

export interface AuthHookConfig extends TokenManagerConfig {
  skipOperationIds?: string[];
}

export class AuthHook implements BeforeRequestHook {
  private readonly tokenManager: TokenManager;
  private readonly skipOperationIds: Set<string>;

  constructor(config: AuthHookConfig) {
    this.tokenManager = new TokenManager(config);
    this.skipOperationIds = new Set(config.skipOperationIds ?? ["post_/auth", "get_/up"]);
  }

  async beforeRequest(
    hookCtx: BeforeRequestContext,
    request: Request,
  ): Promise<Request> {
    if (this.skipOperationIds.has(hookCtx.operationID)) {
      return request;
    }

    // The auth endpoint expects the raw JWS refresh token, not an access token.
    const token = hookCtx.operationID === "generateAuthToken"
      ? await this.tokenManager.getRefreshToken()
      : await this.tokenManager.getValidToken();

    const headers = new Headers(request.headers);
    headers.set("Authorization", token);

    // The auth endpoint also requires a unique x-trace-id header.
    if (hookCtx.operationID === "generateAuthToken" && !headers.get("x-trace-id")) {
      headers.set("x-trace-id", crypto.randomUUID());
    }

    return new Request(request, { headers });
  }

  setToken(token: string, expiresAt?: number): void {
    this.tokenManager.setToken(token, expiresAt);
  }

  clearToken(): void {
    this.tokenManager.clearToken();
  }

  getTokenManager(): TokenManager {
    return this.tokenManager;
  }
}
