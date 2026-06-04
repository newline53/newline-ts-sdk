# ListCustomerProductsRequest

## Example Usage

```typescript
import { ListCustomerProductsRequest } from "newline-ts-sdk/models/operations";

let value: ListCustomerProductsRequest = {
  programUid: "pQtTCSXz57fuefzp",
  productUid: "zbJbEa72eKMgbbBv",
  customerUid: "uKxmLxUEiSj5h4M3",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `programUid`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Only return Customer Products belonging to the submitted Program                                                          | pQtTCSXz57fuefzp                                                                                                          |
| `productUid`                                                                                                              | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Only return Customer Products belonging to the submitted Product                                                          | zbJbEa72eKMgbbBv                                                                                                          |
| `customerUid`                                                                                                             | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Filter by Customer. Multiple values are allowed, e.g. `customer_uid[]=uKxmLxUEiSj5h4M3&customer_uid[]=y9reyPMNEWuuYSC1`.<br/> | uKxmLxUEiSj5h4M3                                                                                                          |