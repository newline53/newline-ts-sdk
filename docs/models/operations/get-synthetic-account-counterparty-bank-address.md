# GetSyntheticAccountCounterpartyBankAddress

Address of the financial institution where the external account is held.


## Example Usage

```typescript
import { GetSyntheticAccountCounterpartyBankAddress } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountCounterpartyBankAddress = {
  line1: "123 Abc St.",
  line2: "Boring, Oregon 97009",
  line3: null,
  country: null,
};
```

## Fields

| Field                                                                                                                                 | Type                                                                                                                                  | Required                                                                                                                              | Description                                                                                                                           | Example                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `line1`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 35 characters. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/>                                                    | 123 Abc St.                                                                                                                           |
| `line2`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 35 characters. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/>                                                    | Boring, Oregon 97009                                                                                                                  |
| `line3`                                                                                                                               | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | Optional 32 characters. Note that this length is shorter than the other lines. Cannot contain \# @ $ ! " % & * ; < > { } [ ] _ ^ \ ~<br/> | null                                                                                                                                  |
| `country`                                                                                                                             | *string*                                                                                                                              | :heavy_minus_sign:                                                                                                                    | N/A                                                                                                                                   | null                                                                                                                                  |