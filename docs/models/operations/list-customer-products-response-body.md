# ListCustomerProductsResponseBody

A list of Customer Products is returned

## Example Usage

```typescript
import { ListCustomerProductsResponseBody } from "newline-ts-sdk/models/operations";

let value: ListCustomerProductsResponseBody = {
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
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     | Example                                                                                         |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `totalCount`                                                                                    | *number*                                                                                        | :heavy_minus_sign:                                                                              | Total count of items available to retrieve                                                      | 1                                                                                               |
| `count`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Number of items retrieved                                                                       | 1                                                                                               |
| `limit`                                                                                         | *number*                                                                                        | :heavy_minus_sign:                                                                              | Maximum number of items to retrieve                                                             | 100                                                                                             |
| `offset`                                                                                        | *number*                                                                                        | :heavy_minus_sign:                                                                              | Index of the first item to retrieve                                                             | 0                                                                                               |
| `data`                                                                                          | [operations.ListCustomerProductsData](../../models/operations/list-customer-products-data.md)[] | :heavy_minus_sign:                                                                              | N/A                                                                                             |                                                                                                 |