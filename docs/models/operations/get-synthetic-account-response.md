# GetSyntheticAccountResponse

## Example Usage

```typescript
import { GetSyntheticAccountResponse } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
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
    accountNumber: "123456789012",
    ach: {
      accountType: "checking",
      counterpartyName: "Thelma's Flooring LLC",
    },
    instantPayment: {
      counterpartyAddress: {
        streetNumber: "123abc",
        street1: "Abc St.",
        street2: "Suite 4A",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      counterpartyName: "Marge's Roofing Inc",
      email: "payments@veryexcellentbusiness.com",
      phone: "5555551212",
    },
    wire: {
      counterpartyAddress: {
        line1: "234 Xyz Rd",
        line2: "APT 5",
        line3: "Boston, MA 02110",
        country: "US",
      },
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                    | Record<string, *string*[]>                                                                                   | :heavy_check_mark:                                                                                           | N/A                                                                                                          |
| `result`                                                                                                     | [operations.GetSyntheticAccountResponseBody](../../models/operations/get-synthetic-account-response-body.md) | :heavy_check_mark:                                                                                           | N/A                                                                                                          |