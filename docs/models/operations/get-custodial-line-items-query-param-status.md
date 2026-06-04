# GetCustodialLineItemsQueryParamStatus

Filter by status. Multiple values are allowed, e.g. `status[]=pending&status[]=settled`.


## Example Usage

```typescript
import { GetCustodialLineItemsQueryParamStatus } from "newline-ts-sdk/models/operations";

let value: GetCustodialLineItemsQueryParamStatus = "voided";
```

## Values

```typescript
"settled" | "voided"
```