# PutTransactionsUidAuthorizeResponseBody

The authorization resource is returned

## Example Usage

```typescript
import { PutTransactionsUidAuthorizeResponseBody } from "newline-ts-sdk/models/operations";

let value: PutTransactionsUidAuthorizeResponseBody = {
  authorization: {
    authorizationFinalizedAt: new Date("2024-10-09T00:12:53.729Z"),
    authorizationRequiredBy: new Date("2024-10-10T00:18:53.729Z"),
    authorizationStatus: "client_denied",
    deniedMemo: "denied memo",
    deniedReason: "debit_limit_exceeded",
  },
};
```

## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `authorization`                                                                                                                | [operations.PutTransactionsUidAuthorizeAuthorization](../../models/operations/put-transactions-uid-authorize-authorization.md) | :heavy_minus_sign:                                                                                                             | Transaction Authorization information. Only present if authorization was required for a given transaction.<br/>                |