# Returns

## Overview

The Returns endpoints help initiate, track, and manage returns of received and originated payments. These endpoints are accessible within the Sandbox and Production environments.

**Endpoints:**

- GET [List Returns: GET /returns](https://developers.newline53.com/reference/get_returns)
- POST [Create a new Return: POST /returns](https://developers.newline53.com/reference/post_returns)
- GET [Get a single Return: GET /returns/{uid}](https://developers.newline53.com/reference/get_returns-uid)

The returns endpoint allows for the retrieval and creation of return transactions within the system.

[GET List Returns](https://newline-enterprise-group.readme.io/reference/get_returns)- Use this endpoint to retrieve a list of all return transactions. You can filter the results based on various parameters such as status or date.

[POST Create a New Return](https://newline-enterprise-group.readme.io/reference/post_returns)- This endpoint is used to Create a new return transaction. Return can only be created for eligible transactions that have already been completed.

[GET a Single Return](https://newline-enterprise-group.readme.io/reference/get_returns-uid)- Use this endpoint to retrieve details about a specific return transaction.

### Available Operations

* [list](#list) - List Returns
* [create](#create) - Create a new Return
* [get](#get) - Get a single Return

## list

Retrieves a list of return transactions. You can filter the results based on parameters such as status, date, and transaction type. This endpoint is available in Sandbox and Production environments.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/returns" method="get" path="/returns" example="returns_list" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.list({
    customerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { returnsList } from "newline-ts-sdk/funcs/returns-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsList(newlineSDK, {
    customerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReturnsRequest](../../models/operations/get-returns-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReturnsResponse](../../models/operations/get-returns-response.md)\>**

### Errors

| Error Type                                | Status Code                               | Content Type                              |
| ----------------------------------------- | ----------------------------------------- | ----------------------------------------- |
| errors.GetReturnsForbiddenError           | 403                                       | application/json                          |
| errors.GetReturnsUnprocessableEntityError | 422                                       | application/json                          |
| errors.NewlineDefaultError                | 4XX, 5XX                                  | \*/\*                                     |

## create

Initiates a Return of an ACH or wire payment.
A full ACH addenda is not available for ACH returns because an addenda record is used for the return itself; the `addenda_info` field contains the remaining available space.
For wire returns, the `wire_instruction` field is limited to 70 characters because Newline prefixes the instructions with the original wire transaction identifier (e.g., IMAD).


### Example Usage: access_to_returns

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="access_to_returns" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: ach

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="ach" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "RLYGR8CO RMA Z452208-13",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "RLYGR8CO RMA Z452208-13",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: bad_original_transaction_status

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="bad_original_transaction_status" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: cannot_return_a_return_transaction

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="cannot_return_a_return_transaction" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: cannot_return_an_ineligible_transaction

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="cannot_return_an_ineligible_transaction" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: created_return

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="created_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: expired_return_window

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="expired_return_window" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: extraneous_payment_rail_info_for_return

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="extraneous_payment_rail_info_for_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: information_unavailable_for_return

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="information_unavailable_for_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: insufficient_time_to_process_return

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="insufficient_time_to_process_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: network_code_unsupported

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="network_code_unsupported" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: return_already_exists

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="return_already_exists" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: return_creation_error

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="return_creation_error" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: unknown_requestor_type

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="unknown_requestor_type" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: unsupported_original_transaction_code

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="unsupported_original_transaction_code" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: unsupported_return

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="unsupported_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    originalTransactionUid: "nwXnpBbX3A5sTki3",
    requestingCustomerUid: "Trzqy9t6j6tFGoG3",
    requestorType: "customer",
    returnReason: "Insufficient Funds",
    ach: {
      achReturnCode: "R02",
      addendaInfo: "TXN0055BADD1E cancelled",
    },
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```
### Example Usage: wire

<!-- UsageSnippet language="typescript" operationID="post_/returns" method="post" path="/returns" example="wire" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.create({
    originalTransactionUid: "DbxJUHVuqt3C7hGK",
    requestingCustomerUid: "EhrQZJNjCd79LLYq",
    requestorType: "customer",
    returnReason: "Refund issued by Bruno's Boxing for Order #5555555555",
    wire: {
      wireInstructions: "ORDER 5555555555",
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
import { returnsCreate } from "newline-ts-sdk/funcs/returns-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsCreate(newlineSDK, {
    originalTransactionUid: "DbxJUHVuqt3C7hGK",
    requestingCustomerUid: "EhrQZJNjCd79LLYq",
    requestorType: "customer",
    returnReason: "Refund issued by Bruno's Boxing for Order #5555555555",
    wire: {
      wireInstructions: "ORDER 5555555555",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostReturnsRequest](../../models/operations/post-returns-request.md)                                                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostReturnsResponse](../../models/operations/post-returns-response.md)\>**

### Errors

| Error Type                                 | Status Code                                | Content Type                               |
| ------------------------------------------ | ------------------------------------------ | ------------------------------------------ |
| errors.PostReturnsBadRequestError          | 400                                        | application/json                           |
| errors.PostReturnsForbiddenError           | 403                                        | application/json                           |
| errors.PostReturnsUnprocessableEntityError | 422                                        | application/json                           |
| errors.NewlineDefaultError                 | 4XX, 5XX                                   | \*/\*                                      |

## get

Retrieves details about a specific return transaction, including its status, original transaction reference, and any associated metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/returns/{uid}" method="get" path="/returns/{uid}" example="single_return" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.returns.get({
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
import { returnsGet } from "newline-ts-sdk/funcs/returns-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await returnsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("returnsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetReturnsUidRequest](../../models/operations/get-returns-uid-request.md)                                                                                          | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetReturnsUidResponse](../../models/operations/get-returns-uid-response.md)\>**

### Errors

| Error Type                         | Status Code                        | Content Type                       |
| ---------------------------------- | ---------------------------------- | ---------------------------------- |
| errors.GetReturnsUidForbiddenError | 403                                | application/json                   |
| errors.GetReturnsUidNotFoundError  | 404                                | application/json                   |
| errors.NewlineDefaultError         | 4XX, 5XX                           | \*/\*                              |