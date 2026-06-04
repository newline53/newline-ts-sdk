# UpdateCustomerRequestBody

## Example Usage

```typescript
import { UpdateCustomerRequestBody } from "newline-ts-sdk/models/operations";

let value: UpdateCustomerRequestBody = {
  externalUid: "partner-generated-id",
  email: "olive.oyl@newline53.com",
  details: {
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
  },
};
```

## Fields

| Field                                                                                                                                  | Type                                                                                                                                   | Required                                                                                                                               | Description                                                                                                                            | Example                                                                                                                                |
| -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `externalUid`                                                                                                                          | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | An optional Customer identifier supplied by the Partner. If supplied, must be unique among the collection of all Partner's Customers.<br/> | partner-generated-id                                                                                                                   |
| `email`                                                                                                                                | *string*                                                                                                                               | :heavy_minus_sign:                                                                                                                     | Email of the Customer                                                                                                                  | olive.oyl@newline53.com                                                                                                                |
| `details`                                                                                                                              | [operations.UpdateCustomerDetailsRequest](../../models/operations/update-customer-details-request.md)                                  | :heavy_minus_sign:                                                                                                                     | N/A                                                                                                                                    |                                                                                                                                        |