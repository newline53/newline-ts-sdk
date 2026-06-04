# PostReturnsStatus

A value indicating the overall status of the Return.


## Example Usage

```typescript
import { PostReturnsStatus } from "newline-ts-sdk/models/operations";

let value: PostReturnsStatus = "pending";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"canceled" | "queued" | "pending" | "settled" | "failed" | Unrecognized<string>
```