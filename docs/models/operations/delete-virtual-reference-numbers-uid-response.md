# DeleteVirtualReferenceNumbersUidResponse

## Example Usage

```typescript
import { DeleteVirtualReferenceNumbersUidResponse } from "newline-ts-sdk/models/operations";

let value: DeleteVirtualReferenceNumbersUidResponse = {
  headers: {
    "key": [],
    "key1": [],
    "key2": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    archivedAt: "<value>",
    createdAt: "2023-10-04T13:23:04.345Z",
    custodialAccountUid: "tcvYpQ1ip76LaL4a",
    externalUid: "partner-generated-id",
    instantPaymentRailRegistrationStatus: "registered",
    lockedAt: "<value>",
    lockReason: "customer_request",
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

| Field                                                                                                                                    | Type                                                                                                                                     | Required                                                                                                                                 | Description                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                                | Record<string, *string*[]>                                                                                                               | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |
| `result`                                                                                                                                 | [operations.DeleteVirtualReferenceNumbersUidResponseBody](../../models/operations/delete-virtual-reference-numbers-uid-response-body.md) | :heavy_check_mark:                                                                                                                       | N/A                                                                                                                                      |