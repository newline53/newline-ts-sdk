# GetTransactionsWireCounterpartyBankAddress

Address of the financial institution where the external account is held.


## Example Usage

```typescript
import { GetTransactionsWireCounterpartyBankAddress } from "newline-ts-sdk/models/operations";

let value: GetTransactionsWireCounterpartyBankAddress = {
  line1: "123 Abc St.",
  line2: "Boring, Oregon 97009",
  line3: "<value>",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `line1`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | 123 Abc St.                                            |
| `line2`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | Boring, Oregon 97009                                   |
| `line3`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | null                                                   |