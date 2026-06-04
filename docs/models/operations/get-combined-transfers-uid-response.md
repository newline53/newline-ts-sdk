# GetCombinedTransfersUidResponse

## Example Usage

```typescript
import { GetCombinedTransfersUidResponse } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersUidResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
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
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.GetCombinedTransfersUidResponseBody](../../models/operations/get-combined-transfers-uid-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |