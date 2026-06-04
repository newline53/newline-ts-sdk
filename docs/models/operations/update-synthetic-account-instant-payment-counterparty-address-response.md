# UpdateSyntheticAccountInstantPaymentCounterpartyAddressResponse

## Example Usage

```typescript
import { UpdateSyntheticAccountInstantPaymentCounterpartyAddressResponse } from "newline-ts-sdk/models/operations";

let value: UpdateSyntheticAccountInstantPaymentCounterpartyAddressResponse = {
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

| Field                                                        | Type                                                         | Required                                                     | Description                                                  | Example                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| `streetNumber`                                               | *string*                                                     | :heavy_check_mark:                                           | Building number for counterparty address. Alphanumeric only. | 123abc                                                       |
| `street1`                                                    | *string*                                                     | :heavy_check_mark:                                           | Street name for counterparty address                         | Abc St.                                                      |
| `street2`                                                    | *string*                                                     | :heavy_minus_sign:                                           | Optional second line of street                               | Suite 4A                                                     |
| `city`                                                       | *string*                                                     | :heavy_check_mark:                                           | Maximum 35 characters                                        | Chicago                                                      |
| `state`                                                      | *string*                                                     | :heavy_check_mark:                                           | 2 characters. Must be a valid US state abbreviation.         | IL                                                           |
| `postalCode`                                                 | *string*                                                     | :heavy_check_mark:                                           | 5-digit string. ZIP+4 is allowed.                            | 60301                                                        |
| `country`                                                    | *string*                                                     | :heavy_check_mark:                                           | N/A                                                          | null                                                         |