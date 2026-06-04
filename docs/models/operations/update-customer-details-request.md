# UpdateCustomerDetailsRequest

An object containing the supplied identifying information for the Customer

## Example Usage

```typescript
import { UpdateCustomerDetailsRequest } from "newline-ts-sdk/models/operations";

let value: UpdateCustomerDetailsRequest = {
  firstName: "Olive",
  middleName: "Olivia",
  lastName: "Oyl",
  suffix: "Jr.",
  phone: "5555551212",
  businessName: "Oliver's Olive Emporium",
  ssn: "111-22-3333",
  dob: new Date("1919-12-08"),
  address: {
    street1: "123 Abc St.",
    street2: "Suite 4A",
    city: "Chicago",
    state: "IL",
    postalCode: "60301",
  },
};
```

## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              | Example                                                                                                  |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `firstName`                                                                                              | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | 1-40 characters                                                                                          | Olive                                                                                                    |
| `middleName`                                                                                             | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | 1-40 characters                                                                                          | Olivia                                                                                                   |
| `lastName`                                                                                               | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | 1-40 characters                                                                                          | Oyl                                                                                                      |
| `suffix`                                                                                                 | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | 1-30 characters                                                                                          | Jr.                                                                                                      |
| `phone`                                                                                                  | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Exactly 10 digits long (no hyphens, parentheses, or spaces)                                              | 5555551212                                                                                               |
| `businessName`                                                                                           | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Required for customers of type `sole_proprietor` and discarded otherwise. 1-256 alphanumeric characters. | Oliver's Olive Emporium                                                                                  |
| `ssn`                                                                                                    | *string*                                                                                                 | :heavy_minus_sign:                                                                                       | Follows pattern 'ddd-dd-dddd'. Required for `primary` or `sole_proprietor` customers.                    | 111-22-3333                                                                                              |
| `dob`                                                                                                    | [Date](../../types/rfcdate.md)                                                                           | :heavy_minus_sign:                                                                                       | Follows pattern 'YYYY-MM-DD'                                                                             | 1919-12-08                                                                                               |
| `address`                                                                                                | [operations.UpdateCustomerAddressRequest](../../models/operations/update-customer-address-request.md)    | :heavy_minus_sign:                                                                                       | N/A                                                                                                      |                                                                                                          |