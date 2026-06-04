# PutTransfersUidCancelRequest

## Example Usage

```typescript
import { PutTransfersUidCancelRequest } from "newline-ts-sdk/models/operations";

let value: PutTransfersUidCancelRequest = {
  uid: "<id>",
  body: {
    authorizedRepresentativeName: "Swee'Pea",
    cancellationReason: "Transfer submitted by accident",
  },
};
```

## Fields

| Field                                                                                                           | Type                                                                                                            | Required                                                                                                        | Description                                                                                                     |
| --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                           | *string*                                                                                                        | :heavy_check_mark:                                                                                              | Newline-generated unique id resource specific to the current endpoint                                           |
| `body`                                                                                                          | [operations.PutTransfersUidCancelRequestBody](../../models/operations/put-transfers-uid-cancel-request-body.md) | :heavy_check_mark:                                                                                              | N/A                                                                                                             |