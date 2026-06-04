# ListSyntheticAccountsInstantPayment

Contains Instant Payment-specific information. Only populated if the Synthetic Account is in the `instant_payments_external` category.


## Example Usage

```typescript
import { ListSyntheticAccountsInstantPayment } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountsInstantPayment = {
  counterpartyName: "Marge's Roofing Inc",
  email: "payments@veryexcellentbusiness.com",
  phone: "5555551212",
};
```

## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            | Example                                                                |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `counterpartyName`                                                     | *string*                                                               | :heavy_minus_sign:                                                     | Name of the business or individual who owns the counterparty Account.<br/> | Marge's Roofing Inc                                                    |
| `email`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Email address of the counterparty                                      | payments@veryexcellentbusiness.com                                     |
| `phone`                                                                | *string*                                                               | :heavy_minus_sign:                                                     | Exactly 10 digits long (no hyphens, parentheses, or spaces)            | 5555551212                                                             |