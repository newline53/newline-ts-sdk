# AchReturnCodeRequest

The reason an ACH payment is being returned. Required if returning an RDFI transaction. Optional if reversing an ODFI transaction.


## Example Usage

```typescript
import { AchReturnCodeRequest } from "newline-ts-sdk/models/operations";

let value: AchReturnCodeRequest = "R02";
```

## Values

```typescript
"R01" | "R02" | "R03" | "R04" | "R06" | "R09" | "R10" | "R16" | "R17" | "R20" | "R23" | "R29" | "R31"
```