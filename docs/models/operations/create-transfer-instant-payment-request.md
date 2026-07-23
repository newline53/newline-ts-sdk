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
  memo: "Payment for invoice #123 @client",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `instantPaymentTransmitter`                                                                                                                             | [operations.CreateTransferInstantPaymentTransmitter](../../models/operations/create-transfer-instant-payment-transmitter.md)                            | :heavy_minus_sign:                                                                                                                                      | N/A                                                                                                                                                     |                                                                                                                                                         |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A message transmitted to the recipient bank. Supports letters, numbers, and special characters: . !@#$%^&*',/:;<=>?~`\|[]{})(+=_- (max 140 characters).<br/> | Payment for invoice #123 @client                                                                                                                        |