# SyntheticAccounts

## Overview

### Available Operations

* [listTypes](#listtypes) - List Synthetic Account Types
* [getAccountType](#getaccounttype) - Get a Single Synthetic Account Type
* [list](#list) - List Synthetic Accounts
* [create](#create) - Create a New Synthetic Account
* [get](#get) - Get a single Synthetic Account
* [update](#update) - Update the Synthetic Account metadata
* [archive](#archive) - Archive a Synthetic Account
* [listClosingBalances](#listclosingbalances) - List Synthetic Account Closing Balances
* [getClosingBalance](#getclosingbalance) - Get a single Synthetic Account Closing Balance

## listTypes

Retrieve a list of Synthetic Account Types available for use in your Program. These types define the behavior and characteristics of Synthetic Accounts.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSyntheticAccountTypes" method="get" path="/synthetic_account_types" example="synthetic_account_types_list" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.listTypes({
    programUid: "EhrQZJNjCd79LLYq",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsListTypes } from "newline-ts-sdk/funcs/synthetic-accounts-list-types.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsListTypes(newlineSDK, {
    programUid: "EhrQZJNjCd79LLYq",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsListTypes failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSyntheticAccountTypesRequest](../../models/operations/list-synthetic-account-types-request.md)                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSyntheticAccountTypesResponse](../../models/operations/list-synthetic-account-types-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## getAccountType

Returns a single Synthetic Account Type resource along with supporting details.

Enables changes to the Synthetic Account fields, including the Master Synthetic Account. The Master Synthetic Account remains identifiable by the `master_account` flag stored with the Synthetic Account record.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccountType" method="get" path="/synthetic_account_types/{uid}" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.getAccountType({
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
import { syntheticAccountsGetAccountType } from "newline-ts-sdk/funcs/synthetic-accounts-get-account-type.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGetAccountType(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGetAccountType failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyntheticAccountTypeRequest](../../models/operations/get-synthetic-account-type-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSyntheticAccountTypeResponse](../../models/operations/get-synthetic-account-type-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## list

Retrieve a list of Synthetic Accounts associated with the specified Customer and Pool. This endpoint supports filtering by account type, category, status, and sorting by balance or name.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSyntheticAccounts" method="get" path="/synthetic_accounts" example="synthetic_accounts_list" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.list({
    customerUid: "uKxmLxUEiSj5h4M3",
    externalUid: "client-generated-id",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountTypeUid: "q4mdMxMtjXfdbrjn",
    status: "active",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsList } from "newline-ts-sdk/funcs/synthetic-accounts-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsList(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    externalUid: "client-generated-id",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountTypeUid: "q4mdMxMtjXfdbrjn",
    status: "active",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSyntheticAccountsRequest](../../models/operations/list-synthetic-accounts-request.md)                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSyntheticAccountsResponse](../../models/operations/list-synthetic-accounts-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## create

Create a new Synthetic Account in the Pool with the provided specification.

External Synthetic Accounts are counterparty records that represent accounts at external financial institutions. They contain all the necessary information to execute a payment. For specifics about each payment rail's requirements, refer to our [Payment Rails](https://developers.newline53.com/docs/payment-rails) guides.

### Example Usage: ach_account

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="ach_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: general_synthetic_account

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="general_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_synthetic_account

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="instant_payment_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: new_synthetic_account

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="new_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
    externalUid: "partner-generated-id",
    name: "Spinach Fund",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
    externalUid: "partner-generated-id",
    name: "Spinach Fund",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: post_error_response

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="post_error_response" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: wire_synthetic_account

<!-- UsageSnippet language="typescript" operationID="createSyntheticAccount" method="post" path="/synthetic_accounts" example="wire_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.create({
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsCreate } from "newline-ts-sdk/funcs/synthetic-accounts-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsCreate(newlineSDK, {
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.CreateSyntheticAccountRequest](../../models/operations/create-synthetic-account-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.CreateSyntheticAccountResponse](../../models/operations/create-synthetic-account-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.ConflictError       | 409                        | application/json           |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Returns a single Synthetic Account resource along with supporting details and account balances.

Note: Newline will suppress the `account_number` value for Synthetic Accounts in the `ach_external`, `wire_external`, and `instant_payment_external` categories. The `account_number_last_four` value will be returned in the response to help identify these Synthetic Accounts.

### Example Usage: ach_account

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccount" method="get" path="/synthetic_accounts/{uid}" example="ach_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.get({
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
import { syntheticAccountsGet } from "newline-ts-sdk/funcs/synthetic-accounts-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGet failed:", res.error);
  }
}

run();
```
### Example Usage: general_synthetic_account

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccount" method="get" path="/synthetic_accounts/{uid}" example="general_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.get({
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
import { syntheticAccountsGet } from "newline-ts-sdk/funcs/synthetic-accounts-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGet failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_synthetic_account

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccount" method="get" path="/synthetic_accounts/{uid}" example="instant_payment_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.get({
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
import { syntheticAccountsGet } from "newline-ts-sdk/funcs/synthetic-accounts-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGet failed:", res.error);
  }
}

run();
```
### Example Usage: wire_synthetic_account

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccount" method="get" path="/synthetic_accounts/{uid}" example="wire_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.get({
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
import { syntheticAccountsGet } from "newline-ts-sdk/funcs/synthetic-accounts-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyntheticAccountRequest](../../models/operations/get-synthetic-account-request.md)                                                                              | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSyntheticAccountResponse](../../models/operations/get-synthetic-account-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## update

Enables changes to the Synthetic Account fields, including the Master Synthetic Account. The Master Synthetic Account remains identifiable by the `master_account` flag stored with the Synthetic Account record.

### Example Usage: ach_account

<!-- UsageSnippet language="typescript" operationID="updateSyntheticAccount" method="put" path="/synthetic_accounts/{uid}" example="ach_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.update({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsUpdate } from "newline-ts-sdk/funcs/synthetic-accounts-update.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsUpdate(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: general_synthetic_account

<!-- UsageSnippet language="typescript" operationID="updateSyntheticAccount" method="put" path="/synthetic_accounts/{uid}" example="general_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.update({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsUpdate } from "newline-ts-sdk/funcs/synthetic-accounts-update.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsUpdate(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_synthetic_account

<!-- UsageSnippet language="typescript" operationID="updateSyntheticAccount" method="put" path="/synthetic_accounts/{uid}" example="instant_payment_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.update({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsUpdate } from "newline-ts-sdk/funcs/synthetic-accounts-update.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsUpdate(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: missing_param_error

<!-- UsageSnippet language="typescript" operationID="updateSyntheticAccount" method="put" path="/synthetic_accounts/{uid}" example="missing_param_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.update({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsUpdate } from "newline-ts-sdk/funcs/synthetic-accounts-update.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsUpdate(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsUpdate failed:", res.error);
  }
}

run();
```
### Example Usage: wire_synthetic_account

<!-- UsageSnippet language="typescript" operationID="updateSyntheticAccount" method="put" path="/synthetic_accounts/{uid}" example="wire_synthetic_account" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.update({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsUpdate } from "newline-ts-sdk/funcs/synthetic-accounts-update.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsUpdate(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "New Resource Name",
      poolUid: "kaxHFJnWvJxRJZxq",
      syntheticAccountTypeUid: "fRMwt6H14ovFUz1s",
      routingNumber: "123456789",
      accountNumber: "123456789012",
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
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsUpdate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.UpdateSyntheticAccountRequest](../../models/operations/update-synthetic-account-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.UpdateSyntheticAccountResponse](../../models/operations/update-synthetic-account-response.md)\>**

### Errors

| Error Type                                   | Status Code                                  | Content Type                                 |
| -------------------------------------------- | -------------------------------------------- | -------------------------------------------- |
| errors.UpdateSyntheticAccountBadRequestError | 400                                          | application/json                             |
| errors.NewlineDefaultError                   | 4XX, 5XX                                     | \*/\*                                        |

## archive

In order to archive a Synthetic Account, the account must:

- not be a Master Synthetic Account i.e. `master_account` must be false.
- have zero balance.
- have no pending Transfers.

Master Synthetic Accounts are archived when the Program Customer is archived ([DELETE /customers/:uid](https://developers.newline53.com/reference/delete_customers-uid)).

### Example Usage

<!-- UsageSnippet language="typescript" operationID="deleteSyntheticAccount" method="delete" path="/synthetic_accounts/{uid}" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.archive({
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
import { syntheticAccountsArchive } from "newline-ts-sdk/funcs/synthetic-accounts-archive.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsArchive(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteSyntheticAccountRequest](../../models/operations/delete-synthetic-account-request.md)                                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteSyntheticAccountResponse](../../models/operations/delete-synthetic-account-response.md)\>**

### Errors

| Error Type                                            | Status Code                                           | Content Type                                          |
| ----------------------------------------------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| errors.DeleteSyntheticAccountUnprocessableEntityError | 422                                                   | application/json                                      |
| errors.NewlineDefaultError                            | 4XX, 5XX                                              | \*/\*                                                 |

## listClosingBalances

Retrieves a paginated list of Synthetic Account Closing balances, filtered by various parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listSyntheticAccountClosingBalances" method="get" path="/synthetic_account_closing_balances" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.listClosingBalances({
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    syntheticAccountExternalUid: "4XkJnsfHsuqrxmeX",
    netUsdClosingBalanceAsOf: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceBefore: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceAfter: new Date("2020-01-01T00:00:00Z"),
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { syntheticAccountsListClosingBalances } from "newline-ts-sdk/funcs/synthetic-accounts-list-closing-balances.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsListClosingBalances(newlineSDK, {
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    syntheticAccountExternalUid: "4XkJnsfHsuqrxmeX",
    netUsdClosingBalanceAsOf: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceBefore: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceAfter: new Date("2020-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsListClosingBalances failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListSyntheticAccountClosingBalancesRequest](../../models/operations/list-synthetic-account-closing-balances-request.md)                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListSyntheticAccountClosingBalancesResponse](../../models/operations/list-synthetic-account-closing-balances-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## getClosingBalance

Get a single Synthetic Account Closing Balance

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getSyntheticAccountClosingBalance" method="get" path="/synthetic_account_closing_balances/{uid}" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.syntheticAccounts.getClosingBalance({
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
import { syntheticAccountsGetClosingBalance } from "newline-ts-sdk/funcs/synthetic-accounts-get-closing-balance.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await syntheticAccountsGetClosingBalance(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("syntheticAccountsGetClosingBalance failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyntheticAccountClosingBalanceRequest](../../models/operations/get-synthetic-account-closing-balance-request.md)                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSyntheticAccountClosingBalanceResponse](../../models/operations/get-synthetic-account-closing-balance-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |