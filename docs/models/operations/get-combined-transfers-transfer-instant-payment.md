# GetCombinedTransfersTransferInstantPayment

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { GetCombinedTransfersTransferInstantPayment } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersTransferInstantPayment = {
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

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `instantPaymentTransmitter`                                                                                                               | [operations.GetCombinedTransfersInstantPaymentTransmitter](../../models/operations/get-combined-transfers-instant-payment-transmitter.md) | :heavy_minus_sign:                                                                                                                        | N/A                                                                                                                                       |