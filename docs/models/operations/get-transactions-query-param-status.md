# GetTransactionsQueryParamStatus

Filter by status. Multiple values are allowed, e.g. `status[]=queued&status[]=pending`.


## Example Usage

```typescript
import { GetTransactionsQueryParamStatus } from "newline-ts-sdk/models/operations";

let value: GetTransactionsQueryParamStatus = "canceled";
```

## Values

```typescript
"canceled" | "queued" | "pending" | "settled" | "failed" | "expired" | "denied"
```