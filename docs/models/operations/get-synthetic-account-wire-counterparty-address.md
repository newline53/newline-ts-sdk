# GetSyntheticAccountWireCounterpartyAddress

Address of the business or individual who owns the external account.


## Example Usage

```typescript
import { GetSyntheticAccountWireCounterpartyAddress } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountWireCounterpartyAddress = {
  line1: "234 Xyz Rd",
  line2: "APT 5",
  line3: "Boston, MA 02110",
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