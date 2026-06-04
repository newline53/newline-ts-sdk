# GetTransactionEventsResponseBody

A list of Transaction Events is returned

## Example Usage

```typescript
import { GetTransactionEventsResponseBody } from "newline-ts-sdk/models/operations";

let value: GetTransactionEventsResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
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
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | Total count of items available to retrieve                                                      | 1                                                                                               |
| `count`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of items retrieved                                                                       | 1                                                                                               |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Maximum number of items to retrieve                                                             | 100                                                                                             |
| `offset`                                                                                        | *number*                                                                                        | :heavy_minus_sign:                                                                              | Index of the first item to retrieve                                                             | 0                                                                                               |
| `data`                                                                                          | [operations.GetTransactionEventsData](../../models/operations/get-transaction-events-data.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |