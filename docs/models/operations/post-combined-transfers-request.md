# PostCombinedTransfersRequest

## Example Usage

```typescript
import { PostCombinedTransfersRequest } from "newline-ts-sdk/models/operations";

let value: PostCombinedTransfersRequest = {
  externalUid: "YrfDrfVRgpPgnhF5",
  syntheticAccount: {
    externalUid: "partner-generated-id",
    name: "New Resource Name",
    poolUid: "kaxHFJnWvJxRJZxq",
    syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    routingNumber: "123456789",
    accountNumber: "123456789012",
    externalProcessorToken:
      "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
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
  transfer: {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
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
      memo: "For the 6-5-23 shipment of pineapple popsicles",
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
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  },
};
```

## Fields

| Field                                                                                      | Type                                                                                       | Required                                                                                   | Description                                                                                | Example                                                                                    |
| ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `externalUid`                                                                              | *string*                                                                                   | :heavy_minus_sign:                                                                         | Optional client-supplied uid                                                               | YrfDrfVRgpPgnhF5                                                                           |
| `syntheticAccount`                                                                         | [operations.SyntheticAccountRequest](../../models/operations/synthetic-account-request.md) | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |
| `transfer`                                                                                 | [operations.TransferRequest](../../models/operations/transfer-request.md)                  | :heavy_check_mark:                                                                         | N/A                                                                                        |                                                                                            |