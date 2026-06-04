# PutTransactionsUidAuthorizeResponse

## Example Usage

```typescript
import { PutTransactionsUidAuthorizeResponse } from "newline-ts-sdk/models/operations";

let value: PutTransactionsUidAuthorizeResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    authorization: {
      authorizationFinalizedAt: new Date("2024-10-09T00:12:53.729Z"),
      authorizationRequiredBy: new Date("2024-10-10T00:18:53.729Z"),
      authorizationStatus: "client_denied",
      deniedMemo: "denied memo",
      deniedReason: "debit_limit_exceeded",
    },
  },
};
```

## Fields

| Field                                                                                                                         | Type                                                                                                                          | Required                                                                                                                      | Description                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                     | Record<string, *string*[]>                                                                                                    | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |
| `result`                                                                                                                      | [operations.PutTransactionsUidAuthorizeResponseBody](../../models/operations/put-transactions-uid-authorize-response-body.md) | :heavy_check_mark:                                                                                                            | N/A                                                                                                                           |