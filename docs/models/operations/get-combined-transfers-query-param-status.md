# GetCombinedTransfersQueryParamStatus

Filter by status. Multiple values are allowed, e.g. `status[]=queued&status[]=pending`.


## Example Usage

```typescript
import { GetCombinedTransfersQueryParamStatus } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersQueryParamStatus = "completed";
```

## Values

```typescript
"queued" | "pending" | "failed" | "completed"
```