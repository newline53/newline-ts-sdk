# UpdateCustomerAddressResponse

## Example Usage

```typescript
import { UpdateCustomerAddressResponse } from "newline-ts-sdk/models/operations";

let value: UpdateCustomerAddressResponse = {
  street1: "123 Abc St.",
  street2: "Suite 4A",
  city: "Chicago",
  state: "IL",
  postalCode: "60301",
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `street1`                                            | *string*                                             | :heavy_check_mark:                                   | Maximum 35 characters                                | 123 Abc St.                                          |
| `street2`                                            | *string*                                             | :heavy_minus_sign:                                   | Maximum 35 characters                                | Suite 4A                                             |
| `city`                                               | *string*                                             | :heavy_check_mark:                                   | Maximum 35 characters                                | Chicago                                              |
| `state`                                              | *string*                                             | :heavy_check_mark:                                   | 2 characters. Must be a valid US state abbreviation. | IL                                                   |
| `postalCode`                                         | *string*                                             | :heavy_check_mark:                                   | 5-digit string. ZIP+4 is allowed.                    | 60301                                                |