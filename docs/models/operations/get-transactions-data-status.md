# GetTransactionsDataStatus

When a Transfer is created via [POST /transfers](/reference/post_transfers), an associated Transaction is created with status `queued`. If it involves at least one custodial transfer, once the custodial transfer is initiated, the status will transition to `pending`.

Once a Transaction is settled, whether it has asset movement in custodial level, or is synthetic-only, or is RDFI (Receiving Depository Financial Institution, meaning no Newline Transfer was associated), it will have a `settled` status.


## Example Usage

```typescript
import { GetTransactionsDataStatus } from "newline-ts-sdk/models/operations";

let value: GetTransactionsDataStatus = "settled";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"canceled" | "queued" | "pending" | "settled" | "failed" | "denied" | "expired" | Unrecognized<string>
```