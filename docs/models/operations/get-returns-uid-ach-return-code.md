# GetReturnsUidAchReturnCode

The reason an ACH payment is being returned. Required if returning an RDFI transaction. Optional if reversing an ODFI transaction.


## Example Usage

```typescript
import { GetReturnsUidAchReturnCode } from "newline-ts-sdk/models/operations";

let value: GetReturnsUidAchReturnCode = "R02";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"R01" | "R02" | "R03" | "R04" | "R06" | "R09" | "R10" | "R16" | "R17" | "R20" | "R23" | "R29" | "R31" | Unrecognized<string>
```