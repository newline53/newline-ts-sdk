# ListSyntheticAccountTypesSyntheticAccountCategory

The name of the Synthetic Account Category for this type. Accounts can be in one of several categories that indicate their handling properties and defining characteristics such as 'general' or 'external'. As an example, 'external' accounts do not actually hold any assets and are instead used to represent an account at an external institution for use in initiating transfers.

## Example Usage

```typescript
import { ListSyntheticAccountTypesSyntheticAccountCategory } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountTypesSyntheticAccountCategory = "ach_external";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"general" | "ach_external" | "instant_payments_external" | "wire_external" | Unrecognized<string>
```