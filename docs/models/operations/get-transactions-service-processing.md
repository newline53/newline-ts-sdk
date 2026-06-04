# GetTransactionsServiceProcessing

Requested service processing duration for the ACH transfer. Allowable values are: STANDARD or SAMEDAY


## Example Usage

```typescript
import { GetTransactionsServiceProcessing } from "newline-ts-sdk/models/operations";

let value: GetTransactionsServiceProcessing = "SAMEDAY";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"SAMEDAY" | "STANDARD" | Unrecognized<string>
```