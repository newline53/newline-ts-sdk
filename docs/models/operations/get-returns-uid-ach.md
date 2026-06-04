# GetReturnsUidAch

## Example Usage

```typescript
import { GetReturnsUidAch } from "newline-ts-sdk/models/operations";

let value: GetReturnsUidAch = {
  achReturnCode: "R02",
  addendaInfo: "TXN0055BADD1E cancelled",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `achReturnCode`                                                                                                                     | [operations.GetReturnsUidAchReturnCode](../../models/operations/get-returns-uid-ach-return-code.md)                                 | :heavy_minus_sign:                                                                                                                  | The reason an ACH payment is being returned. Required if returning an RDFI transaction. Optional if reversing an ODFI transaction.<br/> | R02                                                                                                                                 |
| `addendaInfo`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Freeform text (up to 44 characters) to attach a memo to return.                                                                     | TXN0055BADD1E cancelled                                                                                                             |