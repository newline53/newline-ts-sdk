import { Hooks } from "./types.js";
import { AuthHook } from "./auth-hook.js";
import { validateAuthCredentials } from "./auth-credentials.js";
import { SDKOptions } from "../lib/config.js";

/*
 * This file is only ever generated once on the first generation and then is free to be modified.
 * Any hooks you wish to add should be registered in the initHooks function. Feel free to define them
 * in this file or in separate files in the hooks folder.
 */
export function initHooks(hooks: Hooks) {
  // Add hooks by calling hooks.register{ClientInit/BeforeCreateRequest/BeforeRequest/AfterSuccess/AfterError}Hook
  // with an instance of a hook that implements that specific Hook interface
  // Hooks are registered per SDK instance, and are valid for the lifetime of the SDK instance
  const processEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
  const programUid = processEnv?.["NEWLINE_PROGRAM_UID"];
  const hmacKey = processEnv?.["NEWLINE_HMAC_KEY"];
  const serverUrl = processEnv?.["NEWLINE_SERVER_URL"];

  if (programUid && hmacKey) {
    let credentials;
    try {
      credentials = validateAuthCredentials(programUid, hmacKey);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      console.warn(`Skipping auto AuthHook registration: ${message}`);
      return;
    }

    // Use a closure so the fetcher can be wired up to the SDK's httpClient during sdkInit,
    // which runs after httpClient is set on options but before any requests are made.
    let resolvedFetcher: ((input: RequestInfo | URL, init?: RequestInit) => Promise<Response>) | undefined;

    const authHook = new AuthHook({
      programUid: credentials.programUid,
      hmacKey: credentials.hmacKey,
      ...(serverUrl ? { serverUrl } : {}),
      fetcher: (input, init) =>
        resolvedFetcher ? resolvedFetcher(input, init) : fetch(input, init),
    });

    // Wire the httpClient fetcher into the TokenManager at sdkInit time,
    // when options.httpClient is guaranteed to be set.
    hooks.registerSDKInitHook({
      sdkInit(options: SDKOptions): SDKOptions {
        if (options.httpClient) {
          const client = options.httpClient;
          resolvedFetcher = (input, init) =>
            client.request(new Request(input instanceof Request ? input : input.toString(), init));
        }
        return options;
      },
    });

    hooks.registerBeforeRequestHook(authHook);
  }
}
