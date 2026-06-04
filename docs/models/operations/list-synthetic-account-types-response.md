# ListSyntheticAccountTypesResponse

## Example Usage

```typescript
import { ListSyntheticAccountTypesResponse } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountTypesResponse = {
  headers: {},
  result: {
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
  },
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                                 | Record<string, *string*[]>                                                                                                | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |
| `result`                                                                                                                  | [operations.ListSyntheticAccountTypesResponseBody](../../models/operations/list-synthetic-account-types-response-body.md) | :heavy_check_mark:                                                                                                        | N/A                                                                                                                       |