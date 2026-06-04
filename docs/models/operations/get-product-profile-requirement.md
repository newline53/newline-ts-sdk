# GetProductProfileRequirement

## Example Usage

```typescript
import { GetProductProfileRequirement } from "newline-ts-sdk/models/operations";

let value: GetProductProfileRequirement = {
  profileRequirementUid: "ptRLF7nQvy8VoqM1",
  profileRequirement: "Please provide your approximate annual income in USD.",
  category: "default",
  required: true,
  responseValues: [
    "yes",
    "no",
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `profileRequirementUid`                                                                         | *string*                                                                                        | :heavy_minus_sign:                                                                              | A UID referring to the Profile Requirement                                                      | ptRLF7nQvy8VoqM1                                                                                |
| `profileRequirement`                                                                            | *string*                                                                                        | :heavy_minus_sign:                                                                              | A statement that requires response in order to onboard a Customer for a Product                 | Please provide your approximate annual income in USD.                                           |
| `category`                                                                                      | *string*                                                                                        | :heavy_minus_sign:                                                                              | an identifier by which requirements can be grouped                                              | default                                                                                         |
| `required`                                                                                      | *boolean*                                                                                       | :heavy_minus_sign:                                                                              | an indication of whether a response is required or optional                                     | true                                                                                            |
| `requirementType`                                                                               | [operations.GetProductRequirementType](../../models/operations/get-product-requirement-type.md) | :heavy_minus_sign:                                                                              | The type of the response values for the requirement                                             |                                                                                                 |
| `responseValues`                                                                                | *string*[]                                                                                      | :heavy_minus_sign:                                                                              | List of valid response values, if applicable                                                    | [<br/>"yes",<br/>"no"<br/>]                                                                     |