# GetTransactionsUidInstantPaymentTransmitter

Name and address of the Transmitter.


## Example Usage

```typescript
import { GetTransactionsUidInstantPaymentTransmitter } from "newline-ts-sdk/models/operations";

let value: GetTransactionsUidInstantPaymentTransmitter = {
  name: "Marthas Bank",
  streetNumber: "123abc",
  street1: "Abc St.",
  city: "Chicago",
  state: "IL",
  postalCode: "60301",
  country: null,
};
```

## Fields

| Field                                                       | Type                                                        | Required                                                    | Description                                                 | Example                                                     |
| ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| `name`                                                      | *string*                                                    | :heavy_check_mark:                                          | Name of the Transmitter.<br/>                               | Marthas Bank                                                |
| `streetNumber`                                              | *string*                                                    | :heavy_check_mark:                                          | Building number for Transmitter address. Alphanumeric only. | 123abc                                                      |
| `street1`                                                   | *string*                                                    | :heavy_check_mark:                                          | Street name for Transmitter address                         | Abc St.                                                     |
| `city`                                                      | *string*                                                    | :heavy_check_mark:                                          | Maximum 35 characters                                       | Chicago                                                     |
| `state`                                                     | *string*                                                    | :heavy_check_mark:                                          | 2 characters. Must be a valid US state abbreviation.        | IL                                                          |
| `postalCode`                                                | *string*                                                    | :heavy_check_mark:                                          | 5-digit string. ZIP+4 is allowed.                           | 60301                                                       |
| `country`                                                   | *string*                                                    | :heavy_check_mark:                                          | N/A                                                         | null                                                        |