# PutVirtualReferenceNumbersUidLockResponse

## Example Usage

```typescript
import { PutVirtualReferenceNumbersUidLockResponse } from "newline-ts-sdk/models/operations";

let value: PutVirtualReferenceNumbersUidLockResponse = {
  headers: {},
  result: {
    archivedAt: "<value>",
    createdAt: "2023-10-04T13:23:04.345Z",
    custodialAccountUid: "tcvYpQ1ip76LaL4a",
    externalUid: "partner-generated-id",
    instantPaymentRailRegistrationStatus: "registered",
    lockedAt: "<value>",
    lockReason: "admin",
    name: "greenfield1",
    routingNumber: "123456789",
    status: "active",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    uid: "dYTG8WAWAh5UyvY7",
    virtualReferenceNumberLastFour: "3456",
    virtualReferenceNumber: "1234567890123456",
  },
};
```

## Fields

| Field                                                                                                                                       | Type                                                                                                                                        | Required                                                                                                                                    | Description                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                   | Record<string, *string*[]>                                                                                                                  | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |
| `result`                                                                                                                                    | [operations.PutVirtualReferenceNumbersUidLockResponseBody](../../models/operations/put-virtual-reference-numbers-uid-lock-response-body.md) | :heavy_check_mark:                                                                                                                          | N/A                                                                                                                                         |