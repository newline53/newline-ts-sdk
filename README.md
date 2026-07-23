# Newline Typescript SDK

Developer-friendly and type-safe Typescript SDK built to leverage the Newline Platform APIs.

<!-- No Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Newline Typescript SDK](#newline-typescript-sdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Authentication](#authentication)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)
  * [License](#license)
  * [See Also](#see-also)

<!-- End Table of Contents [toc] -->

## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm install github:newline53/newline-ts-sdk
```

### PNPM

```bash
pnpm add github:newline53/newline-ts-sdk
```

### Bun

```bash
bun add github:newline53/newline-ts-sdk
```

### Yarn

```bash
yarn add github:newline53/newline-ts-sdk
```

> [!NOTE]
> This package is published as an ES Module (ESM) only. For applications using
> CommonJS, use `await import()` to import and use this package.

<!-- No SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken();

  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name                       | Type | Scheme      | Environment Variable                         |
| -------------------------- | ---- | ----------- | -------------------------------------------- |
| `programUid`<br/>`hmacKey` | http | Custom HTTP | `NEWLINE_PROGRAM_UID`<br/>`NEWLINE_HMAC_KEY` |

You can set the security parameters through the `security` optional parameter when initializing the SDK client instance. For example:
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken();

  console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [Auth](docs/sdks/auth/README.md)

* [generateToken](docs/sdks/auth/README.md#generatetoken) - Generate an authentication token

### [CombinedTransfers](docs/sdks/combinedtransfers/README.md)

* [list](docs/sdks/combinedtransfers/README.md#list) - List Combined Transfers
* [create](docs/sdks/combinedtransfers/README.md#create) - Create a new Combined Transfer
* [get](docs/sdks/combinedtransfers/README.md#get) - Get a single Combined Transfer

### [CustodialAccountClosingBalances](docs/sdks/custodialaccountclosingbalances/README.md)

* [list](docs/sdks/custodialaccountclosingbalances/README.md#list) - List Custodial Account Closing Balances

### [CustodialAccounts](docs/sdks/custodialaccounts/README.md)

* [listAccounts](docs/sdks/custodialaccounts/README.md#listaccounts) - List Custodial Accounts
* [getById](docs/sdks/custodialaccounts/README.md#getbyid) - Get a single Custodial Account
* [getClosingBalance](docs/sdks/custodialaccounts/README.md#getclosingbalance) - Get a single Custodial Account Closing Balance

### [CustomerProducts](docs/sdks/customerproducts/README.md)

* [list](docs/sdks/customerproducts/README.md#list) - List Customer Products
* [onboard](docs/sdks/customerproducts/README.md#onboard) - Onboard Customer onto a Product
* [get](docs/sdks/customerproducts/README.md#get) - Get a single Customer Product

### [Customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - Get a list of Customers
* [create](docs/sdks/customers/README.md#create) - Create a new Customer
* [getById](docs/sdks/customers/README.md#getbyid) - Get a single Customer
* [update](docs/sdks/customers/README.md#update) - Adjust Customer Data
* [archive](docs/sdks/customers/README.md#archive) - Archive a Customer

### [Pools](docs/sdks/pools/README.md)

* [list](docs/sdks/pools/README.md#list) - List Pools
* [getById](docs/sdks/pools/README.md#getbyid) - Get a single Pool

### [Products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [get](docs/sdks/products/README.md#get) - Get a single Product

### [Returns](docs/sdks/returns/README.md)

* [list](docs/sdks/returns/README.md#list) - List Returns
* [create](docs/sdks/returns/README.md#create) - Create a new Return
* [get](docs/sdks/returns/README.md#get) - Get a single Return

### [SyntheticAccounts](docs/sdks/syntheticaccounts/README.md)

* [listTypes](docs/sdks/syntheticaccounts/README.md#listtypes) - List Synthetic Account Types
* [getAccountType](docs/sdks/syntheticaccounts/README.md#getaccounttype) - Get a Single Synthetic Account Type
* [list](docs/sdks/syntheticaccounts/README.md#list) - List Synthetic Accounts
* [create](docs/sdks/syntheticaccounts/README.md#create) - Create a New Synthetic Account
* [get](docs/sdks/syntheticaccounts/README.md#get) - Get a single Synthetic Account
* [update](docs/sdks/syntheticaccounts/README.md#update) - Update the Synthetic Account metadata
* [archive](docs/sdks/syntheticaccounts/README.md#archive) - Archive a Synthetic Account
* [listClosingBalances](docs/sdks/syntheticaccounts/README.md#listclosingbalances) - List Synthetic Account Closing Balances
* [getClosingBalance](docs/sdks/syntheticaccounts/README.md#getclosingbalance) - Get a single Synthetic Account Closing Balance

### [Transactions](docs/sdks/transactions/README.md)

* [list](docs/sdks/transactions/README.md#list) - List Transactions
* [get](docs/sdks/transactions/README.md#get) - Get a single Transaction
* [authorize](docs/sdks/transactions/README.md#authorize) - Approve or deny a transaction
* [listEvents](docs/sdks/transactions/README.md#listevents) - List Transaction Events
* [getEvent](docs/sdks/transactions/README.md#getevent) - Get a single Transaction Event
* [listSyntheticLineItems](docs/sdks/transactions/README.md#listsyntheticlineitems) - List Synthetic Line Items
* [getSyntheticLineItem](docs/sdks/transactions/README.md#getsyntheticlineitem) - Get a single Synthetic Line Item
* [listCustodialLineItems](docs/sdks/transactions/README.md#listcustodiallineitems) - List Custodial Line Items
* [getCustodialLineItem](docs/sdks/transactions/README.md#getcustodiallineitem) - Get a single Custodial Line Item

### [Transfers](docs/sdks/transfers/README.md)

* [list](docs/sdks/transfers/README.md#list) - List Transfers
* [initiate](docs/sdks/transfers/README.md#initiate) - Initiate a Transfer
* [get](docs/sdks/transfers/README.md#get) - Get a single Transfer
* [cancel](docs/sdks/transfers/README.md#cancel) - Cancel a Transfer

### [VirtualReferenceNumbers](docs/sdks/virtualreferencenumbers/README.md)

* [list](docs/sdks/virtualreferencenumbers/README.md#list) - List Virtual Reference Numbers
* [create](docs/sdks/virtualreferencenumbers/README.md#create) - Create a new Virtual Reference Number
* [getById](docs/sdks/virtualreferencenumbers/README.md#getbyid) - Get a single Virtual Reference Number
* [edit](docs/sdks/virtualreferencenumbers/README.md#edit) - Edit a Virtual Reference Number
* [archive](docs/sdks/virtualreferencenumbers/README.md#archive) - Archive a single Virtual Reference Number
* [lock](docs/sdks/virtualreferencenumbers/README.md#lock) - Lock a single Virtual Reference Number
* [unlock](docs/sdks/virtualreferencenumbers/README.md#unlock) - Unlock a single Virtual Reference Number

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`authGenerateToken`](docs/sdks/auth/README.md#generatetoken) - Generate an authentication token
- [`combinedTransfersCreate`](docs/sdks/combinedtransfers/README.md#create) - Create a new Combined Transfer
- [`combinedTransfersGet`](docs/sdks/combinedtransfers/README.md#get) - Get a single Combined Transfer
- [`combinedTransfersList`](docs/sdks/combinedtransfers/README.md#list) - List Combined Transfers
- [`custodialAccountClosingBalancesList`](docs/sdks/custodialaccountclosingbalances/README.md#list) - List Custodial Account Closing Balances
- [`custodialAccountsGetById`](docs/sdks/custodialaccounts/README.md#getbyid) - Get a single Custodial Account
- [`custodialAccountsGetClosingBalance`](docs/sdks/custodialaccounts/README.md#getclosingbalance) - Get a single Custodial Account Closing Balance
- [`custodialAccountsListAccounts`](docs/sdks/custodialaccounts/README.md#listaccounts) - List Custodial Accounts
- [`customerProductsGet`](docs/sdks/customerproducts/README.md#get) - Get a single Customer Product
- [`customerProductsList`](docs/sdks/customerproducts/README.md#list) - List Customer Products
- [`customerProductsOnboard`](docs/sdks/customerproducts/README.md#onboard) - Onboard Customer onto a Product
- [`customersArchive`](docs/sdks/customers/README.md#archive) - Archive a Customer
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create a new Customer
- [`customersGetById`](docs/sdks/customers/README.md#getbyid) - Get a single Customer
- [`customersList`](docs/sdks/customers/README.md#list) - Get a list of Customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Adjust Customer Data
- [`poolsGetById`](docs/sdks/pools/README.md#getbyid) - Get a single Pool
- [`poolsList`](docs/sdks/pools/README.md#list) - List Pools
- [`productsGet`](docs/sdks/products/README.md#get) - Get a single Product
- [`productsList`](docs/sdks/products/README.md#list) - List Products
- [`returnsCreate`](docs/sdks/returns/README.md#create) - Create a new Return
- [`returnsGet`](docs/sdks/returns/README.md#get) - Get a single Return
- [`returnsList`](docs/sdks/returns/README.md#list) - List Returns
- [`syntheticAccountsArchive`](docs/sdks/syntheticaccounts/README.md#archive) - Archive a Synthetic Account
- [`syntheticAccountsCreate`](docs/sdks/syntheticaccounts/README.md#create) - Create a New Synthetic Account
- [`syntheticAccountsGet`](docs/sdks/syntheticaccounts/README.md#get) - Get a single Synthetic Account
- [`syntheticAccountsGetAccountType`](docs/sdks/syntheticaccounts/README.md#getaccounttype) - Get a Single Synthetic Account Type
- [`syntheticAccountsGetClosingBalance`](docs/sdks/syntheticaccounts/README.md#getclosingbalance) - Get a single Synthetic Account Closing Balance
- [`syntheticAccountsList`](docs/sdks/syntheticaccounts/README.md#list) - List Synthetic Accounts
- [`syntheticAccountsListClosingBalances`](docs/sdks/syntheticaccounts/README.md#listclosingbalances) - List Synthetic Account Closing Balances
- [`syntheticAccountsListTypes`](docs/sdks/syntheticaccounts/README.md#listtypes) - List Synthetic Account Types
- [`syntheticAccountsUpdate`](docs/sdks/syntheticaccounts/README.md#update) - Update the Synthetic Account metadata
- [`transactionsAuthorize`](docs/sdks/transactions/README.md#authorize) - Approve or deny a transaction
- [`transactionsGet`](docs/sdks/transactions/README.md#get) - Get a single Transaction
- [`transactionsGetCustodialLineItem`](docs/sdks/transactions/README.md#getcustodiallineitem) - Get a single Custodial Line Item
- [`transactionsGetEvent`](docs/sdks/transactions/README.md#getevent) - Get a single Transaction Event
- [`transactionsGetSyntheticLineItem`](docs/sdks/transactions/README.md#getsyntheticlineitem) - Get a single Synthetic Line Item
- [`transactionsList`](docs/sdks/transactions/README.md#list) - List Transactions
- [`transactionsListCustodialLineItems`](docs/sdks/transactions/README.md#listcustodiallineitems) - List Custodial Line Items
- [`transactionsListEvents`](docs/sdks/transactions/README.md#listevents) - List Transaction Events
- [`transactionsListSyntheticLineItems`](docs/sdks/transactions/README.md#listsyntheticlineitems) - List Synthetic Line Items
- [`transfersCancel`](docs/sdks/transfers/README.md#cancel) - Cancel a Transfer
- [`transfersGet`](docs/sdks/transfers/README.md#get) - Get a single Transfer
- [`transfersInitiate`](docs/sdks/transfers/README.md#initiate) - Initiate a Transfer
- [`transfersList`](docs/sdks/transfers/README.md#list) - List Transfers
- [`virtualReferenceNumbersArchive`](docs/sdks/virtualreferencenumbers/README.md#archive) - Archive a single Virtual Reference Number
- [`virtualReferenceNumbersCreate`](docs/sdks/virtualreferencenumbers/README.md#create) - Create a new Virtual Reference Number
- [`virtualReferenceNumbersEdit`](docs/sdks/virtualreferencenumbers/README.md#edit) - Edit a Virtual Reference Number
- [`virtualReferenceNumbersGetById`](docs/sdks/virtualreferencenumbers/README.md#getbyid) - Get a single Virtual Reference Number
- [`virtualReferenceNumbersList`](docs/sdks/virtualreferencenumbers/README.md#list) - List Virtual Reference Numbers
- [`virtualReferenceNumbersLock`](docs/sdks/virtualreferencenumbers/README.md#lock) - Lock a single Virtual Reference Number
- [`virtualReferenceNumbersUnlock`](docs/sdks/virtualreferencenumbers/README.md#unlock) - Unlock a single Virtual Reference Number

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken({
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  console.log(result);
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken();

  console.log(result);
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

[`NewlineError`](./src/models/errors/newline-error.ts) is the base class for all HTTP error responses. It has the following properties:

| Property            | Type       | Description                                                                             |
| ------------------- | ---------- | --------------------------------------------------------------------------------------- |
| `error.message`     | `string`   | Error message                                                                           |
| `error.statusCode`  | `number`   | HTTP response status code eg `404`                                                      |
| `error.headers`     | `Headers`  | HTTP response headers                                                                   |
| `error.body`        | `string`   | HTTP body. Can be empty string if no body is returned.                                  |
| `error.rawResponse` | `Response` | Raw HTTP response                                                                       |
| `error.data$`       |            | Optional. Some errors may contain structured data. [See Error Classes](#error-classes). |

### Example
```typescript
import { NewlineSDK } from "newline-ts-sdk";
import * as errors from "newline-ts-sdk/models/errors";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  try {
    const result = await newlineSDK.customerProducts.onboard({
      customerUid: "S62MaHx6WwsqG9vQ",
      productUid: "pQtTCSXz57fuefzp",
    });

    console.log(result);
  } catch (error) {
    // The base class for HTTP error responses
    if (error instanceof errors.NewlineError) {
      console.log(error.message);
      console.log(error.statusCode);
      console.log(error.body);
      console.log(error.headers);

      // Depending on the method different errors may be thrown
      if (
        error instanceof errors.OnboardCustomerProductUnprocessableEntityError
      ) {
        console.log(error.data$.errors); // OnboardCustomerProductError[]
        console.log(error.data$.status); // number
      }
    }
  }
}

run();

```

### Error Classes
**Primary error:**
* [`NewlineError`](./src/models/errors/newline-error.ts): The base class for HTTP error responses.

<details><summary>Less common errors (38)</summary>

<br />

**Network errors:**
* [`ConnectionError`](./src/models/errors/http-client-errors.ts): HTTP client was unable to make a request to a server.
* [`RequestTimeoutError`](./src/models/errors/http-client-errors.ts): HTTP request timed out due to an AbortSignal signal.
* [`RequestAbortedError`](./src/models/errors/http-client-errors.ts): HTTP request was aborted by the client.
* [`InvalidRequestError`](./src/models/errors/http-client-errors.ts): Any input used to create a request is invalid.
* [`UnexpectedClientError`](./src/models/errors/http-client-errors.ts): Unrecognised or unexpected error.


**Inherit from [`NewlineError`](./src/models/errors/newline-error.ts)**:
* [`UpdateSyntheticAccountBadRequestError`](./src/models/errors/update-synthetic-account-bad-request-error.ts): A Synthetic Account is not updated if a required parameter is missing. Status code `400`. Applicable to 1 of 52 methods.*
* [`PutTransfersUidCancelBadRequestError`](./src/models/errors/put-transfers-uid-cancel-bad-request-error.ts): The transfer is not eligible for cancellation. Status code `400`. Applicable to 1 of 52 methods.*
* [`PutTransactionsUidAuthorizeBadRequestError`](./src/models/errors/put-transactions-uid-authorize-bad-request-error.ts): Bad authorization request. Status code `400`. Applicable to 1 of 52 methods.*
* [`PostReturnsBadRequestError`](./src/models/errors/post-returns-bad-request-error.ts): Creation Error. Status code `400`. Applicable to 1 of 52 methods.*
* [`PutTransactionsUidAuthorizeForbiddenError`](./src/models/errors/put-transactions-uid-authorize-forbidden-error.ts): Client authorization disabled. (The Program is not configured for Client Authorization). Status code `403`. Applicable to 1 of 52 methods.*
* [`GetReturnsForbiddenError`](./src/models/errors/get-returns-forbidden-error.ts): Denied access to Returns. Status code `403`. Applicable to 1 of 52 methods.*
* [`PostReturnsForbiddenError`](./src/models/errors/post-returns-forbidden-error.ts): Denied access to Returns. Status code `403`. Applicable to 1 of 52 methods.*
* [`GetReturnsUidForbiddenError`](./src/models/errors/get-returns-uid-forbidden-error.ts): Denied access to Returns. Status code `403`. Applicable to 1 of 52 methods.*
* [`GetCombinedTransfersForbiddenError`](./src/models/errors/get-combined-transfers-forbidden-error.ts): Denied access to Combined Transfers. Status code `403`. Applicable to 1 of 52 methods.*
* [`PostCombinedTransfersForbiddenError`](./src/models/errors/post-combined-transfers-forbidden-error.ts): Denied access to Combined Transfers. Status code `403`. Applicable to 1 of 52 methods.*
* [`GetCombinedTransfersUidForbiddenError`](./src/models/errors/get-combined-transfers-uid-forbidden-error.ts): Denied access to Combined Transfers. Status code `403`. Applicable to 1 of 52 methods.*
* [`GetVirtualReferenceNumbersUidNotFoundError`](./src/models/errors/get-virtual-reference-numbers-uid-not-found-error.ts): The Virtual Reference Number is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidNotFoundError`](./src/models/errors/put-virtual-reference-numbers-uid-not-found-error.ts): The Virtual Reference Number is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`DeleteVirtualReferenceNumbersUidNotFoundError`](./src/models/errors/delete-virtual-reference-numbers-uid-not-found-error.ts): The Virtual Reference Number is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidLockNotFoundError`](./src/models/errors/put-virtual-reference-numbers-uid-lock-not-found-error.ts): The Virtual Reference Number is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidUnlockNotFoundError`](./src/models/errors/put-virtual-reference-numbers-uid-unlock-not-found-error.ts): The Virtual Reference Number is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`GetReturnsUidNotFoundError`](./src/models/errors/get-returns-uid-not-found-error.ts): Unknown Return. Status code `404`. Applicable to 1 of 52 methods.*
* [`GetCombinedTransfersUidNotFoundError`](./src/models/errors/get-combined-transfers-uid-not-found-error.ts): The Combined Transfer is not found. Status code `404`. Applicable to 1 of 52 methods.*
* [`ConflictError`](./src/models/errors/conflict-error.ts): A new Synthetic Account is NOT created if the external_uid given is present but not unique. Status code `409`. Applicable to 1 of 52 methods.*
* [`OnboardCustomerProductUnprocessableEntityError`](./src/models/errors/onboard-customer-product-unprocessable-entity-error.ts): There was a problem with the request body. Status code `422`. Applicable to 1 of 52 methods.*
* [`DeleteSyntheticAccountUnprocessableEntityError`](./src/models/errors/delete-synthetic-account-unprocessable-entity-error.ts): A Synthetic Account is not archived. Status code `422`. Applicable to 1 of 52 methods.*
* [`PutTransfersUidCancelUnprocessableEntityError`](./src/models/errors/put-transfers-uid-cancel-unprocessable-entity-error.ts): The transfer could not be canceled. Status code `422`. Applicable to 1 of 52 methods.*
* [`PutTransactionsUidAuthorizeUnprocessableEntityError`](./src/models/errors/put-transactions-uid-authorize-unprocessable-entity-error.ts): An exception occurred while authorizing transaction. Status code `422`. Applicable to 1 of 52 methods.*
* [`GetVirtualReferenceNumbersUnprocessableEntityError`](./src/models/errors/get-virtual-reference-numbers-unprocessable-entity-error.ts): Failed to retrieve Virtual Reference Numbers. Status code `422`. Applicable to 1 of 52 methods.*
* [`PostVirtualReferenceNumbersUnprocessableEntityError`](./src/models/errors/post-virtual-reference-numbers-unprocessable-entity-error.ts): Creation Error. Status code `422`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidUnprocessableEntityError`](./src/models/errors/put-virtual-reference-numbers-uid-unprocessable-entity-error.ts): Failed to update Virtual Reference Number. Status code `422`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidLockUnprocessableEntityError`](./src/models/errors/put-virtual-reference-numbers-uid-lock-unprocessable-entity-error.ts): The Virtual Reference Number could not be locked. Status code `422`. Applicable to 1 of 52 methods.*
* [`PutVirtualReferenceNumbersUidUnlockUnprocessableEntityError`](./src/models/errors/put-virtual-reference-numbers-uid-unlock-unprocessable-entity-error.ts): The Virtual Reference Number could not be unlocked. Status code `422`. Applicable to 1 of 52 methods.*
* [`GetReturnsUnprocessableEntityError`](./src/models/errors/get-returns-unprocessable-entity-error.ts): Failed to retrieve Returns. Status code `422`. Applicable to 1 of 52 methods.*
* [`PostReturnsUnprocessableEntityError`](./src/models/errors/post-returns-unprocessable-entity-error.ts): Creation Error. Status code `422`. Applicable to 1 of 52 methods.*
* [`GetCombinedTransfersUnprocessableEntityError`](./src/models/errors/get-combined-transfers-unprocessable-entity-error.ts): Failed to retrieve Combined Transfers. Status code `422`. Applicable to 1 of 52 methods.*
* [`PostCombinedTransfersUnprocessableEntityError`](./src/models/errors/post-combined-transfers-unprocessable-entity-error.ts): Creation Error. Status code `422`. Applicable to 1 of 52 methods.*
* [`ResponseValidationError`](./src/models/errors/response-validation-error.ts): Type mismatch between the data returned from the server and the structure expected by the SDK. See `error.rawValue` for the raw value and `error.pretty()` for a nicely formatted multi-line string.

