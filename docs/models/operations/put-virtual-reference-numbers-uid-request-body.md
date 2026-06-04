# PutVirtualReferenceNumbersUidRequestBody

## Example Usage

```typescript
import { PutVirtualReferenceNumbersUidRequestBody } from "newline-ts-sdk/models/operations";

let value: PutVirtualReferenceNumbersUidRequestBody = {
  externalUid: "partner-generated-id",
  name: "greenfield1",
};
```

## Fields

| Field                                                                                                                                              | Type                                                                                                                                               | Required                                                                                                                                           | Description                                                                                                                                        | Example                                                                                                                                            |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `externalUid`                                                                                                                                      | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A unique identifier the Client supplies. It must be unique within the resource type. If the same value is given, no new resource will be created.<br/> | partner-generated-id                                                                                                                               |
| `name`                                                                                                                                             | *string*                                                                                                                                           | :heavy_minus_sign:                                                                                                                                 | A unique name, per pool, to identify the resource.                                                                                                 | greenfield1                                                                                                                                        |