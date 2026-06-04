# ListSyntheticAccountsAssetBalance

## Example Usage

```typescript
import { ListSyntheticAccountsAssetBalance } from "newline-ts-sdk/models/operations";

let value: ListSyntheticAccountsAssetBalance = {
  assetQuantity: "12.23",
  assetType: "USD",
  currentUsdValue: "122.12",
  custodialAccountUid: "wZgfnLrLJcCAscnH",
  custodialAccountName: "First Checking",
  debit: true,
};
```

## Fields

| Field                  | Type                   | Required               | Description            | Example                |
| ---------------------- | ---------------------- | ---------------------- | ---------------------- | ---------------------- |
| `assetQuantity`        | *string*               | :heavy_minus_sign:     | N/A                    | 12.23                  |
| `assetType`            | *string*               | :heavy_minus_sign:     | N/A                    | USD                    |
| `currentUsdValue`      | *string*               | :heavy_minus_sign:     | N/A                    | 122.12                 |
| `custodialAccountUid`  | *string*               | :heavy_minus_sign:     | N/A                    | wZgfnLrLJcCAscnH       |
| `custodialAccountName` | *string*               | :heavy_minus_sign:     | N/A                    | First Checking         |
| `debit`                | *boolean*              | :heavy_minus_sign:     | N/A                    | true                   |