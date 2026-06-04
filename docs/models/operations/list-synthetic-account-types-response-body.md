# ListSyntheticAccountTypesResponseBody

A list of Synthetic Account Types is returned

## Example Usage

```typescript
import { ListSyntheticAccountTypesResponseBody } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountTypesResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
      uid: "EhrQZJNjCd79LLYq",
      name: "New Resource Name",
      description:
        "This synthetic_account_type will be used to open synthetic_accounts for our customers that will only contain a USD asset type.",
      programUid: "kaxHFJnWvJxRJZxq",
    },
  ],
};
```

## Fields

| Field                                                                                                      | Type                                                                                                       | Required                                                                                                   | Description                                                                                                | Example                                                                                                    |
| ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                               | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Total count of items available to retrieve                                                                 | 1                                                                                                          |
| `count`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Number of items retrieved                                                                                  | 1                                                                                                          |
| `limit`                                                                                                    | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Maximum number of items to retrieve                                                                        | 100                                                                                                        |
| `offset`                                                                                                   | *number*                                                                                                   | :heavy_minus_sign:                                                                                         | Index of the first item to retrieve                                                                        | 0                                                                                                          |
| `data`                                                                                                     | [operations.ListSyntheticAccountTypesData](../../models/operations/list-synthetic-account-types-data.md)[] | :heavy_minus_sign:                                                                                         | N/A                                                                                                        |                                                                                                            |