# GetTransactionsUltimateDebtorInfo

Information about the ultimate debtor (the entity on whose behalf the payment is made). Only populated if your program has enabled RTP Ultimate Debtor support.

## Example Usage

```typescript
import { GetTransactionsUltimateDebtorInfo } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUltimateDebtorInfo = {
  ultimateDebtorName: "John Smith",
  streetNumber: "123abc",
  street1: "Abc St.",
  street2: "Suite 4A",
  city: "Chicago",
  state: "IL",
  postalCode: "60301",
  country: null,
};
```

## Fields

| Field                                                | Type                                                 | Required                                             | Description                                          | Example                                              |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| `ultimateDebtorName`                                 | *string*                                             | :heavy_check_mark:                                   | Name of the ultimate debtor                          | John Smith                                           |
| `streetNumber`                                       | *string*                                             | :heavy_minus_sign:                                   | Building number. Alphanumeric only.                  | 123abc                                               |
| `street1`                                            | *string*                                             | :heavy_minus_sign:                                   | Street name                                          | Abc St.                                              |
| `street2`                                            | *string*                                             | :heavy_minus_sign:                                   | Optional second line of street                       | Suite 4A                                             |
| `city`                                               | *string*                                             | :heavy_minus_sign:                                   | Maximum 35 characters                                | Chicago                                              |
| `state`                                              | *string*                                             | :heavy_minus_sign:                                   | 2 characters. Must be a valid US state abbreviation. | IL                                                   |
| `postalCode`                                         | *string*                                             | :heavy_minus_sign:                                   | 5-digit string. ZIP+4 is allowed.                    | 60301                                                |
| `country`                                            | *string*                                             | :heavy_minus_sign:                                   | N/A                                                  | null                                                 |