# GetCombinedTransfersData

## Example Usage

```typescript
import { GetCombinedTransfersData } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersData = {
  createdAt: "2025-03-27T09:23:07.890Z",
  errors: [
    {
      code: 33005,
      title: "Could not continue Combined Transfer",
      detail: "An exception occurred while continuing a Combined Transfer",
      occurredAt: "2025-03-27T09:23:07.890Z",
    },
  ],
  externalUid: "YrfDrfVRgpPgnhF5",
  status: "pending",
  syntheticAccount: {
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
        line2: null,
        line3: null,
        buildingNumber: null,
        streetName: null,
        city: null,
        state: null,
        postalCode: null,
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
  transfer: {
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    status: "pending",
    initiatorType: "customer",
    createdAt: new Date("2019-10-14T03:21:53.301Z"),
    queuedUntil: new Date("2019-10-14T03:31:53.301Z"),
    uid: "EhrQZJNjCd79LLYq",
    externalUid: "partner-generated-id",
    transactionUids: [
      "Ym4RSchXQmmr6KfK",
      "vmxGSMb1vFLoyc1B",
    ],
    usdTransferAmount: "34.12",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012345",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        buildingNumber: "123",
        streetName: "Main St",
        city: "Cincinnati",
        state: "OH",
        postalCode: "45202",
        country: null,
      },
    },
    cancellation: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
      cancellationRequestedAt: new Date("2024-02-06T22:25:28.013Z"),
      cancellationSucceededAt: new Date("2024-02-06T22:25:39.618Z"),
      cancellationFailedAt: new Date("2024-02-06T22:25:39.618Z"),
    },
  },
  uid: "dYTG8WAWAh5UyvY7",
};
```

## Fields

| Field                                                                                                                                                                                     | Type                                                                                                                                                                                      | Required                                                                                                                                                                                  | Description                                                                                                                                                                               | Example                                                                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                                                                                                               | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | Timestamp of when the combined_transfer was created                                                                                                                                       | 2025-03-27T09:23:07.890Z                                                                                                                                                                  |
| `errors`                                                                                                                                                                                  | [operations.DataError](../../models/operations/data-error.md)[]                                                                                                                           | :heavy_minus_sign:                                                                                                                                                                        | A collection of errors that occured during synthetic account and/or transfer creation. Only displayed if errors were detected.<br/>                                                       | [<br/>{<br/>"code": 33005,<br/>"title": "Could not continue Combined Transfer",<br/>"detail": "An exception occurred while continuing a Combined Transfer",<br/>"occurred_at": "2025-03-27T09:23:07.890Z"<br/>}<br/>] |
| `externalUid`                                                                                                                                                                             | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | Optional client-supplied uid                                                                                                                                                              | YrfDrfVRgpPgnhF5                                                                                                                                                                          |
| `status`                                                                                                                                                                                  | [operations.GetCombinedTransfersDataStatus](../../models/operations/get-combined-transfers-data-status.md)                                                                                | :heavy_minus_sign:                                                                                                                                                                        | The combined transfer's status                                                                                                                                                            | pending                                                                                                                                                                                   |
| `syntheticAccount`                                                                                                                                                                        | [operations.GetCombinedTransfersSyntheticAccount](../../models/operations/get-combined-transfers-synthetic-account.md)                                                                    | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |                                                                                                                                                                                           |
| `transfer`                                                                                                                                                                                | [operations.GetCombinedTransfersTransfer](../../models/operations/get-combined-transfers-transfer.md)                                                                                     | :heavy_minus_sign:                                                                                                                                                                        | N/A                                                                                                                                                                                       |                                                                                                                                                                                           |
| `uid`                                                                                                                                                                                     | *string*                                                                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                                        | Unique identifier for the Combined Transfer                                                                                                                                               | dYTG8WAWAh5UyvY7                                                                                                                                                                          |