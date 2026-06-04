# CombinedTransfers

## Overview

### Available Operations

* [list](#list) - List Combined Transfers
* [create](#create) - Create a new Combined Transfer
* [get](#get) - Get a single Combined Transfer

## list

Retrieves a list of Combined Transfers. These represent transactions where both a counterparty Synthetic Account and a Transfer were created in a single API call. You can filter results by status and other parameters.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/combined_transfers" method="get" path="/combined_transfers" example="combined_transfers_list" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.list({
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    externalUid: "client-generated-id",
    status: "completed",
    syntheticAccountExternalUid: "client-generated-id",
    syntheticAccountPoolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "7UvkHn3Ss9AbWe2c",
    transferCustomerUid: "wTSMX1GubP21ev2h",
    transferExternalUid: "client-generated-id",
    transferUid: "7UvkHn3Ss9AbWe2c",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { combinedTransfersList } from "newline-ts-sdk/funcs/combined-transfers-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersList(newlineSDK, {
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    externalUid: "client-generated-id",
    status: "completed",
    syntheticAccountExternalUid: "client-generated-id",
    syntheticAccountPoolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "7UvkHn3Ss9AbWe2c",
    transferCustomerUid: "wTSMX1GubP21ev2h",
    transferExternalUid: "client-generated-id",
    transferUid: "7UvkHn3Ss9AbWe2c",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCombinedTransfersRequest](../../models/operations/get-combined-transfers-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCombinedTransfersResponse](../../models/operations/get-combined-transfers-response.md)\>**

### Errors

| Error Type                                          | Status Code                                         | Content Type                                        |
| --------------------------------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| errors.GetCombinedTransfersForbiddenError           | 403                                                 | application/json                                    |
| errors.GetCombinedTransfersUnprocessableEntityError | 422                                                 | application/json                                    |
| errors.NewlineDefaultError                          | 4XX, 5XX                                            | \*/\*                                               |

## create

Creates a Combined Transfer by simultaneously creating a counterparty Synthetic Account and initiating a Transfer. This streamlines asset movement by reducing the number of steps required to set up and execute a transaction.


### Example Usage: ach_transfer_to_existing_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="ach_transfer_to_existing_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      ach: {
        originatorName: "J. Fred Muggs",
        secCode: "CIE",
        entryDescription: "ACH Entry",
        serviceProcessing: "SAMEDAY",
        effectiveEntryDate: "2023-12-01",
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      ach: {
        originatorName: "J. Fred Muggs",
        secCode: "CIE",
        entryDescription: "ACH Entry",
        serviceProcessing: "SAMEDAY",
        effectiveEntryDate: "2023-12-01",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: ach_transfer_to_new_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="ach_transfer_to_new_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      ach: {
        accountType: "checking",
        counterpartyName: "awesome counterparty",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      ach: {
        originatorName: "J. Fred Muggs",
        secCode: "CIE",
        entryDescription: "ACH Entry",
        serviceProcessing: "SAMEDAY",
        effectiveEntryDate: "2023-12-01",
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      ach: {
        accountType: "checking",
        counterpartyName: "awesome counterparty",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      ach: {
        originatorName: "J. Fred Muggs",
        secCode: "CIE",
        entryDescription: "ACH Entry",
        serviceProcessing: "SAMEDAY",
        effectiveEntryDate: "2023-12-01",
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: combined_transfer_creation_error

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="combined_transfer_creation_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: combined_transfer_external_uid_taken

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="combined_transfer_external_uid_taken" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: combined_transfers_disabled

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="combined_transfers_disabled" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_transfer_to_existing_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="instant_payment_transfer_to_existing_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_transfer_to_new_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="instant_payment_transfer_to_new_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123",
          street1: "Main street",
          city: "Brooklyn",
          state: "IA",
          postalCode: "12345-6789",
          country: "US",
        },
        counterpartyName: "awesome counterparty",
        email: "address@domain.com",
        phone: "2121112233",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123",
          street1: "Main street",
          city: "Brooklyn",
          state: "IA",
          postalCode: "12345-6789",
          country: "US",
        },
        counterpartyName: "awesome counterparty",
        email: "address@domain.com",
        phone: "2121112233",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: queued

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="queued" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
      externalProcessorToken: "processor-sandbox-96d86f35-ef58-4e4a-826f-4870b5d677f2",
      ach: {
        accountType: "checking",
        counterpartyName: "Thelma's Flooring LLC",
      },
      instantPayment: {
        counterpartyAddress: {
          streetNumber: "123abc",
          street1: "Abc St.",
          street2: "Suite 4A",
          city: "Chicago",
          state: "IL",
          postalCode: "60301",
          country: null,
        },
        counterpartyName: "Marge's Roofing Inc",
        email: "payments@veryexcellentbusiness.com",
        phone: "5555551212",
      },
      wire: {
        counterpartyAddress: {
          line1: "234 Xyz Rd",
          line2: "APT 5",
          line3: "Boston, MA 02110",
          country: "US",
        },
        counterpartyName: "Marge's Roofing Inc",
        counterpartyBankAddress: {
          line1: "123 Abc St.",
          line2: "Boring, Oregon 97009",
          line3: null,
          country: null,
        },
        counterpartyBankName: "East West Regional Bank",
      },
    },
    transfer: {
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
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: wire_transfer_to_existing_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="wire_transfer_to_existing_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      wire: {
        intermediaryBankAddress: {
          line1: "123 Main St",
          line2: "Brooklyn NY",
          country: "US",
        },
        intermediaryBankName: "Big Bank Inc",
        intermediaryBankRoutingNumber: "123456789",
        wireTransmitter: {
          name: "Bunker LLC",
          transmitterIdentifier: "1234567890",
          line1: "456 Second St",
          line2: "Queens NY",
          country: "US",
        },
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      wire: {
        intermediaryBankAddress: {
          line1: "123 Main St",
          line2: "Brooklyn NY",
          country: "US",
        },
        intermediaryBankName: "Big Bank Inc",
        intermediaryBankRoutingNumber: "123456789",
        wireTransmitter: {
          name: "Bunker LLC",
          transmitterIdentifier: "1234567890",
          line1: "456 Second St",
          line2: "Queens NY",
          country: "US",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: wire_transfer_to_new_account

<!-- UsageSnippet language="typescript" operationID="post_/combined_transfers" method="post" path="/combined_transfers" example="wire_transfer_to_new_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.create({
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      wire: {
        counterpartyName: "Awesome Counterparty",
        counterpartyBankName: "Biggest Bank Inc",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      wire: {
        intermediaryBankAddress: {
          line1: "123 Main St",
          line2: "Brooklyn NY",
          country: "US",
        },
        intermediaryBankName: "Big Bank Inc",
        intermediaryBankRoutingNumber: "123456789",
        wireTransmitter: {
          name: "Bunker LLC",
          transmitterIdentifier: "1234567890",
          line1: "456 Second St",
          line2: "Queens NY",
          country: "US",
        },
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
import { combinedTransfersCreate } from "newline-ts-sdk/funcs/combined-transfers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersCreate(newlineSDK, {
    syntheticAccount: {
      externalUid: "abcd12345",
      name: "Spinach Fund",
      poolUid: "axz9sbUgRVu5wqbw",
      syntheticAccountTypeUid: "UyjH72G9KAhmbpNS",
      routingNumber: "04200031",
      accountNumber: "1234567890",
      wire: {
        counterpartyName: "Awesome Counterparty",
        counterpartyBankName: "Biggest Bank Inc",
      },
    },
    transfer: {
      sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
      destinationSyntheticAccountUid: "beHyJNeBU65Xv8LK",
      initiatingCustomerUid: "axz9sbUgRVu5wqbw",
      initiatorType: "customer",
      usdTransferAmount: "12.34",
      wire: {
        intermediaryBankAddress: {
          line1: "123 Main St",
          line2: "Brooklyn NY",
          country: "US",
        },
        intermediaryBankName: "Big Bank Inc",
        intermediaryBankRoutingNumber: "123456789",
        wireTransmitter: {
          name: "Bunker LLC",
          transmitterIdentifier: "1234567890",
          line1: "456 Second St",
          line2: "Queens NY",
          country: "US",
        },
      },
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostCombinedTransfersRequest](../../models/operations/post-combined-transfers-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostCombinedTransfersResponse](../../models/operations/post-combined-transfers-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.PostCombinedTransfersForbiddenError           | 403                                                  | application/json                                     |
| errors.PostCombinedTransfersUnprocessableEntityError | 422                                                  | application/json                                     |
| errors.NewlineDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |

## get

Retrieves details about a specific Combined Transfer, including the status, participating accounts, and associated metadata. Statuses include `queued`, `pending`, `failed`, and `completed`.

### Example Usage: completed

<!-- UsageSnippet language="typescript" operationID="get_/combined_transfers/{uid}" method="get" path="/combined_transfers/{uid}" example="completed" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.get({
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
import { combinedTransfersGet } from "newline-ts-sdk/funcs/combined-transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: failed

<!-- UsageSnippet language="typescript" operationID="get_/combined_transfers/{uid}" method="get" path="/combined_transfers/{uid}" example="failed" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.get({
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
import { combinedTransfersGet } from "newline-ts-sdk/funcs/combined-transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: pending

<!-- UsageSnippet language="typescript" operationID="get_/combined_transfers/{uid}" method="get" path="/combined_transfers/{uid}" example="pending" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.get({
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
import { combinedTransfersGet } from "newline-ts-sdk/funcs/combined-transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersGet failed:", res.error);
  }
}

run();
```
### Example Usage: queued

<!-- UsageSnippet language="typescript" operationID="get_/combined_transfers/{uid}" method="get" path="/combined_transfers/{uid}" example="queued" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.combinedTransfers.get({
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
import { combinedTransfersGet } from "newline-ts-sdk/funcs/combined-transfers-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await combinedTransfersGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("combinedTransfersGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCombinedTransfersUidRequest](../../models/operations/get-combined-transfers-uid-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCombinedTransfersUidResponse](../../models/operations/get-combined-transfers-uid-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.GetCombinedTransfersUidForbiddenError | 403                                          | application/json                             |
| errors.GetCombinedTransfersUidNotFoundError  | 404                                          | application/json                             |
| errors.NewlineDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |