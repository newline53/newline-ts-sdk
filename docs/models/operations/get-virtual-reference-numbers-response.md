# GetVirtualReferenceNumbersResponse

## Example Usage

```typescript
import { GetVirtualReferenceNumbersResponse } from "newline-ts-sdk/models/operations";

let value: GetVirtualReferenceNumbersResponse = {
  headers: {},
  result: {
    totalCount: 1,
    count: 1,
    limit: 100,
    offset: 0,
    data: [
      {
        uid: "dYTG8WAWAh5UyvY7",
        name: "greenfield1",
        archivedAt: "<value>",
        createdAt: "2023-10-04T13:23:04.345Z",
        custodialAccountUid: "tcvYpQ1ip76LaL4a",
        externalUid: "partner-generated-id",
        instantPaymentRailRegistrationStatus: "registered",
        lockedAt: "<value>",
        lockReason: "admin",
        routingNumber: "123456789",
        status: "active",
        syntheticAccountUid: "Dg1EPao8XukUpHG8",
        virtualReferenceNumberLastFour: "3456",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                                       | Type                                                                                                                        | Required                                                                                                                    | Description                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                   | Record<string, *string*[]>                                                                                                  | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |
| `result`                                                                                                                    | [operations.GetVirtualReferenceNumbersResponseBody](../../models/operations/get-virtual-reference-numbers-response-body.md) | :heavy_check_mark:                                                                                                          | N/A                                                                                                                         |