# PostReturnsWireRequest

## Example Usage

```typescript
import { PostReturnsWireRequest } from "newline-ts-sdk/models/operations";

let value: PostReturnsWireRequest = {
  wireInstructions: "ORDER 5555555555",
};
```

## Fields

| Field                                                                                                         | Type                                                                                                          | Required                                                                                                      | Description                                                                                                   | Example                                                                                                       |
| ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `wireInstructions`                                                                                            | *string*                                                                                                      | :heavy_minus_sign:                                                                                            | DEPRECATED. Use `return_reason` instead. Wire information for the return transaction (up to 140 characters).<br/> | ORDER 5555555555                                                                                              |