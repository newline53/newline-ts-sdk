# GetTransactionsUidWireCounterpartyAddress

Address of the business or individual who owns the external account.


## Example Usage

```typescript
import { GetTransactionsUidWireCounterpartyAddress } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUidWireCounterpartyAddress = {
  line1: "234 Xyz Rd APT 5",
  line2: "Boston, MA",
  line3: "2110",
};
```

## Fields

| Field                                                  | Type                                                   | Required                                               | Description                                            | Example                                                |
| ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ | ------------------------------------------------------ |
| `line1`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | 123 Abc St.                                            |
| `line2`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | Boring, Oregon 97009                                   |
| `line3`                                                | *string*                                               | :heavy_minus_sign:                                     | Part of an unparsed address. Data may vary or be null. | null                                                   |