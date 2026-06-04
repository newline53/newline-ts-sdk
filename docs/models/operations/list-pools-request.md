# ListPoolsRequest

## Example Usage

```typescript
import { ListPoolsRequest } from "newline-ts-sdk/models/operations";

let value: ListPoolsRequest = {
  customerUid: "uKxmLxUEiSj5h4M3",
};
```

## Fields

| Field                                                                                                                     | Type                                                                                                                      | Required                                                                                                                  | Description                                                                                                               | Example                                                                                                                   |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `customerUid`                                                                                                             | *string*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Filter by Customer. Multiple values are allowed, e.g. `customer_uid[]=uKxmLxUEiSj5h4M3&customer_uid[]=y9reyPMNEWuuYSC1`.<br/> | uKxmLxUEiSj5h4M3                                                                                                          |
| `limit`                                                                                                                   | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Maximum number of items to retrieve. This filter is automatically applied with the default value if not given.<br/>       |                                                                                                                           |
| `offset`                                                                                                                  | *number*                                                                                                                  | :heavy_minus_sign:                                                                                                        | Index of the items to start retrieving from                                                                               |                                                                                                                           |