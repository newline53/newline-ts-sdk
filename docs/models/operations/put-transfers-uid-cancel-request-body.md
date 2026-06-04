# PutTransfersUidCancelRequestBody

## Example Usage

```typescript
import { PutTransfersUidCancelRequestBody } from "newline-ts-sdk/models/operations";

let value: PutTransfersUidCancelRequestBody = {
  authorizedRepresentativeName: "Swee'Pea",
  cancellationReason: "Transfer submitted by accident",
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 | Example                                                                                     |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `authorizedRepresentativeName`                                                              | *string*                                                                                    | :heavy_minus_sign:                                                                          | Name of the authorized representative who wants to cancel the transfer. Max 35 characters.<br/> | Swee'Pea                                                                                    |
| `cancellationReason`                                                                        | *string*                                                                                    | :heavy_minus_sign:                                                                          | Reason for cancellation. Max 135 characters.<br/>                                           | Transfer submitted by accident                                                              |