# ListCustomerProductsResponse

## Example Usage

```typescript
import { ListCustomerProductsResponse } from "newline-ts-sdk/models/operations";

let value: ListCustomerProductsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    totalCount: 1,
    count: 1,
    limit: 100,
    offset: 0,
    data: [
      {
        uid: "Tegvs2E4TQgVYYMj",
        status: "active",
        customerUid: "DuSzg6Ywr3cY9mw4",
        customerEmail: "olive.oyl@newline53.com",
        productUid: "b8bemEKjAQhunbah",
        productName: "Checking",
        programUid: "F1oFMKafpB2Zm6ng",
        activatedAt: new Date("2019-10-19T08:15:13Z"),
      },
    ],
  },
};
```

## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `headers`                                                                                                      | Record<string, *string*[]>                                                                                     | :heavy_check_mark:                                                                                             | N/A                                                                                                            |
| `result`                                                                                                       | [operations.ListCustomerProductsResponseBody](../../models/operations/list-customer-products-response-body.md) | :heavy_check_mark:                                                                                             | N/A                                                                                                            |