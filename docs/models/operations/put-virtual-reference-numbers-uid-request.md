# PutVirtualReferenceNumbersUidRequest

## Example Usage

```typescript
import { PutVirtualReferenceNumbersUidRequest } from "newline-ts-sdk/models/operations";

let value: PutVirtualReferenceNumbersUidRequest = {
  uid: "<id>",
  body: {
    externalUid: "partner-generated-id",
    name: "greenfield1",
  },
};
```

## Fields

| Field                                                                                                                            | Type                                                                                                                             | Required                                                                                                                         | Description                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| `uid`                                                                                                                            | *string*                                                                                                                         | :heavy_check_mark:                                                                                                               | Newline-generated unique id resource specific to the current endpoint                                                            |
| `body`                                                                                                                           | [operations.PutVirtualReferenceNumbersUidRequestBody](../../models/operations/put-virtual-reference-numbers-uid-request-body.md) | :heavy_check_mark:                                                                                                               | N/A                                                                                                                              |