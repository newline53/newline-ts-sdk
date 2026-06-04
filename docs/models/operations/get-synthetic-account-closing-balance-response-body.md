# GetSyntheticAccountClosingBalanceResponseBody

A single Synthetic Account Closing Balance is returned

## Example Usage

```typescript
import { GetSyntheticAccountClosingBalanceResponseBody } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountClosingBalanceResponseBody = {
  uid: "EhrQZJNjCd79LLYq",
  syntheticAccountUid: "Jy8degj6iv2QngLo",
  syntheticAccountExternalUid: "ptRLF7nQvy8VoqM1",
  netUsdClosingBalance: "12.34",
  netUsdClosingBalanceAsOf: new Date("1978-08-17"),
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `uid`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | Newline-generated unique id resource specific to the current endpoint | EhrQZJNjCd79LLYq                                                      |
| `syntheticAccountUid`                                                 | *string*                                                              | :heavy_minus_sign:                                                    | A unique id referring to the Synthetic Account                        | Jy8degj6iv2QngLo                                                      |
| `syntheticAccountExternalUid`                                         | *string*                                                              | :heavy_minus_sign:                                                    | A unique id referring to the External Synthetic Account               | ptRLF7nQvy8VoqM1                                                      |
| `netUsdClosingBalance`                                                | *string*                                                              | :heavy_minus_sign:                                                    | The USD amount of the Synthetic Account's closing balance             | 12.34                                                                 |
| `netUsdClosingBalanceAsOf`                                            | [Date](../../types/rfcdate.md)                                        | :heavy_minus_sign:                                                    | N/A                                                                   | 1978-08-17                                                            |