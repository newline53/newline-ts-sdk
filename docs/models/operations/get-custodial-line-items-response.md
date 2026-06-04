# GetCustodialLineItemsResponse

## Example Usage

```typescript
import { GetCustodialLineItemsResponse } from "newline-ts-sdk/models/operations";

let value: GetCustodialLineItemsResponse = {
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
        transactionEventUid: "MB2yqBrm3c4bUbou",
        custodialAccountUid: "Jy8degj6iv2QngLo",
        debitCardUid: "6rVmYmv9VyTawrre",
        usDollarAmount: "12.34",
        runningUsDollarBalance: "34.21",
        runningAssetBalance: "1.34",
        assetQuantity: "31.21",
        assetType: "USD",
        closingPrice: "25.00",
        type: "transaction category 8348",
        description: "deposit from external account",
        createdAt: new Date("2019-10-18T15:53:13.591Z"),
        occurredAt: new Date("2019-10-15T12:09:01Z"),
        settledAt: new Date("2019-10-17T11:09:01Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                             | Type                                                                                                              | Required                                                                                                          | Description                                                                                                       |
| ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                         | Record<string, *string*[]>                                                                                        | :heavy_check_mark:                                                                                                | N/A                                                                                                               |
| `result`                                                                                                          | [operations.GetCustodialLineItemsResponseBody](../../models/operations/get-custodial-line-items-response-body.md) | :heavy_check_mark:                                                                                                | N/A                                                                                                               |