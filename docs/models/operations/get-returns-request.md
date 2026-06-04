# GetReturnsRequest

## Example Usage

```typescript
import { GetReturnsRequest } from "newline-ts-sdk/models/operations";

let value: GetReturnsRequest = {
  customerUid: "Trzqy9t6j6tFGoG3",
  requestorType: "customer",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `customerUid`                                                                               | *string*                                                                                    | :heavy_minus_sign:                                                                          | N/A                                                                                         | Trzqy9t6j6tFGoG3                                                                            |
| `requestorType`                                                                             | [operations.QueryParamRequestorType](../../models/operations/query-param-requestor-type.md) | :heavy_minus_sign:                                                                          | Type of the customer requesting a return.                                                   | customer                                                                                    |