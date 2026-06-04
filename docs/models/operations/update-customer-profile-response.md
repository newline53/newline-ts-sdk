# UpdateCustomerProfileResponse

## Example Usage

```typescript
import { UpdateCustomerProfileResponse } from "newline-ts-sdk/models/operations";

let value: UpdateCustomerProfileResponse = {
  profileRequirement: "Please provide your approximate annual income in USD.",
  profileResponse: "Profile response",
  profileRequirementUid: "ptRLF7nQvy8VoqM1",
};
```

## Fields

| Field                                                                             | Type                                                                              | Required                                                                          | Description                                                                       | Example                                                                           |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| `profileRequirement`                                                              | *string*                                                                          | :heavy_minus_sign:                                                                | A statement that requires a response in order to onboard a Customer for a Product | Please provide your approximate annual income in USD.                             |
| `profileResponse`                                                                 | *string*                                                                          | :heavy_minus_sign:                                                                | The Customer's response to the Profile Requirement as a single string value.      | Profile response                                                                  |
| `profileRequirementUid`                                                           | *string*                                                                          | :heavy_minus_sign:                                                                | A UID referring to the Profile Requirement                                        | ptRLF7nQvy8VoqM1                                                                  |