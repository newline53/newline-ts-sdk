# ListPoolsData

## Example Usage

```typescript
import { ListPoolsData } from "newline-ts-sdk/models/operations";

let value: ListPoolsData = {
  uid: "EhrQZJNjCd79LLYq",
  name: "New Resource Name",
  ownerCustomerUid: "EhrQZJNjCd79LLYq",
  customerUids: [
    "[\"EhrQZJNjCd79LLYq\",\"PbqZThW5fhQUYRx1\"]",
  ],
};
```

## Fields

| Field                                                                 | Type                                                                  | Required                                                              | Description                                                           | Example                                                               |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| `uid`                                                                 | *string*                                                              | :heavy_minus_sign:                                                    | Newline-generated unique id resource specific to the current endpoint | EhrQZJNjCd79LLYq                                                      |
| `name`                                                                | *string*                                                              | :heavy_check_mark:                                                    | A unique name, per pool, to identify the resource                     | New Resource Name                                                     |
| `ownerCustomerUid`                                                    | *string*                                                              | :heavy_check_mark:                                                    | N/A                                                                   | EhrQZJNjCd79LLYq                                                      |
| `customerUids`                                                        | *string*[]                                                            | :heavy_minus_sign:                                                    | N/A                                                                   |                                                                       |