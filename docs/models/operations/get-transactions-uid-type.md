# GetTransactionsUidType

Transactions are categorized by Type.  See the Transaction Statuses and Transaction Types section below for a list and definition of each Transaction Type that Newline supports.


## Example Usage

```typescript
import { GetTransactionsUidType } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUidType = "ach";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"ach" | "ach_return" | "atm_withdrawal" | "book_transfer" | "card_load" | "card_purchase" | "card_refund" | "cash_load" | "corporate_action" | "credit" | "denied_authorization" | "dispute" | "fee" | "initiated_ach_return" | "initiated_ach_reversal" | "initiated_wire_return" | "instant_payment" | "interest" | "other" | "peer_to_peer_transfer" | "reversal" | "reversed_transfer" | "set_account_balance" | "wire" | Unrecognized<string>
```