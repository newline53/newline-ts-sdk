# PostReturnsResponse

## Example Usage

```typescript
import { PostReturnsResponse } from "newline-ts-sdk/models/operations";

let value: PostReturnsResponse = {
  headers: {},
  result: {
    createdAt: "1714674835918",
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    customerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    returnTransactionUid: "SMwKC1osz77DTEiu",
    status: "pending",
    uid: "dYTG8WAWAh5UyvY7",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [operations.PostReturnsResponseBody](../../models/operations/post-returns-response-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |