# ListCustodialAccountsAccountError

## Example Usage

```typescript
import { ListCustodialAccountsAccountError } from "newline-ts-sdk/models/operations";

let value: ListCustodialAccountsAccountError = {
  errorCode: "FI1234",
  errorName: "DOB does not match",
  errorDescription:
    "The given DOB does not match the known DOB for the SSN provided",
};
```

## Fields

| Field                                                           | Type                                                            | Required                                                        | Description                                                     | Example                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| `errorCode`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | FI1234                                                          |
| `errorName`                                                     | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | DOB does not match                                              |
| `errorDescription`                                              | *string*                                                        | :heavy_minus_sign:                                              | N/A                                                             | The given DOB does not match the known DOB for the SSN provided |