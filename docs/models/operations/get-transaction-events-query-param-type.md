# GetTransactionEventsQueryParamType

Filter by type. Multiple values are allowed, e.g. `type[]=odfi_ach_deposit&type[]=odfi_ach_withdrawal`.


## Example Usage

```typescript
import { GetTransactionEventsQueryParamType } from "newline-ts-sdk/models/operations";

let value: GetTransactionEventsQueryParamType = "odfi_ach_deposit";
```

## Values

```typescript
"odfi_ach_deposit" | "odfi_ach_withdrawal" | "rdfi_ach_deposit" | "rdfi_ach_withdrawal"
```