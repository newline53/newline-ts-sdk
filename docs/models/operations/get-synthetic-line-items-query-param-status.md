# GetSyntheticLineItemsQueryParamStatus

Filter by status. Multiple values are allowed, e.g. `status[]=begun&status[]=in_progress`.


## Example Usage

```typescript
import { GetSyntheticLineItemsQueryParamStatus } from "newline-ts-sdk/models/operations";

let value: GetSyntheticLineItemsQueryParamStatus = "settled";
```

## Values

```typescript
"begun" | "failed" | "in_progress" | "settled"
```