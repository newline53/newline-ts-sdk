# GetSyntheticAccountTypeResponse

## Example Usage

```typescript
import { GetSyntheticAccountTypeResponse } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountTypeResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
      "<value 3>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    uid: "EhrQZJNjCd79LLYq",
    name: "New Resource Name",
    description:
      "This synthetic_account_type will be used to open synthetic_accounts for our customers that will only contain a USD asset type.",
    programUid: "kaxHFJnWvJxRJZxq",
  },
};
```

## Fields

| Field                                                                                                                 | Type                                                                                                                  | Required                                                                                                              | Description                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                             | Record<string, *string*[]>                                                                                            | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |
| `result`                                                                                                              | [operations.GetSyntheticAccountTypeResponseBody](../../models/operations/get-synthetic-account-type-response-body.md) | :heavy_check_mark:                                                                                                    | N/A                                                                                                                   |