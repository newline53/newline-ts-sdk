# ListProductsResponseBody

A list of Products is returned

## Example Usage

```typescript
import { ListProductsResponseBody } from "newline-ts-sdk/models/operations";

let value: ListProductsResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
      uid: "f9VncZny4ejhcPF4",
      name: "Checking",
      description: "Supports checking accounts",
      productCompliancePlanUid: "Vxf1pY1KHbiJYo1e",
      compliancePlanName: "Compliance requirements for checking",
      customerTypes: [
        "primary",
        "sole_proprietor",
      ],
      prerequisiteProductUids: [
        "DaB7Mjj73Nz2JpHF",
        "x2z691J9HPCWAugv",
      ],
      profileRequirements: [
        {
          profileRequirementUid: "ptRLF7nQvy8VoqM1",
          profileRequirement:
            "Please provide your approximate annual income in USD.",
          category: "default",
          required: true,
          responseValues: [
            "yes",
            "no",
          ],
        },
      ],
      programUid: "W74Jrkxk8bVtvNNj",
      requiredFields: [
        {
          customerType: "primary",
          fields: [
            "city",
            "dob",
            "email",
            "first_name",
            "last_name",
            "phone",
            "postal_code",
            "ssn",
            "state",
            "street1",
          ],
        },
        {
          customerType: "sole_proprietor",
          fields: [
            "business_name",
            "city",
            "dob",
            "email",
            "first_name",
            "last_name",
            "phone",
            "postal_code",
            "ssn",
            "state",
            "street1",
          ],
        },
      ],
    },
  ],
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `totalCount`                                                                   | *number*                                                                       | :heavy_minus_sign:                                                             | Total count of items available to retrieve                                     | 1                                                                              |
| `count`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Number of items retrieved                                                      | 1                                                                              |
| `limit`                                                                        | *number*                                                                       | :heavy_minus_sign:                                                             | Maximum number of items to retrieve                                            | 100                                                                            |
| `offset`                                                                       | *number*                                                                       | :heavy_minus_sign:                                                             | Index of the first item to retrieve                                            | 0                                                                              |
| `data`                                                                         | [operations.ListProductsData](../../models/operations/list-products-data.md)[] | :heavy_minus_sign:                                                             | N/A                                                                            |                                                                                |