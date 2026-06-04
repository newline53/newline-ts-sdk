# ListSyntheticAccountClosingBalancesResponseBody

A list of Synthetic Account Closing balances is returned

## Example Usage

```typescript
import { ListSyntheticAccountClosingBalancesResponseBody } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountClosingBalancesResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
      uid: "EhrQZJNjCd79LLYq",
      syntheticAccountUid: "Jy8degj6iv2QngLo",
      syntheticAccountExternalUid: "ptRLF7nQvy8VoqM1",
      netUsdClosingBalance: "12.34",
      netUsdClosingBalanceAsOf: new Date("1978-08-17"),
    },
  ],
};
```

## Fields

| Field                                                                                                                           | Type                                                                                                                            | Required                                                                                                                        | Description                                                                                                                     | Example                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                                                    | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Total count of items available to retrieve                                                                                      | 1                                                                                                                               |
| `count`                                                                                                                         | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Number of items retrieved                                                                                                       | 1                                                                                                                               |
| `limit`                                                                                                                         | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Maximum number of items to retrieve                                                                                             | 100                                                                                                                             |
| `offset`                                                                                                                        | *number*                                                                                                                        | :heavy_minus_sign:                                                                                                              | Index of the first item to retrieve                                                                                             | 0                                                                                                                               |
| `data`                                                                                                                          | [operations.ListSyntheticAccountClosingBalancesData](../../models/operations/list-synthetic-account-closing-balances-data.md)[] | :heavy_minus_sign:                                                                                                              | N/A                                                                                                                             |                                                                                                                                 |