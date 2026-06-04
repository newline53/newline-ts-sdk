# CreateTransferResponse

## Example Usage

```typescript
import { CreateTransferResponse } from "newline-ts-sdk/models/operations";

let value: CreateTransferResponse = {
  headers: {
    "key": [],
  },
  result: {
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
      transferTraceId: "A1Z2b3y4c5x6DW78",
    },
    instantPayment: {
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
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
      wireInstructions: "Send ASAP",
    },
    cancellation: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
      cancellationRequestedAt: new Date("2024-02-06T22:25:28.013Z"),
      cancellationSucceededAt: new Date("2024-02-06T22:25:39.618Z"),
      cancellationFailedAt: new Date("2024-02-06T22:25:39.618Z"),
    },
  },
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `headers`                                                                                         | Record<string, *string*[]>                                                                        | :heavy_check_mark:                                                                                | N/A                                                                                               |
| `result`                                                                                          | [operations.CreateTransferResponseBody](../../models/operations/create-transfer-response-body.md) | :heavy_check_mark:                                                                                | N/A                                                                                               |