# CreateSyntheticAccountInstantPaymentResponse

## Example Usage

```typescript
import { CreateSyntheticAccountInstantPaymentResponse } from "newline-ts-sdk/models/operations";

let value: CreateSyntheticAccountInstantPaymentResponse = {
  counterpartyAddress: {
    streetNumber: "123abc",
    street1: "Abc St.",
    street2: "Suite 4A",
    city: "Chicago",
    state: "IL",
    postalCode: "60301",
    country: null,
  },
  counterpartyName: "Marge's Roofing Inc",
  email: "payments@veryexcellentbusiness.com",
  phone: "5555551212",
};
```

## Fields

| Field                                                                                                                                                                           | Type                                                                                                                                                                            | Required                                                                                                                                                                        | Description                                                                                                                                                                     | Example                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `counterpartyAddress`                                                                                                                                                           | [operations.CreateSyntheticAccountInstantPaymentCounterpartyAddressResponse](../../models/operations/create-synthetic-account-instant-payment-counterparty-address-response.md) | :heavy_minus_sign:                                                                                                                                                              | Address of the business or individual who owns the external account.<br/>                                                                                                       |                                                                                                                                                                                 |
| `counterpartyName`                                                                                                                                                              | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Name of the business or individual who owns the counterparty Account.<br/>                                                                                                      | Marge's Roofing Inc                                                                                                                                                             |
| `email`                                                                                                                                                                         | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Email address of the counterparty                                                                                                                                               | payments@veryexcellentbusiness.com                                                                                                                                              |
| `phone`                                                                                                                                                                         | *string*                                                                                                                                                                        | :heavy_minus_sign:                                                                                                                                                              | Exactly 10 digits long (no hyphens, parentheses, or spaces)                                                                                                                     | 5555551212                                                                                                                                                                      |