# ListCustodialAccountClosingBalancesData

## Example Usage

```typescript
import { ListCustodialAccountClosingBalancesData } from "newline-ts-sdk/models/operations";

let value: ListCustodialAccountClosingBalancesData = {
  uid: "EhrQZJNjCd79LLYq",
  custodialAccountUid: "Jy8degj6iv2QngLo",
  custodialAccountExternalUid: "ptRLF7nQvy8VoqM1",
  netUsdClosingBalance: "12.34",
  netUsdClosingBalanceAsOf: new Date("1978-08-17"),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `uid`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | Newline-generated unique id resource specific to the current endpoint | EhrQZJNjCd79LLYq                                                      |
| `custodialAccountUid`                                                 | *string*                                                              | :heavy_minus_sign:                                                    | A unique id referring to the Custodial Account                        | Jy8degj6iv2QngLo                                                      |
| `custodialAccountExternalUid`                                         | *string*                                                              | :heavy_minus_sign:                                                    | A unique id referring to the External Custodial Account               | ptRLF7nQvy8VoqM1                                                      |
| `netUsdClosingBalance`                                                | *string*                                                              | :heavy_minus_sign:                                                    | The USD amount of the Custodial Account's closing balance             | 12.34                                                                 |
| `netUsdClosingBalanceAsOf`                                            | [Date](../../types/rfcdate.md)                                        | :heavy_minus_sign:                                                    | N/A                                                                   | 1978-08-17                                                            |