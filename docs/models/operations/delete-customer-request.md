# DeleteCustomerRequest

## Example Usage

```typescript
import { DeleteCustomerRequest } from "newline-ts-sdk/models/operations";

let value: DeleteCustomerRequest = {
  uid: "<id>",
  body: {
    archiveNote: "for inactivity",
    destinationSyntheticAccountUid: "oBASVwLQB4RojU5X",
  },
};
```

## Fields

| Field                                                                                           | Type                                                                                            | Required                                                                                        | Description                                                                                     |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| `uid`                                                                                           | *string*                                                                                        | :heavy_check_mark:                                                                              | Newline-generated unique id resource specific to the current endpoint                           |
| `body`                                                                                          | [operations.DeleteCustomerRequestBody](../../models/operations/delete-customer-request-body.md) | :heavy_check_mark:                                                                              | N/A                                                                                             |