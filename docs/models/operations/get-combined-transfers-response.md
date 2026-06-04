# GetCombinedTransfersResponse

## Example Usage

```typescript
import { GetCombinedTransfersResponse } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
    "key2": [
      "<value 1>",
    ],
  },
  result: {
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
            detail:
              "An exception occurred while continuing a Combined Transfer",
            occurredAt: "2025-03-27T09:23:07.890Z",
          },
        ],
        externalUid: "YrfDrfVRgpPgnhF5",
        status: "pending",
        uid: "dYTG8WAWAh5UyvY7",
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [operations.GetCombinedTransfersResponseBody](../../models/operations/get-combined-transfers-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |