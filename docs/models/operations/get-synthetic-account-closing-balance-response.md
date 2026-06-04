# GetSyntheticAccountClosingBalanceResponse

## Example Usage

```typescript
import { GetSyntheticAccountClosingBalanceResponse } from "newline-ts-sdk/models/operations";

let value: GetSyntheticAccountClosingBalanceResponse = {
  headers: {},
  result: {
    uid: "EhrQZJNjCd79LLYq",
    syntheticAccountUid: "Jy8degj6iv2QngLo",
    syntheticAccountExternalUid: "ptRLF7nQvy8VoqM1",
    netUsdClosingBalance: "12.34",
    netUsdClosingBalanceAsOf: new Date("1978-08-17"),
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                  | Record<string, *string*[]>                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `result`                                                                                                                                   | [operations.GetSyntheticAccountClosingBalanceResponseBody](../../models/operations/get-synthetic-account-closing-balance-response-body.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |