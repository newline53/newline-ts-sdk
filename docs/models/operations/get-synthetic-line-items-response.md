# GetSyntheticLineItemsResponse

## Example Usage

```typescript
import { GetSyntheticLineItemsResponse } from "newline-ts-sdk/models/operations";

let value: GetSyntheticLineItemsResponse = {
  headers: {},
  result: {
    totalCount: 1,
    count: 1,
    limit: 100,
    offset: 0,
    data: [
      {
        uid: "EhrQZJNjCd79LLYq",
        settledIndex: 9,
        transactionUid: "SMwKC1osz77DTEiu",
        syntheticAccountUid: "Jy8degj6iv2QngLo",
        usDollarAmount: "12.34",
        runningUsDollarBalance: "42.98",
        runningAssetBalance: "0.24",
        assetQuantity: "21.31",
        assetType: "USD",
        closingPrice: "25.00",
        custodialAccountName: "Main Checking",
        custodialAccountUid: "AM8Ai6JtuoE3Jgfr",
        description: "Transfer from Synthetic Account 1 to Synthetic Account 2",
        createdAt: new Date("2019-10-15T15:53:13.591Z"),
        settledAt: new Date("2019-10-16T12:51:12.673Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.GetSyntheticLineItemsResponseBody](../../models/operations/get-synthetic-line-items-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |