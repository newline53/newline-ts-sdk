# ListTransfersResponseBody

A list of Transfers is returned

## Example Usage

```typescript
import { ListTransfersResponseBody } from "newline-ts-sdk/models/operations";

let value: ListTransfersResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
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
          transmitterIdentifier: "123456789012ABC",
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: "US",
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
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | Total count of items available to retrieve                                       | 1                                                                                |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Number of items retrieved                                                        | 1                                                                                |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of items to retrieve                                              | 100                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_minus_sign:                                                               | Index of the first item to retrieve                                              | 0                                                                                |
| `data`                                                                           | [operations.ListTransfersData](../../models/operations/list-transfers-data.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |