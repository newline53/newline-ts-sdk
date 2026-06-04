# GetTransactionsUidIntermediaryBankAddress

Address of the intermediary bank. To be populated if an intermediary bank is required to execute the wire transfer.


## Example Usage

```typescript
import { GetTransactionsUidIntermediaryBankAddress } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUidIntermediaryBankAddress = {
  line1: "345 Def Ave",
  line2: "San Francisco",
  line3: "CA 94016",
  country: "US",
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `line1`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 35 characters. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/>                                                    | 123 Abc St.                                                                                                                           |
| `line2`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 35 characters. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/>                                                    | Boring, Oregon 97009                                                                                                                  |
| `line3`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 32 characters. Note that this length is shorter than the other lines. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/> | null                                                                                                                                  |
| `country`                                                                                                                             | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | null                                                                                                                                  |