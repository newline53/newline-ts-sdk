# CustodialAccountClosingBalances

## Overview

### Available Operations

* [list](#list) - List Custodial Account Closing Balances

## list

Retrieves a paginated list of Custodial Account Closing balances, filtered by various parameters.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="listCustodialAccountClosingBalances" method="get" path="/custodial_account_closing_balances" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.custodialAccountClosingBalances.list({
    custodialAccountUid: "yqyYk5b1xgXFFrXs",
    custodialAccountExternalUid: "4XkJnsfHsuqrxmeX",
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
import { custodialAccountClosingBalancesList } from "newline-ts-sdk/funcs/custodial-account-closing-balances-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await custodialAccountClosingBalancesList(newlineSDK, {
    custodialAccountUid: "yqyYk5b1xgXFFrXs",
    custodialAccountExternalUid: "4XkJnsfHsuqrxmeX",
    netUsdClosingBalanceAsOf: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceBefore: new Date("2020-01-01T00:00:00Z"),
    netUsdClosingBalanceAfter: new Date("2020-01-01T00:00:00Z"),
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("custodialAccountClosingBalancesList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListCustodialAccountClosingBalancesRequest](../../models/operations/list-custodial-account-closing-balances-request.md)                                            | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListCustodialAccountClosingBalancesResponse](../../models/operations/list-custodial-account-closing-balances-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |