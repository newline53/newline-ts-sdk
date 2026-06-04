# DeniedReason

The reason for the authorization denial. For wire transactions, must be one of (`vrn_archived`), (`vrn_locked`), (`international_payment`), (`unauthorized_credit`). For ACH transactions, must be one of (`vrn_archived`), (`vrn_locked`), (`debit_limit_exceeded`), (`unauthorized_credit`), (`unauthorized_debit`), (`insufficient_funds`)


## Example Usage

```typescript
import { DeniedReason } from "newline-ts-sdk/models/operations";

let value: DeniedReason = "vrn_locked";
```

## Values

```typescript
"debit_limit_exceeded" | "insufficient_funds" | "international_payment" | "unauthorized_credit" | "unauthorized_debit" | "vrn_archived" | "vrn_locked"
```