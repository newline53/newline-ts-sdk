# GetReturnsResponse

## Example Usage

```typescript
import { GetReturnsResponse } from "newline-ts-sdk/models/operations";

let value: GetReturnsResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    createdAt: "1720819213239",
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    customerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    returnTransactionUid: "SMwKC1osz77DTEiu",
    status: "pending",
    uid: "dYTG8WAWAh5UyvY7",
  },
};
```

## Fields

| Field                                                                                     | Type                                                                                      | Required                                                                                  | Description                                                                               |
| ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `headers`                                                                                 | Record<string, *string*[]>                                                                | :heavy_check_mark:                                                                        | N/A                                                                                       |
| `result`                                                                                  | [operations.GetReturnsResponseBody](../../models/operations/get-returns-response-body.md) | :heavy_check_mark:                                                                        | N/A                                                                                       |