# ListCustomerProductsData

## Example Usage

```typescript
import { ListCustomerProductsData } from "newline-ts-sdk/models/operations";

let value: ListCustomerProductsData = {
  uid: "Tegvs2E4TQgVYYMj",
  status: "active",
  customerUid: "DuSzg6Ywr3cY9mw4",
  customerEmail: "olive.oyl@newline53.com",
  productUid: "b8bemEKjAQhunbah",
  productName: "Checking",
  programUid: "F1oFMKafpB2Zm6ng",
  activatedAt: new Date("2019-10-19T08:15:13Z"),
};
```

## Fields

| Field                                                                                             | Type                                                                                              | Required                                                                                          | Description                                                                                       | Example                                                                                           |
| ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `uid`                                                                                             | *string*                                                                                          | :heavy_minus_sign:                                                                                | A unique identifier for this resource                                                             | Tegvs2E4TQgVYYMj                                                                                  |
| `status`                                                                                          | [operations.ListCustomerProductsStatus](../../models/operations/list-customer-products-status.md) | :heavy_minus_sign:                                                                                | the status of the Customer Product onboarding                                                     | active                                                                                            |
| `customerUid`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | A unique identifier for a Customer                                                                | DuSzg6Ywr3cY9mw4                                                                                  |
| `customerEmail`                                                                                   | *string*                                                                                          | :heavy_minus_sign:                                                                                | The Customer's email address                                                                      | olive.oyl@newline53.com                                                                           |
| `productUid`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | A unique identifier for a Product                                                                 | b8bemEKjAQhunbah                                                                                  |
| `productName`                                                                                     | *string*                                                                                          | :heavy_minus_sign:                                                                                | The name of the Product                                                                           | Checking                                                                                          |
| `programUid`                                                                                      | *string*                                                                                          | :heavy_minus_sign:                                                                                | A unique identifier for a Program                                                                 | F1oFMKafpB2Zm6ng                                                                                  |
| `activatedAt`                                                                                     | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)     | :heavy_minus_sign:                                                                                | The date and time at which the Customer Product became active.                                    | 2019-10-19T08:15:13Z                                                                              |