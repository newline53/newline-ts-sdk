# GetPoolResponse

## Example Usage

```typescript
import { GetPoolResponse } from "newline-ts-sdk/models/operations";

let value: GetPoolResponse = {
  headers: {
    "key": [],
  },
  result: {
    uid: "EhrQZJNjCd79LLYq",
    name: "New Resource Name",
    ownerCustomerUid: "EhrQZJNjCd79LLYq",
    customerUids: [
      "[\"EhrQZJNjCd79LLYq\",\"PbqZThW5fhQUYRx1\"]",
    ],
  },
};
```

## Fields

| Field                                                                               | Type                                                                                | Required                                                                            | Description                                                                         |
| ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| `headers`                                                                           | Record<string, *string*[]>                                                          | :heavy_check_mark:                                                                  | N/A                                                                                 |
| `result`                                                                            | [operations.GetPoolResponseBody](../../models/operations/get-pool-response-body.md) | :heavy_check_mark:                                                                  | N/A                                                                                 |