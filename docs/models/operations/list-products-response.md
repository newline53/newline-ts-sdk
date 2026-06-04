# ListProductsResponse

## Example Usage

```typescript
import { ListProductsResponse } from "newline-ts-sdk/models/operations";

let value: ListProductsResponse = {
  headers: {
    "key": [],
    "key1": [],
  },
  result: {
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
  },
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `headers`                                                                                     | Record<string, *string*[]>                                                                    | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `result`                                                                                      | [operations.ListProductsResponseBody](../../models/operations/list-products-response-body.md) | :heavy_check_mark:                                                                            | N/A                                                                                           |