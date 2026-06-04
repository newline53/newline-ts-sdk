# PutVirtualReferenceNumbersUidLockRequest

## Example Usage

```typescript
import { PutVirtualReferenceNumbersUidLockRequest } from "newline-ts-sdk/models/operations";

let value: PutVirtualReferenceNumbersUidLockRequest = {
  uid: "<id>",
  body: {
    lockReason: "admin",
  },
};
```

## Fields

| Field                                                                                                                                     | Type                                                                                                                                      | Required                                                                                                                                  | Description                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                                                     | *string*                                                                                                                                  | :heavy_check_mark:                                                                                                                        | Newline-generated unique id resource specific to the current endpoint                                                                     |
| `body`                                                                                                                                    | [operations.PutVirtualReferenceNumbersUidLockRequestBody](../../models/operations/put-virtual-reference-numbers-uid-lock-request-body.md) | :heavy_check_mark:                                                                                                                        | N/A                                                                                                                                       |