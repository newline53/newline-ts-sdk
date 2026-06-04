export interface ValidatedAuthCredentials {
  programUid: string;
  hmacKey: string;
}

const PROGRAM_UID_PLACEHOLDERS = new Set([
  "your_program_uid",
  "your_program_uid_here",
  "your_programuid_here"
]);

const HMAC_KEY_PLACEHOLDERS = new Set([
  "your_hmac_key",
  "your_hmac_key_here",
  "your_hmackey_here"
]);

function normalizeOrThrow(value: string | null | undefined, envName: string): string {
  if (typeof value !== "string") {
    throw new Error(`Invalid ${envName}: value is missing. Set it in .env before calling /auth.`);
  }

  const trimmed = value.trim();
  if (!trimmed) {
    throw new Error(`Invalid ${envName}: value is empty. Set it in .env before calling /auth.`);
  }

  if (/\s/.test(trimmed)) {
    throw new Error(`Invalid ${envName}: value cannot contain whitespace.`);
  }

  return trimmed;
}

function validateProgramUid(value: string | null | undefined): string {
  const normalized = normalizeOrThrow(value, "NEWLINE_PROGRAM_UID");
  if (PROGRAM_UID_PLACEHOLDERS.has(normalized.toLowerCase())) {
    throw new Error("Invalid NEWLINE_PROGRAM_UID: placeholder value detected. Update .env with your real Program UID.");
  }

  return normalized;
}

function validateHmacKey(value: string | null | undefined): string {
  const normalized = normalizeOrThrow(value, "NEWLINE_HMAC_KEY");
  if (HMAC_KEY_PLACEHOLDERS.has(normalized.toLowerCase())) {
    throw new Error("Invalid NEWLINE_HMAC_KEY: placeholder value detected. Update .env with your real HMAC key.");
  }

  return normalized;
}

export function validateAuthCredentials(
  programUid: string | null | undefined,
  hmacKey: string | null | undefined,
): ValidatedAuthCredentials {
  return {
    programUid: validateProgramUid(programUid),
    hmacKey: validateHmacKey(hmacKey),
  };
}