# GetCustodialAccountClosingBalanceResponse

## Example Usage

```typescript
import { GetCustodialAccountClosingBalanceResponse } from "newline-ts-sdk/models/operations";

let value: GetCustodialAccountClosingBalanceResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
    "key1": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    uid: "EhrQZJNjCd79LLYq",
    custodialAccountUid: "Jy8degj6iv2QngLo",
    custodialAccountExternalUid: "ptRLF7nQvy8VoqM1",
    netUsdClosingBalance: "12.34",
    netUsdClosingBalanceAsOf: new Date("1978-08-17"),
  },
};
```

## Fields

| Field                                                                                                                                      | Type                                                                                                                                       | Required                                                                                                                                   | Description                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| `headers`                                                                                                                                  | Record<string, *string*[]>                                                                                                                 | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |
| `result`                                                                                                                                   | [operations.GetCustodialAccountClosingBalanceResponseBody](../../models/operations/get-custodial-account-closing-balance-response-body.md) | :heavy_check_mark:                                                                                                                         | N/A                                                                                                                                        |