# GetTransactionsUidNetAsset

Indicates whether the Customer's asset has gone up (`positive`), gone down (`negative`) or stayed the same (`neutral`) as a result of this Transaction.


## Example Usage

```typescript
import { GetTransactionsUidNetAsset } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUidNetAsset = "positive";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"positive" | "negative" | "neutral" | Unrecognized<string>
```