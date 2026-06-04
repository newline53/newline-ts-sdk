# GetTransferInstantPayment

Instant payment information. Only present if the Transfer is an instant payment.


## Example Usage

```typescript
import { GetTransferInstantPayment } from "newline-ts-sdk/models/operations";

let value: GetTransferInstantPayment = {
  memo: "For the 6-5-23 shipment of pineapple popsicles",
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    | Example                                                                                                        |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `memo`                                                                                                         | *string*                                                                                                       | :heavy_minus_sign:                                                                                             | A message transmitted to the recipient bank. Can contain letters and numbers as well as '-', '_', and spaces.<br/> | For the 6-5-23 shipment of pineapple popsicles                                                                 |