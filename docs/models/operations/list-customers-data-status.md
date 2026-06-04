# ListCustomersDataStatus

A value indicating the overall state of this Customer.


## Example Usage

```typescript
import { ListCustomersDataStatus } from "newline-ts-sdk/models/operations";

let value: ListCustomersDataStatus = "pending_archival";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "queued" | "identity_verified" | "active" | "manual_review" | "rejected" | "pending_archival" | "archived" | "under_review" | Unrecognized<string>
```