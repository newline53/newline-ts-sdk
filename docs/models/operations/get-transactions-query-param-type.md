# GetTransactionsQueryParamType

Filter by type. Multiple values are allowed, e.g. `type[]=dispute&type[]=fee`.


## Example Usage

```typescript
import { GetTransactionsQueryParamType } from "newline-ts-sdk/models/operations";

let value: GetTransactionsQueryParamType = "ach";
```

## Values

```typescript
"ach" | "ach_return" | "atm_withdrawal" | "book_transfer" | "card_load" | "card_purchase" | "card_refund" | "cash_load" | "corporate_action" | "credit" | "denied_authorization" | "dispute" | "fee" | "instant_payment" | "interest" | "other" | "peer_to_peer_transfer" | "reversal" | "reversed_transfer" | "wire"
```