# Transfers

## Overview

Transfers facilitate the movement of assets between accounts, enabling transactions such as payments and withdrawals.

**Endpoints:**

- GET [List Transfers: GET /transfers](https://developers.newline53.com/reference/get_transfers)

- POST [Initiate a Transfer: POST /transfers](https://developers.newline53.com/reference/post_transfers)

- GET [Get a single Transfer: GET /transfers/{uid}](https://developers.newline53.com/reference/get_transfers-uid)

- PUT [Cancel a Transfer: PUT /transfers/{uid}/cancel](https://developers.newline53.com/reference/put_transfers-uid-cancel)

A Transfer is the Action of moving assets between two Synthetic Accounts. Most asset movement initiated by your application will result in a Transfer. Asset movement is determined by the makeup of assets in both participating accounts, the Synthetic Account Type of the participating accounts, the available Custodial Accounts for all participating Customers, and the overall Program configuration. A Transfer can never be initiated between two external accounts.

### Company ID Behavior

The company_id field is optional when initiating a transfer. However, it becomes required if your organization has multiple company IDs or multiple custodial accounts, to ensure accurate routing of funds. If provided, the value will be validated.

In sandbox environments:

- `company_id` is optional and will be validated if supplied.
- `company_id` and custodial accounts are always in a 1:1 relationship.

> **Note** 
> Any time a Transfer is created, it creates 1+ Transactions, which are returned in the response payload for a successful Transfer. Please note or record these uids, as they will be needed to query the Transaction object and any associated key data points. For instance, Fed IMAD or CHIPS SSN is used for outgoing wires.

### Available Operations

* [list](#list) - List Transfers
* [initiate](#initiate) - Initiate a Transfer
* [get](#get) - Get a single Transfer
* [cancel](#cancel) - Cancel a Transfer

## list

Retrieves a list of Transfers filtered by the given parameters. Transfers facilitate the movement of assets between accounts, enabling transactions such as payments and withdrawals.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listTransfers" method="get" path="/transfers" example="transactions" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.list({
    customerUid: "uKxmLxUEiSj5h4M3",
    externalUid: "client-generated-id",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersList } from "newline-ts-sdk/funcs/transfers-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersList(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    externalUid: "client-generated-id",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListTransfersRequest](../../models/operations/list-transfers-request.md)                                                                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListTransfersResponse](../../models/operations/list-transfers-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## initiate

Attempt to initiate a Transfer between two Synthetic Accounts. Before the Transfer will be initiated, several checks will be performed to ensure there is sufficient balance in the source account and that the initiating Customer has all the necessary access to both Synthetic Accounts.

The Synthetic Accounts allowed in a Transfer request are listed below

- between a liability Synthetic Account in the `general` category and a Synthetic Account in the `ach_external`, `wire_external`, or `instant_payments_external` category
- between two liability Synthetic Accounts in the `general` category that are also owned by the same Customer.

> **Note**
> Please note that if utilizing the Transmitter information, the initiator type should be set to transmitter. If not set, the field defaults to customer and any data provided in that field will be ignored.

### Example Usage: ach

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="ach" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "Mr. Hyyt Meiser",
      companyId: "HJK867",
      companyDiscretionaryData: "Some data",
      prenote: false,
      secCode: "CCD",
      paymentType: "S",
      entryDescription: "ACH Entry",
      serviceProcessing: "STANDARD",
      effectiveEntryDate: "2023-12-21",
      idNumber: "4270465600",
      addenda: "Having said that, this",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "Mr. Hyyt Meiser",
      companyId: "HJK867",
      companyDiscretionaryData: "Some data",
      prenote: false,
      secCode: "CCD",
      paymentType: "S",
      entryDescription: "ACH Entry",
      serviceProcessing: "STANDARD",
      effectiveEntryDate: "2023-12-21",
      idNumber: "4270465600",
      addenda: "Having said that, this",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```
### Example Usage: ach_transfer

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="ach_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="instant_payment" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Royalty Asset Management",
        transmitterIdentifier: "123456789",
        streetNumber: "123",
        street1: "Abc St.",
        city: "Boring",
        state: "OR",
        postalCode: "97009",
        country: null,
      },
      memo: "To unfreeze the prince's assets",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Royalty Asset Management",
        transmitterIdentifier: "123456789",
        streetNumber: "123",
        street1: "Abc St.",
        city: "Boring",
        state: "OR",
        postalCode: "97009",
        country: null,
      },
      memo: "To unfreeze the prince's assets",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_transfer

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="instant_payment_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```
### Example Usage: wire

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="wire" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Please send ASAP",
      wireTransmitter: {
        name: "Top Tier Tacos",
        transmitterIdentifier: "123456789",
        line1: "123 Abc St.",
        country: "US",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Please send ASAP",
      wireTransmitter: {
        name: "Top Tier Tacos",
        transmitterIdentifier: "123456789",
        line1: "123 Abc St.",
        country: "US",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```
### Example Usage: wire_transfer

<!-- UsageSnippet language="typescript" operationID="createTransfer" method="post" path="/transfers" example="wire_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.initiate({
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersInitiate } from "newline-ts-sdk/funcs/transfers-initiate.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersInitiate(newlineSDK, {
    externalUid: "partner-generated-id",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    initiatingCustomerUid: "iDtmSA52zRhgN4iy",
    destinationCustomerUid: "iDtmSA52zRhgN4iy",
    initiatorType: "customer",
    usdTransferAmount: "12.34",
    ach: {
      originatorName: "J. Fred Muggs",
      companyId: "ABC-123456",
      companyDiscretionaryData: "ABC.123",
      prenote: false,
      secCode: "CIE",
      paymentType: "ST",
      entryDescription: "ACH Entry",
      serviceProcessing: "SAMEDAY",
      effectiveEntryDate: "2023-12-01",
      idNumber: "4270465600",
    },
    instantPayment: {
      instantPaymentTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        streetNumber: "123abc",
        street1: "Abc St.",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
        country: null,
      },
      memo: "For the 6-5-23 shipment of pineapple popsicles",
    },
    wire: {
      intermediaryBankAddress: {
        line1: "345 Def Ave",
        line2: "San Francisco",
        line3: "CA 94016",
        country: "US",
      },
      intermediaryBankName: "Fidelity Fiduciary Bank",
      intermediaryBankRoutingNumber: "923456789",
      wireInstructions: "Send ASAP",
      wireTransmitter: {
        name: "Marge's Roofing Inc",
        transmitterIdentifier: "123456789012ABC",
        line1: "123 Abc St.",
        line2: "Boring, Oregon 97009",
        line3: null,
        country: "US",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersInitiate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateTransferRequest](../../models/operations/create-transfer-request.md)                                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateTransferResponse](../../models/operations/create-transfer-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Retrieves a single Transfer resource along with its details, including status, participating accounts, and associated Transactions.

Filter parameters are not case sensitive but will only return exact matches.

### Example Usage: ach_transfer

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/transfers/{uid}" example="ach_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.get({
    uid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersGet } from "newline-ts-sdk/funcs/transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: canceled_transfer

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/transfers/{uid}" example="canceled_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.get({
    uid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersGet } from "newline-ts-sdk/funcs/transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_transfer

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/transfers/{uid}" example="instant_payment_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.get({
    uid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersGet } from "newline-ts-sdk/funcs/transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: wire_transfer

<!-- UsageSnippet language="typescript" operationID="getTransfer" method="get" path="/transfers/{uid}" example="wire_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.get({
    uid: "<id>",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersGet } from "newline-ts-sdk/funcs/transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransferRequest](../../models/operations/get-transfer-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransferResponse](../../models/operations/get-transfer-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## cancel

Transfers must be canceled by the originating Customer (or Authorized Representative).

Transfers can only enter the canceled state if Newline receives a request while the Transfer is in `queued` or `pending states`.

A cancellation request during the `pending` state is not guaranteed, as this state may include payment execution. At that stage, a cancel request will result in an error.

### Example Usage: canceled_transfer

<!-- UsageSnippet language="typescript" operationID="put_/transfers/{uid}/cancel" method="put" path="/transfers/{uid}/cancel" example="canceled_transfer" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.cancel({
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersCancel } from "newline-ts-sdk/funcs/transfers-cancel.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersCancel(newlineSDK, {
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: invalid_transfer_cancellation

<!-- UsageSnippet language="typescript" operationID="put_/transfers/{uid}/cancel" method="put" path="/transfers/{uid}/cancel" example="invalid_transfer_cancellation" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.cancel({
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersCancel } from "newline-ts-sdk/funcs/transfers-cancel.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersCancel(newlineSDK, {
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCancel failed:", res.error);
  }
}

run();
```
### Example Usage: transfer_cancellation_error

<!-- UsageSnippet language="typescript" operationID="put_/transfers/{uid}/cancel" method="put" path="/transfers/{uid}/cancel" example="transfer_cancellation_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transfers.cancel({
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transfersCancel } from "newline-ts-sdk/funcs/transfers-cancel.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transfersCancel(newlineSDK, {
    uid: "<id>",
    body: {
      authorizedRepresentativeName: "Swee'Pea",
      cancellationReason: "Transfer submitted by accident",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transfersCancel failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutTransfersUidCancelRequest](../../models/operations/put-transfers-uid-cancel-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutTransfersUidCancelResponse](../../models/operations/put-transfers-uid-cancel-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.PutTransfersUidCancelBadRequestError          | 400                                                  | application/json                                     |
| errors.PutTransfersUidCancelUnprocessableEntityError | 422                                                  | application/json                                     |
| errors.NewlineDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |