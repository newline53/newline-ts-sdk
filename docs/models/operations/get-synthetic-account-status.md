# GetSyntheticAccountStatus

A value indicating the overall state of this Synthetic Account.


## Example Usage

```typescript
import { GetSyntheticAccountStatus } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"initiated" | "active" | "archived" | "failed" | Unrecognized<string>
```