# ListCustodialAccountsResponse

## Example Usage

```typescript
import { ListCustodialAccountsResponse } from "newline-ts-sdk/models/operations";

let value: ListCustodialAccountsResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [operations.ListCustodialAccountsResponseBody](../../models/operations/list-custodial-accounts-response-body.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |