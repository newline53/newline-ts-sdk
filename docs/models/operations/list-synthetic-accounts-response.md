# ListSyntheticAccountsResponse

## Example Usage

```typescript
import { ListSyntheticAccountsResponse } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
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
        externalUid: "partner-generated-id",
        name: "New Resource Name",
        poolUid: "kaxHFJnWvJxRJZxq",
        syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
        status: "active",
        netUsdBalance: "12.34",
        netUsdPendingBalance: "-2.56",
        netUsdAvailableBalance: "9.78",
        netUsdClosingBalance: "9.87",
        netUsdClosingBalanceAsOf: "2025-08-19",
        assetBalances: [
          {
            assetQuantity: "12.23",
            assetType: "USD",
            currentUsdValue: "122.12",
            custodialAccountUid: "wZgfnLrLJcCAscnH",
            custodialAccountName: "First Checking",
            debit: true,
          },
        ],
        masterAccount: true,
        routingNumber: "123456789",
        accountNumberLastFour: "9012",
        openedAt: new Date("2019-01-31T17:32:28Z"),
        closedAt: new Date("2019-10-19T08:15:13Z"),
        ach: {
          accountType: "checking",
          counterpartyName: "Thelma's Flooring LLC",
        },
        instantPayment: {
          counterpartyName: "Marge's Roofing Inc",
          email: "payments@veryexcellentbusiness.com",
          phone: "5555551212",
        },
        wire: {
          counterpartyName: "Marge's Roofing Inc",
          counterpartyBankAddress: {
            line1: "123 Abc St.",
            line2: "Boring, Oregon 97009",
            line3: null,
            country: null,
          },
          counterpartyBankName: "East West Regional Bank",
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                        | Record<string, *string*[]>                                                                                       | :heavy_check_mark:                                                                                               | N/A                                                                                                              |
| `result`                                                                                                         | [operations.ListSyntheticAccountsResponseBody](../../models/operations/list-synthetic-accounts-response-body.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |