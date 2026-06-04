# PutVirtualReferenceNumbersUidLockRequestBody

## Example Usage

```typescript
import { PutVirtualReferenceNumbersUidLockRequestBody } from "newline-ts-sdk/models/operations";

let value: PutVirtualReferenceNumbersUidLockRequestBody = {
  lockReason: "customer_request",
};
```

## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    | Example                                                                        |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `lockReason`                                                                   | [operations.LockReasonRequest](../../models/operations/lock-reason-request.md) | :heavy_check_mark:                                                             | Lock reason                                                                    | disabled by client request                                                     |