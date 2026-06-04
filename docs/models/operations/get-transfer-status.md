# GetTransferStatus

A value indicating the overall status of the Transfer.


## Example Usage

```typescript
import { GetTransferStatus } from "newline-ts-sdk/models/operations";

let value: GetTransferStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"canceled" | "queued" | "pending" | "settled" | "failed" | Unrecognized<string>
```