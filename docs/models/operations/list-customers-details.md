# ListCustomersDetails

An object containing the supplied identifying information for the Customer

## Example Usage

```typescript
import { ListCustomersDetails } from "newline-ts-sdk/models/operations";

let value: ListCustomersDetails = {
  firstName: "Olive",
  middleName: "Olivia",
  lastName: "Oyl",
  suffix: "Jr.",
  phone: "5555551212",
  businessName: "Oliver's Olive Emporium",
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