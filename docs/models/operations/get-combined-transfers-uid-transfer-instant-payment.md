# GetCombinedTransfersUidTransferInstantPayment

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { GetCombinedTransfersUidTransferInstantPayment } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersUidTransferInstantPayment = {
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
};
```

## Fields

| Field                                                                                                                                            | Type                                                                                                                                             | Required                                                                                                                                         | Description                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instantPaymentTransmitter`                                                                                                                      | [operations.GetCombinedTransfersUidInstantPaymentTransmitter](../../models/operations/get-combined-transfers-uid-instant-payment-transmitter.md) | :heavy_minus_sign:                                                                                                                               | N/A                                                                                                                                              |