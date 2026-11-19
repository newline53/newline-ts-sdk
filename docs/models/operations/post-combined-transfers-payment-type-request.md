# PostCombinedTransfersPaymentTypeRequest

Recurring (R), single entry (S), or standing authorization entry (ST). If no value is provided, the default value populated in the NACHA file is for a single entry.


## Example Usage

```typescript
import { PostCombinedTransfersPaymentTypeRequest } from "newline-ts-sdk/models/operations";

let value: PostCombinedTransfersPaymentTypeRequest = "ST";
```

## Values

```typescript
"R" | "S" | "ST"
```