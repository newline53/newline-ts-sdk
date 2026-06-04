# PostReturnsAchResponse

## Example Usage

```typescript
import { PostReturnsAchResponse } from "newline-ts-sdk/models/operations";

let value: PostReturnsAchResponse = {
  achReturnCode: "R02",
  addendaInfo: "TXN0055BADD1E cancelled",
};
```

## Fields

| Field                                                                                                                               | Type                                                                                                                                | Required                                                                                                                            | Description                                                                                                                         | Example                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `achReturnCode`                                                                                                                     | [operations.PostReturnsAchReturnCodeResponse](../../models/operations/post-returns-ach-return-code-response.md)                     | :heavy_minus_sign:                                                                                                                  | The reason an ACH payment is being returned. Required if returning an RDFI transaction. Optional if reversing an ODFI transaction.<br/> | R02                                                                                                                                 |
| `addendaInfo`                                                                                                                       | *string*                                                                                                                            | :heavy_minus_sign:                                                                                                                  | Freeform text (up to 44 characters) to attach a memo to return.                                                                     | TXN0055BADD1E cancelled                                                                                                             |