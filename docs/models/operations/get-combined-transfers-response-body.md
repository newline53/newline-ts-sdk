# GetCombinedTransfersResponseBody

A list of Combined Transfers is returned

## Example Usage

```typescript
import { GetCombinedTransfersResponseBody } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
      createdAt: "2025-03-27T09:23:07.890Z",
      errors: [
        {
          code: 33005,
          title: "Could not continue Combined Transfer",
          detail: "An exception occurred while continuing a Combined Transfer",
          occurredAt: "2025-03-27T09:23:07.890Z",
        },
      ],
      externalUid: "YrfDrfVRgpPgnhF5",
      status: "pending",
      uid: "dYTG8WAWAh5UyvY7",
    },
  ],
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | Total count of items available to retrieve                                                      | 1                                                                                               |
| `count`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of items retrieved                                                                       | 1                                                                                               |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Maximum number of items to retrieve                                                             | 100                                                                                             |
| `offset`                                                                                        | *number*                                                                                        | :heavy_minus_sign:                                                                              | Index of the first item to retrieve                                                             | 0                                                                                               |
| `data`                                                                                          | [operations.GetCombinedTransfersData](../../models/operations/get-combined-transfers-data.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |