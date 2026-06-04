# ListSyntheticAccountClosingBalancesResponse

## Example Usage

```typescript
import { ListSyntheticAccountClosingBalancesResponse } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountClosingBalancesResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                                          | Type                                                                                                                                           | Required                                                                                                                                       | Description                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                      | Record<string, *string*[]>                                                                                                                     | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |
| `result`                                                                                                                                       | [operations.ListSyntheticAccountClosingBalancesResponseBody](../../models/operations/list-synthetic-account-closing-balances-response-body.md) | :heavy_check_mark:                                                                                                                             | N/A                                                                                                                                            |