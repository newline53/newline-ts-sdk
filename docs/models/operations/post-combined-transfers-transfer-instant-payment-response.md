# PostCombinedTransfersTransferInstantPaymentResponse

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { PostCombinedTransfersTransferInstantPaymentResponse } from "newline-ts-sdk/models/operations";

let value: PostCombinedTransfersTransferInstantPaymentResponse = {
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `instantPaymentTransmitter`                                                                                                                                  | [operations.PostCombinedTransfersInstantPaymentTransmitterResponse](../../models/operations/post-combined-transfers-instant-payment-transmitter-response.md) | :heavy_minus_sign:                                                                                                                                           | N/A                                                                                                                                                          |