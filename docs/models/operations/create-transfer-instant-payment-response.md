# CreateTransferInstantPaymentResponse

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { CreateTransferInstantPaymentResponse } from "newline-ts-sdk/models/operations";

let value: CreateTransferInstantPaymentResponse = {
  memo: "Payment for invoice #123 @client",
};
```

## Fields

| Field                                                                                                                                                   | Type                                                                                                                                                    | Required                                                                                                                                                | Description                                                                                                                                             | Example                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `memo`                                                                                                                                                  | *string*                                                                                                                                                | :heavy_minus_sign:                                                                                                                                      | A message transmitted to the recipient bank. Supports letters, numbers, and special characters: . !@#$%^&*',/:;<=>?~`\|[]{})(+=_- (max 140 characters).<br/> | Payment for invoice #123 @client                                                                                                                        |