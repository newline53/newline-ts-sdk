# GenerateAuthTokenResponse

## Example Usage

```typescript
import { GenerateAuthTokenResponse } from "newline-ts-sdk/models/operations";

let value: GenerateAuthTokenResponse = {
  headers: {},
  result: {
    token: "auth-header.payload.signature",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                | Record<string, *string*[]>                                                                               | :heavy_check_mark:                                                                                       | N/A                                                                                                      |
| `result`                                                                                                 | [operations.GenerateAuthTokenResponseBody](../../models/operations/generate-auth-token-response-body.md) | :heavy_check_mark:                                                                                       | N/A                                                                                                      |