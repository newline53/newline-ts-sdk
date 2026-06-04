# ListCustomersQueryParamStatus

Filter by onboarding status. Please note that the `initiated` enum value will not be respected unless the `include_initiated=true` parameter is also provided. Multiple values are allowed e.g. `status[]=queued&status[]=active`.


## Example Usage

```typescript
import { ListCustomersQueryParamStatus } from "newline-ts-sdk/models/operations";

let value: ListCustomersQueryParamStatus = "pending_archival";
```

## Values

```typescript
"initiated" | "queued" | "identity_verified" | "active" | "manual_review" | "rejected" | "pending_archival" | "archived" | "under_review"
```