# ListCustodialAccountsResponseBody

A list of Custodial Accounts is returned

## Example Usage

```typescript
import { ListCustodialAccountsResponseBody } from "newline-ts-sdk/models/operations";

let value: ListCustodialAccountsResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
      uid: "EhrQZJNjCd79LLYq",
      externalUid: "partner-generated-id",
      customerUid: "YrfDrfVRgpPgnhF5",
      poolUid: "kaxHFJnWvJxRJZxq",
      type: "dda",
      liability: true,
      name: "XYZ Checking Account",
      primaryAccount: true,
      accountErrors: [
        {
          errorCode: "FI1234",
          errorName: "DOB does not match",
          errorDescription:
            "The given DOB does not match the known DOB for the SSN provided",
        },
      ],
      netUsdBalance: "12.34",
      netUsdPendingBalance: "-2.56",
      netUsdAvailableBalance: "9.78",
      netUsdClosingBalance: "9.87",
      netUsdClosingBalanceAsOf: "2025-08-19",
      assetBalances: [
        {
          assetQuantity: "122.11",
          assetType: "USD",
          currentUsdValue: "122.11",
          debit: true,
        },
      ],
      routingNumber: "123456789",
      openedAt: new Date("2019-01-31T17:32:28Z"),
      closedAt: new Date("2019-10-19T08:15:13Z"),
      accountNumberMasked: "9012",
    },
  ],
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                      | *number*                                                                                          | :heavy_minus_sign:                                                                                | Total count of items available to retrieve                                                        | 1                                                                                                 |
| `count`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | Number of items retrieved                                                                         | 1                                                                                                 |
| `limit`                                                                                           | *number*                                                                                          | :heavy_minus_sign:                                                                                | Maximum number of items to retrieve                                                               | 100                                                                                               |
| `offset`                                                                                          | *number*                                                                                          | :heavy_minus_sign:                                                                                | Index of the first item to retrieve                                                               | 0                                                                                                 |
| `data`                                                                                            | [operations.ListCustodialAccountsData](../../models/operations/list-custodial-accounts-data.md)[] | :heavy_minus_sign:                                                                                | N/A                                                                                               |                                                                                                   |