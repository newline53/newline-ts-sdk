# GetTransactionEventsUidResponse

## Example Usage

```typescript
import { GetTransactionEventsUidResponse } from "newline-ts-sdk/models/operations";

let value: GetTransactionEventsUidResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    uid: "EhrQZJNjCd79LLYq",
    settledIndex: 9,
    transactionUids: [
      "[\"SMwKC1osz77DTEiu\",\"m6FyXmEDgDfng4GZ\"]",
    ],
    sourceCustodialAccountUid: "dmRtw1xkS9ghrntB",
    destinationCustodialAccountUid: "W55zKgvAk3zkpGM3",
    custodialLineItemUids: [
      "[\"y4r8oTATb23MdGDF\",\"m9bED9iicUUk8YAc\"]",
    ],
    usDollarAmount: "12.34",
    type: "odfi_ach_deposit",
    debitCardUid: "oPeppbFTE9FvYKq5",
    netAsset: "positive",
    description: "Transfer from Bank ABC 123 to Newline 999",
    createdAt: new Date("2019-10-15T15:53:13.591Z"),
    settledAt: new Date("2019-10-16T12:51:12.673Z"),
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.GetTransactionEventsUidResponseBody](../../models/operations/get-transaction-events-uid-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |