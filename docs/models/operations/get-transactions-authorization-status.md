# GetTransactionsAuthorizationStatus

A value indicating the current state of authorization for this transaction.


## Example Usage

```typescript
import { GetTransactionsAuthorizationStatus } from "newline-ts-sdk/models/operations";

let value: GetTransactionsAuthorizationStatus = "client_denied";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"auto_approved" | "auto_denied" | "client_approval_pending" | "client_approved" | "client_denied" | "client_unanswered_auto_approved" | "client_unanswered_auto_denied" | "created" | Unrecognized<string>
```