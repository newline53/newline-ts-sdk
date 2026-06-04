# ListPoolsResponseBody

A list of Pools is returned

## Example Usage

```typescript
import { ListPoolsResponseBody } from "newline-ts-sdk/models/operations";

let value: ListPoolsResponseBody = {
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
};
```

## Fields

| Field                                                                    | Type                                                                     | Required                                                                 | Description                                                              | Example                                                                  |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------------------ |
| `totalCount`                                                             | *number*                                                                 | :heavy_minus_sign:                                                       | Total count of items available to retrieve                               | 1                                                                        |
| `count`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Number of items retrieved                                                | 1                                                                        |
| `limit`                                                                  | *number*                                                                 | :heavy_minus_sign:                                                       | Maximum number of items to retrieve                                      | 100                                                                      |
| `offset`                                                                 | *number*                                                                 | :heavy_minus_sign:                                                       | Index of the first item to retrieve                                      | 0                                                                        |
| `data`                                                                   | [operations.ListPoolsData](../../models/operations/list-pools-data.md)[] | :heavy_minus_sign:                                                       | N/A                                                                      |                                                                          |