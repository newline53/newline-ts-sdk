# GetTransferPaymentType

Recurring (R), single entry (S), or standing authorization entry (ST). If no value is provided, the default value populated in the NACHA file is for a single entry.


## Example Usage

```typescript
import { GetTransferPaymentType } from "newline-ts-sdk/models/operations";

let value: GetTransferPaymentType = "ST";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"R" | "S" | "ST" | Unrecognized<string>
```