# GetTransactionEventsNetAsset

Indicates whether the Customer's asset has gone up (`positive`), gone down (`negative`) or stayed the same (`neutral`) as a result of this Transaction Event. This value is determined by `type`.


## Example Usage

```typescript
import { GetTransactionEventsNetAsset } from "newline-ts-sdk/models/operations";

let value: GetTransactionEventsNetAsset = "positive";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"positive" | "negative" | "neutral" | Unrecognized<string>
```