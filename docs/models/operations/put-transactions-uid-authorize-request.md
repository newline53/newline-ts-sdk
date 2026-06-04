# PutTransactionsUidAuthorizeRequest

## Example Usage

```typescript
import { PutTransactionsUidAuthorizeRequest } from "newline-ts-sdk/models/operations";

let value: PutTransactionsUidAuthorizeRequest = {
  uid: "<id>",
  body: {
    authorizationStatus: "client_denied",
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                                       | *string*                                                                                                                    | :heavy_check_mark:                                                                                                          | Newline-generated unique id resource specific to the current endpoint                                                       |
| `body`                                                                                                                      | [operations.PutTransactionsUidAuthorizeRequestBody](../../models/operations/put-transactions-uid-authorize-request-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |