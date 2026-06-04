# ListCustodialAccountsStatus

A value indicating the overall state of this Custodial Account (nullable if account type is asset).


## Example Usage

```typescript
import { ListCustodialAccountsStatus } from "newline-ts-sdk/models/operations";

let value: ListCustodialAccountsStatus = "active";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"active" | "archived" | Unrecognized<string>
```