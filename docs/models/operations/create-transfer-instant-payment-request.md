# CreateTransferInstantPaymentRequest

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { CreateTransferInstantPaymentRequest } from "newline-ts-sdk/models/operations";

let value: CreateTransferInstantPaymentRequest = {
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
};
```

## Fields

| Field                                                                                                                        | Type                                                                                                                         | Required                                                                                                                     | Description                                                                                                                  | Example                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `instantPaymentTransmitter`                                                                                                  | [operations.CreateTransferInstantPaymentTransmitter](../../models/operations/create-transfer-instant-payment-transmitter.md) | :heavy_minus_sign:                                                                                                           | N/A                                                                                                                          |                                                                                                                              |
| `memo`                                                                                                                       | *string*                                                                                                                     | :heavy_minus_sign:                                                                                                           | A message transmitted to the recipient bank. Can contain letters and numbers as well as '-', '_', and spaces.<br/>           | For the 6-5-23 shipment of pineapple popsicles                                                                               |