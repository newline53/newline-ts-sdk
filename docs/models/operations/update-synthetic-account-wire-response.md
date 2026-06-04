# UpdateSyntheticAccountWireResponse

Contains wire-specific information. Only populated if the Synthetic Account is in the `wire_external` category.


## Example Usage

```typescript
import { UpdateSyntheticAccountWireResponse } from "newline-ts-sdk/models/operations";

let value: UpdateSyntheticAccountWireResponse = {
  counterpartyAddress: {
    line1: "234 Xyz Rd",
    line2: "APT 5",
    line3: "Boston, MA 02110",
    country: "US",
  },
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

| Field                                                                                                                                                        | Type                                                                                                                                                         | Required                                                                                                                                                     | Description                                                                                                                                                  | Example                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `counterpartyAddress`                                                                                                                                        | [operations.UpdateSyntheticAccountWireCounterpartyAddressResponse](../../models/operations/update-synthetic-account-wire-counterparty-address-response.md)   | :heavy_minus_sign:                                                                                                                                           | Address of the business or individual who owns the external account.<br/>                                                                                    | {<br/>"line1": "234 Xyz Rd",<br/>"line2": "APT 5",<br/>"line3": "Boston, MA 02110",<br/>"country": "US"<br/>}                                                |
| `counterpartyName`                                                                                                                                           | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Name of the business or individual who owns the counterparty Account. Required for synthetic accounts in the wire_external category. Maximum 35 characters.<br/> | Marge's Roofing Inc                                                                                                                                          |
| `counterpartyBankAddress`                                                                                                                                    | [operations.UpdateSyntheticAccountCounterpartyBankAddressResponse](../../models/operations/update-synthetic-account-counterparty-bank-address-response.md)   | :heavy_minus_sign:                                                                                                                                           | Address of the financial institution where the external account is held.<br/>                                                                                |                                                                                                                                                              |
| `counterpartyBankName`                                                                                                                                       | *string*                                                                                                                                                     | :heavy_minus_sign:                                                                                                                                           | Name of the financial institution where the counterparty account is held.<br/>                                                                               | East West Regional Bank                                                                                                                                      |