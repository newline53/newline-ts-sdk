# ConflictError

A new Synthetic Account is NOT created if the external_uid given is present but not unique


## Example Usage

```typescript
import { ConflictError } from "newline-ts-sdk/models/errors";

// No examples available for this model
```

## Fields

| Field                                                                                                 | Type                                                                                                  | Required                                                                                              | Description                                                                                           |
| ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `errors`                                                                                              | [operations.CreateSyntheticAccountError](../../models/operations/create-synthetic-account-error.md)[] | :heavy_minus_sign:                                                                                    | N/A                                                                                                   |
| `status`                                                                                              | *number*                                                                                              | :heavy_minus_sign:                                                                                    | HTTP Status Code                                                                                      |