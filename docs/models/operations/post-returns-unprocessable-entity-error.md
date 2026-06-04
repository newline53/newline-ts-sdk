# PostReturnsUnprocessableEntityError

## Example Usage

```typescript
import { PostReturnsUnprocessableEntityError } from "newline-ts-sdk/models/operations";

let value: PostReturnsUnprocessableEntityError = {
  code: 1234,
  title: "Sorry, something went wrong",
  detail: "Details about it here.",
  occurredAt: "2022-10-21T18:22:22.300Z",
  extra: "Extra details are sometimes provided here.",
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         | Example                                                                             |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `code`                                                                              | *number*                                                                            | :heavy_minus_sign:                                                                  | Code provided by Newline for reference                                              | 1234                                                                                |
| `title`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Title of Error Code                                                                 | Sorry, something went wrong                                                         |
| `detail`                                                                            | *string*                                                                            | :heavy_minus_sign:                                                                  | Description of Error Code                                                           | Details about it here.                                                              |
| `occurredAt`                                                                        | *string*                                                                            | :heavy_minus_sign:                                                                  | Error Timestamp                                                                     | 2022-10-21T18:22:22.300Z                                                            |
| `extra`                                                                             | *string*                                                                            | :heavy_minus_sign:                                                                  | Included based on Error Code; Additional context to help users self-solve the error | Extra details are sometimes provided here.                                          |