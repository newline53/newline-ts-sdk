# GetVirtualReferenceNumbersResponseBody

A list of Virtual Reference Numbers is returned

## Example Usage

```typescript
import { GetVirtualReferenceNumbersResponseBody } from "newline-ts-sdk/models/operations";

let value: GetVirtualReferenceNumbersResponseBody = {
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
};
```

## Fields

| Field                                                                                                        | Type                                                                                                         | Required                                                                                                     | Description                                                                                                  | Example                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `totalCount`                                                                                                 | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Total count of items available to retrieve                                                                   | 1                                                                                                            |
| `count`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Number of items retrieved                                                                                    | 1                                                                                                            |
| `limit`                                                                                                      | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Maximum number of items to retrieve                                                                          | 100                                                                                                          |
| `offset`                                                                                                     | *number*                                                                                                     | :heavy_minus_sign:                                                                                           | Index of the first item to retrieve                                                                          | 0                                                                                                            |
| `data`                                                                                                       | [operations.GetVirtualReferenceNumbersData](../../models/operations/get-virtual-reference-numbers-data.md)[] | :heavy_minus_sign:                                                                                           | N/A                                                                                                          |                                                                                                              |