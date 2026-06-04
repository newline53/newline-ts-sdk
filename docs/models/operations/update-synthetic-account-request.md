# UpdateSyntheticAccountRequest

## Example Usage

```typescript
import { UpdateSyntheticAccountRequest } from "newline-ts-sdk/models/operations";

let value: UpdateSyntheticAccountRequest = {
  uid: "<id>",
  body: {
    externalUid: "partner-generated-id",
    name: "New Resource Name",
    poolUid: "kaxHFJnWvJxRJZxq",
    syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    routingNumber: "123456789",
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

| Field                                                                                                            | Type                                                                                                             | Required                                                                                                         | Description                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                            | *string*                                                                                                         | :heavy_check_mark:                                                                                               | Newline-generated unique id resource specific to the current endpoint                                            |
| `body`                                                                                                           | [operations.UpdateSyntheticAccountRequestBody](../../models/operations/update-synthetic-account-request-body.md) | :heavy_check_mark:                                                                                               | N/A                                                                                                              |