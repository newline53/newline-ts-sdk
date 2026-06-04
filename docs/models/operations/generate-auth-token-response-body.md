# GenerateAuthTokenResponseBody

A new authentication token is generated

## Example Usage

```typescript
import { GenerateAuthTokenResponseBody } from "newline-ts-sdk/models/operations";

let value: GenerateAuthTokenResponseBody = {
  token: "auth-header.payload.signature",
};
```

## Fields

| Field                                                                                                                    | Type                                                                                                                     | Required                                                                                                                 | Description                                                                                                              | Example                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ |
| `token`                                                                                                                  | *string*                                                                                                                 | :heavy_minus_sign:                                                                                                       | Access token that can be used in the `Authorization` header when sending requests to other endpoints for up to 8 hours.<br/> | auth-header.payload.signature                                                                                            |