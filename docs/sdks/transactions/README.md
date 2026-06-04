# Transactions

## Overview

Transactions represent asset movements, such as ACH payments, wire transfers, or card purchases. Track transaction statuses and events through these endpoints.  
**Endpoints:**

- GET [List Transactions: GET /transactions](https://developers.newline53.com/reference/get_transactions)

- GET [Get a single Transaction: GET /transactions/{uid}](https://developers.newline53.com/reference/get_transactions-uid)

- PUT [Approve or deny a Transaction: PUT /transactions/{uid}/authorize](https://developers.newline53.com/reference/put_transactions-uid-authorize)

- GET [List Transaction Events: GET /transaction_events](https://developers.newline53.com/reference/get_transaction-events)

- GET [Get a single Transaction Event: GET /transaction_events/{uid}](https://developers.newline53.com/reference/get_transaction-events-uid)

- GET [List Synthetic Line Items: GET /synthetic_line_items](https://developers.newline53.com/reference/get_synthetic-line-items)

- GET [Get a single Synthetic Line Item: GET /synthetic_line_items/{uid}](https://developers.newline53.com/reference/get_synthetic-line-items-uid)

- GET [List Custodial Line Items: GET /custodial_line_items](https://developers.newline53.com/reference/get_custodial-line-items)

- GET [Get a single Custodial Line Item: GET /custodial_line_items/{uid}](https://developers.newline53.com/reference/get_custodial-line-items-uid)

Transactions are created based on how you instruct Newline to move assets (a Transfer) or how assets are moved or spent outside your application (ATM withdrawals, debit card purchases, wire transfers, etc…). The Transaction contains the amount, origin, and destination of assets. Newline categorizes Transactions into types to assist in their classification and representation.

Transactions fall into many categories, including debit card purchases, direct deposits, interest, and fees. This endpoint can retrieve a list of Transactions or track the status of an ongoing Transaction.

Transaction Events are created as a result of a Transaction. They capture the steps required to complete the Transaction. These can be used to view the progress of an in-flight Transaction or see the history of a completed Transaction.

Line Items are created for each Transaction Event. They catalog the individual credits and debits associated with the accounts involved in the Transaction.

### Available Operations

* [list](#list) - List Transactions
* [get](#get) - Get a single Transaction
* [authorize](#authorize) - Approve or deny a transaction
* [listEvents](#listevents) - List Transaction Events
* [getEvent](#getevent) - Get a single Transaction Event
* [listSyntheticLineItems](#listsyntheticlineitems) - List Synthetic Line Items
* [getSyntheticLineItem](#getsyntheticlineitem) - Get a single Synthetic Line Item
* [listCustodialLineItems](#listcustodiallineitems) - List Custodial Line Items
* [getCustodialLineItem](#getcustodiallineitem) - Get a single Custodial Line Item

## list

Retrieves a list of Transactions. Transactions representing expired authorizations or expired reversals are suppressed by default.

### Example Usage: transactions

<!-- UsageSnippet language="typescript" operationID="get_/transactions" method="get" path="/transactions" example="transactions" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.list({
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    type: "ach",
    hasReturn: true,
    showDeniedAuths: true,
    showExpired: true,
    searchDescription: "Transfer*",
    includeZero: true,
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledAtAfter: new Date("2020-01-01T00:00:00Z"),
    settledAtBefore: new Date("2020-01-01T00:00:00Z"),
    initialActionAtAfter: new Date("2020-01-01T00:00:00Z"),
    initialActionAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledIndexAfter: 123,
    settledIndexBefore: 123,
    idAfter: 123,
    idBefore: 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transactionsList } from "newline-ts-sdk/funcs/transactions-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsList(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    type: "ach",
    hasReturn: true,
    showDeniedAuths: true,
    showExpired: true,
    searchDescription: "Transfer*",
    includeZero: true,
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledAtAfter: new Date("2020-01-01T00:00:00Z"),
    settledAtBefore: new Date("2020-01-01T00:00:00Z"),
    initialActionAtAfter: new Date("2020-01-01T00:00:00Z"),
    initialActionAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledIndexAfter: 123,
    settledIndexBefore: 123,
    idAfter: 123,
    idBefore: 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsList failed:", res.error);
  }
}

run();
```
### Example Usage: transactions_with_denials

<!-- UsageSnippet language="typescript" operationID="get_/transactions" method="get" path="/transactions" example="transactions_with_denials" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.list({
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    type: "ach",
    hasReturn: true,
    showDeniedAuths: true,
    showExpired: true,
    searchDescription: "Transfer*",
    includeZero: true,
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledAtAfter: new Date("2020-01-01T00:00:00Z"),
    settledAtBefore: new Date("2020-01-01T00:00:00Z"),
    initialActionAtAfter: new Date("2020-01-01T00:00:00Z"),
    initialActionAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledIndexAfter: 123,
    settledIndexBefore: 123,
    idAfter: 123,
    idBefore: 123,
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transactionsList } from "newline-ts-sdk/funcs/transactions-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsList(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
    destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    type: "ach",
    hasReturn: true,
    showDeniedAuths: true,
    showExpired: true,
    searchDescription: "Transfer*",
    includeZero: true,
    createdAtAfter: new Date("2020-01-01T00:00:00Z"),
    createdAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledAtAfter: new Date("2020-01-01T00:00:00Z"),
    settledAtBefore: new Date("2020-01-01T00:00:00Z"),
    initialActionAtAfter: new Date("2020-01-01T00:00:00Z"),
    initialActionAtBefore: new Date("2020-01-01T00:00:00Z"),
    settledIndexAfter: 123,
    settledIndexBefore: 123,
    idAfter: 123,
    idBefore: 123,
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionsRequest](../../models/operations/get-transactions-request.md)                                                                                       | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionsResponse](../../models/operations/get-transactions-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Retrieves a single Transaction resource along with its details, including amount, origin, destination, and status.

### Example Usage: ach_transaction

<!-- UsageSnippet language="typescript" operationID="get_/transactions/{uid}" method="get" path="/transactions/{uid}" example="ach_transaction" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.get({
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
import { transactionsGet } from "newline-ts-sdk/funcs/transactions-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```
### Example Usage: initiated_ach_return

<!-- UsageSnippet language="typescript" operationID="get_/transactions/{uid}" method="get" path="/transactions/{uid}" example="initiated_ach_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.get({
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
import { transactionsGet } from "newline-ts-sdk/funcs/transactions-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```
### Example Usage: initiated_wire_return

<!-- UsageSnippet language="typescript" operationID="get_/transactions/{uid}" method="get" path="/transactions/{uid}" example="initiated_wire_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.get({
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
import { transactionsGet } from "newline-ts-sdk/funcs/transactions-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```
### Example Usage: instant_payment_transaction

<!-- UsageSnippet language="typescript" operationID="get_/transactions/{uid}" method="get" path="/transactions/{uid}" example="instant_payment_transaction" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.get({
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
import { transactionsGet } from "newline-ts-sdk/funcs/transactions-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```
### Example Usage: wire_transaction

<!-- UsageSnippet language="typescript" operationID="get_/transactions/{uid}" method="get" path="/transactions/{uid}" example="wire_transaction" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.get({
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
import { transactionsGet } from "newline-ts-sdk/funcs/transactions-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionsUidRequest](../../models/operations/get-transactions-uid-request.md)                                                                                | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionsUidResponse](../../models/operations/get-transactions-uid-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## authorize

Approves or denies a pending Transaction. This endpoint is used to explicitly authorize or reject a Transaction before it is executed.

### Example Usage: default_routing_error

<!-- UsageSnippet language="typescript" operationID="put_/transactions/{uid}/authorize" method="put" path="/transactions/{uid}/authorize" example="default_routing_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.authorize({
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
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
import { transactionsAuthorize } from "newline-ts-sdk/funcs/transactions-authorize.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsAuthorize(newlineSDK, {
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsAuthorize failed:", res.error);
  }
}

run();
```
### Example Usage: transaction_authorization_decision_window_expired

<!-- UsageSnippet language="typescript" operationID="put_/transactions/{uid}/authorize" method="put" path="/transactions/{uid}/authorize" example="transaction_authorization_decision_window_expired" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.authorize({
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
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
import { transactionsAuthorize } from "newline-ts-sdk/funcs/transactions-authorize.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsAuthorize(newlineSDK, {
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsAuthorize failed:", res.error);
  }
}

run();
```
### Example Usage: transaction_authorization_error

<!-- UsageSnippet language="typescript" operationID="put_/transactions/{uid}/authorize" method="put" path="/transactions/{uid}/authorize" example="transaction_authorization_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.authorize({
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
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
import { transactionsAuthorize } from "newline-ts-sdk/funcs/transactions-authorize.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsAuthorize(newlineSDK, {
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsAuthorize failed:", res.error);
  }
}

run();
```
### Example Usage: transaction_authorization_status_error

<!-- UsageSnippet language="typescript" operationID="put_/transactions/{uid}/authorize" method="put" path="/transactions/{uid}/authorize" example="transaction_authorization_status_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.authorize({
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
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
import { transactionsAuthorize } from "newline-ts-sdk/funcs/transactions-authorize.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsAuthorize(newlineSDK, {
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsAuthorize failed:", res.error);
  }
}

run();
```
### Example Usage: transaction_ineligible_for_authorization

<!-- UsageSnippet language="typescript" operationID="put_/transactions/{uid}/authorize" method="put" path="/transactions/{uid}/authorize" example="transaction_ineligible_for_authorization" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.authorize({
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
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
import { transactionsAuthorize } from "newline-ts-sdk/funcs/transactions-authorize.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsAuthorize(newlineSDK, {
    uid: "<id>",
    body: {
      authorizationStatus: "client_denied",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsAuthorize failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutTransactionsUidAuthorizeRequest](../../models/operations/put-transactions-uid-authorize-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutTransactionsUidAuthorizeResponse](../../models/operations/put-transactions-uid-authorize-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.PutTransactionsUidAuthorizeBadRequestError          | 400                                                        | application/json                                           |
| errors.PutTransactionsUidAuthorizeForbiddenError           | 403                                                        | application/json                                           |
| errors.PutTransactionsUidAuthorizeUnprocessableEntityError | 422                                                        | application/json                                           |
| errors.NewlineDefaultError                                 | 4XX, 5XX                                                   | \*/\*                                                      |

## listEvents

Retrieves a list of Transaction Events. Transaction Events represent the steps required to complete a Transaction and can be used to track its progress or review its history.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/transaction_events" method="get" path="/transaction_events" example="transactionEvents" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.listEvents({
    sourceCustodialAccountUid: "dmRtw1xkS9ghrntB",
    destinationCustodialAccountUid: "W55zKgvAk3zkpGM3",
    custodialAccountUid: "dmRtw1xkS9ghrntB",
    type: "odfi_ach_deposit",
    transactionUid: "SMwKC1osz77DTEiu",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transactionsListEvents } from "newline-ts-sdk/funcs/transactions-list-events.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsListEvents(newlineSDK, {
    sourceCustodialAccountUid: "dmRtw1xkS9ghrntB",
    destinationCustodialAccountUid: "W55zKgvAk3zkpGM3",
    custodialAccountUid: "dmRtw1xkS9ghrntB",
    type: "odfi_ach_deposit",
    transactionUid: "SMwKC1osz77DTEiu",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsListEvents failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionEventsRequest](../../models/operations/get-transaction-events-request.md)                                                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionEventsResponse](../../models/operations/get-transaction-events-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## getEvent

Retrieves a single Transaction Event resource, including its status, timestamps, and associated Transaction details.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/transaction_events/{uid}" method="get" path="/transaction_events/{uid}" example="transactionEvent" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.getEvent({
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
import { transactionsGetEvent } from "newline-ts-sdk/funcs/transactions-get-event.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGetEvent(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetEvent failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetTransactionEventsUidRequest](../../models/operations/get-transaction-events-uid-request.md)                                                                     | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetTransactionEventsUidResponse](../../models/operations/get-transaction-events-uid-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## listSyntheticLineItems

Retrieves a list of Synthetic Line Items. These represent individual debits and credits associated with Synthetic Accounts as part of a Transaction Event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/synthetic_line_items" method="get" path="/synthetic_line_items" example="syntheticLineItems" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.listSyntheticLineItems({
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    transactionUid: "SMwKC1osz77DTEiu",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transactionsListSyntheticLineItems } from "newline-ts-sdk/funcs/transactions-list-synthetic-line-items.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsListSyntheticLineItems(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    poolUid: "wTSMX1GubP21ev2h",
    syntheticAccountUid: "4XkJnsfHsuqrxmeX",
    transactionUid: "SMwKC1osz77DTEiu",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsListSyntheticLineItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyntheticLineItemsRequest](../../models/operations/get-synthetic-line-items-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSyntheticLineItemsResponse](../../models/operations/get-synthetic-line-items-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## getSyntheticLineItem

Retrieves a single Synthetic Line Item resource, including the amount, account, and associated Transaction Event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/synthetic_line_items/{uid}" method="get" path="/synthetic_line_items/{uid}" example="syntheticLineItem" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.getSyntheticLineItem({
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
import { transactionsGetSyntheticLineItem } from "newline-ts-sdk/funcs/transactions-get-synthetic-line-item.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGetSyntheticLineItem(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetSyntheticLineItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSyntheticLineItemsUidRequest](../../models/operations/get-synthetic-line-items-uid-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetSyntheticLineItemsUidResponse](../../models/operations/get-synthetic-line-items-uid-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## listCustodialLineItems

Retrieves a list of Custodial Line Items. These represent individual debits and credits associated with Custodial Accounts as part of a Transaction Event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/custodial_line_items" method="get" path="/custodial_line_items" example="custodialLineItems" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.listCustodialLineItems({
    customerUid: "uKxmLxUEiSj5h4M3",
    custodialAccountUid: "dmRtw1xkS9ghrntB",
    transactionEventUid: "MB2yqBrm3c4bUbou",
    transactionUid: "SMwKC1osz77DTEiu",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { transactionsListCustodialLineItems } from "newline-ts-sdk/funcs/transactions-list-custodial-line-items.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsListCustodialLineItems(newlineSDK, {
    customerUid: "uKxmLxUEiSj5h4M3",
    custodialAccountUid: "dmRtw1xkS9ghrntB",
    transactionEventUid: "MB2yqBrm3c4bUbou",
    transactionUid: "SMwKC1osz77DTEiu",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsListCustodialLineItems failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustodialLineItemsRequest](../../models/operations/get-custodial-line-items-request.md)                                                                         | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustodialLineItemsResponse](../../models/operations/get-custodial-line-items-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## getCustodialLineItem

Retrieves a single Custodial Line Item resource, including the amount, account, and associated Transaction Event.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/custodial_line_items/{uid}" method="get" path="/custodial_line_items/{uid}" example="custodialLineItem" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.transactions.getCustodialLineItem({
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
import { transactionsGetCustodialLineItem } from "newline-ts-sdk/funcs/transactions-get-custodial-line-item.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await transactionsGetCustodialLineItem(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("transactionsGetCustodialLineItem failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetCustodialLineItemsUidRequest](../../models/operations/get-custodial-line-items-uid-request.md)                                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetCustodialLineItemsUidResponse](../../models/operations/get-custodial-line-items-uid-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |