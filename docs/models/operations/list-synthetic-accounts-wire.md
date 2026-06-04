# ListSyntheticAccountsWire

Contains wire-specific information. Only populated if the Synthetic Account is in the `wire_external` category.


## Example Usage

```typescript
import { ListSyntheticAccountsWire } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountsWire = {
  counterpartyName: "Marge's Roofing Inc",
  counterpartyBankAddress: {
    line1: "123 Abc St.",
    line2: "Boring, Oregon 97009",
    line3: null,
    country: null,
  },
  counterpartyBankName: "East West Regional Bank",
};
```

## Fields

| Field                                                                                                                                   | Type                                                                                                                                    | Required                                                                                                                                | Description                                                                                                                             | Example                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `counterpartyName`                                                                                                                      | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Name of the business or individual who owns the counterparty Account.<br/>                                                              | Marge's Roofing Inc                                                                                                                     |
| `counterpartyBankAddress`                                                                                                               | [operations.ListSyntheticAccountsCounterpartyBankAddress](../../models/operations/list-synthetic-accounts-counterparty-bank-address.md) | :heavy_minus_sign:                                                                                                                      | Address of the financial institution where the external account is held.<br/>                                                           |                                                                                                                                         |
| `counterpartyBankName`                                                                                                                  | *string*                                                                                                                                | :heavy_minus_sign:                                                                                                                      | Name of the financial institution where the counterparty account is held.<br/>                                                          | East West Regional Bank                                                                                                                 |