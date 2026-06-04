# GetReturnsStatus

A value indicating the overall status of the Return.


## Example Usage

```typescript
import { GetReturnsStatus } from "newline-ts-sdk/models/operations";

let value: GetReturnsStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"canceled" | "queued" | "pending" | "settled" | "failed" | Unrecognized<string>
```