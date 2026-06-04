# UpdateCustomerRequest

## Example Usage

```typescript
import { UpdateCustomerRequest } from "newline-ts-sdk/models/operations";

let value: UpdateCustomerRequest = {
  uid: "<id>",
  body: {
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
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `uid`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | Newline-generated unique id resource specific to the current endpoint                           |
| `body`                                                                                          | [operations.UpdateCustomerRequestBody](../../models/operations/update-customer-request-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |