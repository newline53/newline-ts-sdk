# QueryParamCustomerType

Only return Customers with a customer type matching exactly what is submitted. Multiple values are allowed e.g. `customer_type[]=primary&customer_type[]=secondary`.


## Example Usage

```typescript
import { QueryParamCustomerType } from "newline-ts-sdk/models/operations";

let value: QueryParamCustomerType = "primary";
```

## Values

```typescript
"primary" | "secondary" | "sole_proprietor"
```