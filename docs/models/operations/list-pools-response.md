# ListPoolsResponse

## Example Usage

```typescript
import { ListPoolsResponse } from "newline-ts-sdk/models/operations";

let value: ListPoolsResponse = {
  headers: {
    "key": [],
    "key1": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
  },
  result: {
    totalCount: 1,
    count: 1,
    limit: 100,
    offset: 0,
    data: [
      {
        uid: "EhrQZJNjCd79LLYq",
        name: "New Resource Name",
        ownerCustomerUid: "EhrQZJNjCd79LLYq",
        customerUids: [
          "[\"EhrQZJNjCd79LLYq\",\"PbqZThW5fhQUYRx1\"]",
        ],
      },
    ],
  },
};
```

## Fields

| Field                                                                                   | Type                                                                                    | Required                                                                                | Description                                                                             |
| --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| `headers`                                                                               | Record<string, *string*[]>                                                              | :heavy_check_mark:                                                                      | N/A                                                                                     |
| `result`                                                                                | [operations.ListPoolsResponseBody](../../models/operations/list-pools-response-body.md) | :heavy_check_mark:                                                                      | N/A                                                                                     |