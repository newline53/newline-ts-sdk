# CreateSyntheticAccountSyntheticAccountCategory

The name of the Synthetic Account Category associated with the Synthetic Account Type for this account. Refer to the Synthetic Account Type for details.

## Example Usage

```typescript
import { CreateSyntheticAccountSyntheticAccountCategory } from "newline-ts-sdk/models/operations";

let value: CreateSyntheticAccountSyntheticAccountCategory =
  "instant_payment_external";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"general" | "ach_external" | "instant_payment_external" | "wire_external" | Unrecognized<string>
```