</details>

\* Check [the method documentation](#available-resources-and-operations) to see if the error is applicable.
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name      | Server                                 | Description |
| --------- | -------------------------------------- | ----------- |
| `sandbox` | `https://sandbox.newline53.com/api/v1` | Sandbox     |
| `prod`    | `https://api.newline53.com/api/v1`     | Production  |

#### Example

```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  server: "sandbox",
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken();

  console.log(result);
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  serverURL: "https://sandbox.newline53.com/api/v1",
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.auth.generateToken();

  console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to:
- route requests through a proxy server using [undici](https://www.npmjs.com/package/undici)'s ProxyAgent
- use the `"beforeRequest"` hook to add a custom header and a timeout to requests
- use the `"requestError"` hook to log errors

```typescript
import { NewlineSDK } from "newline-ts-sdk";
import { ProxyAgent } from "undici";
import { HTTPClient } from "newline-ts-sdk/lib/http";

const dispatcher = new ProxyAgent("http://proxy.example.com:8080");

const httpClient = new HTTPClient({
  // 'fetcher' takes a function that has the same signature as native 'fetch'.
  fetcher: (input, init) =>
    // 'dispatcher' is specific to undici and not part of the standard Fetch API.
    fetch(input, { ...init, dispatcher } as RequestInit),
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new NewlineSDK({ httpClient: httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { NewlineSDK } from "newline-ts-sdk";

const sdk = new NewlineSDK({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `NEWLINE_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation.
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release.

## License

[Apache 2.0](LICENSE)

## See Also

- [Newline API Documentation](https://developers.newline53.com)
- [Newline MCP Server](https://github.com/newline53/newline-mcp-server)
- [Newline Postman Collections](https://www.postman.com/newline53)
