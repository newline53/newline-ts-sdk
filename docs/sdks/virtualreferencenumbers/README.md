# VirtualReferenceNumbers

## Overview

### Available Operations

* [list](#list) - List Virtual Reference Numbers
* [create](#create) - Create a new Virtual Reference Number
* [getById](#getbyid) - Get a single Virtual Reference Number
* [edit](#edit) - Edit a Virtual Reference Number
* [archive](#archive) - Archive a single Virtual Reference Number
* [lock](#lock) - Lock a single Virtual Reference Number
* [unlock](#unlock) - Unlock a single Virtual Reference Number

## list

Retrieves a list of Virtual Reference Numbers (VRNs) associated with the specified Synthetic Account. Supports filtering by status and other attributes.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/virtual_reference_numbers" method="get" path="/virtual_reference_numbers" example="virtual_reference_numbers_list" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.list({
    instantPaymentRailRegistrationStatus: "registered",
    status: "active",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    virtualReferenceNumber: "1234567890123456",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { virtualReferenceNumbersList } from "newline-ts-sdk/funcs/virtual-reference-numbers-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersList(newlineSDK, {
    instantPaymentRailRegistrationStatus: "registered",
    status: "active",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    virtualReferenceNumber: "1234567890123456",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVirtualReferenceNumbersRequest](../../models/operations/get-virtual-reference-numbers-request.md)                                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVirtualReferenceNumbersResponse](../../models/operations/get-virtual-reference-numbers-response.md)\>**

### Errors

| Error Type                                                | Status Code                                               | Content Type                                              |
| --------------------------------------------------------- | --------------------------------------------------------- | --------------------------------------------------------- |
| errors.GetVirtualReferenceNumbersUnprocessableEntityError | 422                                                       | application/json                                          |
| errors.NewlineDefaultError                                | 4XX, 5XX                                                  | \*/\*                                                     |

## create

Creates a new Virtual Reference Number (VRN) for the specified Synthetic Account.

### Example Usage: create_payload

<!-- UsageSnippet language="typescript" operationID="post_/virtual_reference_numbers" method="post" path="/virtual_reference_numbers" example="create_payload" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.create({
    externalUid: "YrfDrfVRgpPgnhF5",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { virtualReferenceNumbersCreate } from "newline-ts-sdk/funcs/virtual-reference-numbers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersCreate(newlineSDK, {
    externalUid: "YrfDrfVRgpPgnhF5",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: pending

<!-- UsageSnippet language="typescript" operationID="post_/virtual_reference_numbers" method="post" path="/virtual_reference_numbers" example="pending" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.create({
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { virtualReferenceNumbersCreate } from "newline-ts-sdk/funcs/virtual-reference-numbers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersCreate(newlineSDK, {
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: synthetic_account_ineligible_for_vrn

<!-- UsageSnippet language="typescript" operationID="post_/virtual_reference_numbers" method="post" path="/virtual_reference_numbers" example="synthetic_account_ineligible_for_vrn" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.create({
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { virtualReferenceNumbersCreate } from "newline-ts-sdk/funcs/virtual-reference-numbers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersCreate(newlineSDK, {
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersCreate failed:", res.error);
  }
}

run();
```
### Example Usage: vrn_creation_error_sync

<!-- UsageSnippet language="typescript" operationID="post_/virtual_reference_numbers" method="post" path="/virtual_reference_numbers" example="vrn_creation_error_sync" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.create({
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { virtualReferenceNumbersCreate } from "newline-ts-sdk/funcs/virtual-reference-numbers-create.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersCreate(newlineSDK, {
    externalUid: "partner-generated-id",
    name: "greenfield1",
    syntheticAccountUid: "Dg1EPao8XukUpHG8",
    routingNumber: "123456789",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersCreate failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PostVirtualReferenceNumbersRequest](../../models/operations/post-virtual-reference-numbers-request.md)                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PostVirtualReferenceNumbersResponse](../../models/operations/post-virtual-reference-numbers-response.md)\>**

### Errors

| Error Type                                                 | Status Code                                                | Content Type                                               |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| errors.PostVirtualReferenceNumbersUnprocessableEntityError | 422                                                        | application/json                                           |
| errors.NewlineDefaultError                                 | 4XX, 5XX                                                   | \*/\*                                                      |

## getById

Retrieves a single Virtual Reference Number resource along with its details, including status, linked Synthetic Account, and registration metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="get_/virtual_reference_numbers/{uid}" method="get" path="/virtual_reference_numbers/{uid}" example="registered" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.getById({
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
import { virtualReferenceNumbersGetById } from "newline-ts-sdk/funcs/virtual-reference-numbers-get-by-id.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersGetById(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersGetById failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetVirtualReferenceNumbersUidRequest](../../models/operations/get-virtual-reference-numbers-uid-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetVirtualReferenceNumbersUidResponse](../../models/operations/get-virtual-reference-numbers-uid-response.md)\>**

### Errors

| Error Type                                        | Status Code                                       | Content Type                                      |
| ------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------- |
| errors.GetVirtualReferenceNumbersUidNotFoundError | 404                                               | application/json                                  |
| errors.NewlineDefaultError                        | 4XX, 5XX                                          | \*/\*                                             |

## edit

Updates the metadata of an existing Virtual Reference Number. This may include changes to labels, descriptions, or Instant Payment registration settings.

### Example Usage: failed_to_update_vrn

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}" method="put" path="/virtual_reference_numbers/{uid}" example="failed_to_update_vrn" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.edit({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
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
import { virtualReferenceNumbersEdit } from "newline-ts-sdk/funcs/virtual-reference-numbers-edit.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersEdit(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersEdit failed:", res.error);
  }
}

run();
```
### Example Usage: registered

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}" method="put" path="/virtual_reference_numbers/{uid}" example="registered" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.edit({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
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
import { virtualReferenceNumbersEdit } from "newline-ts-sdk/funcs/virtual-reference-numbers-edit.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersEdit(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersEdit failed:", res.error);
  }
}

run();
```
### Example Usage: unknown_virtual_reference_number

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}" method="put" path="/virtual_reference_numbers/{uid}" example="unknown_virtual_reference_number" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.edit({
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
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
import { virtualReferenceNumbersEdit } from "newline-ts-sdk/funcs/virtual-reference-numbers-edit.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersEdit(newlineSDK, {
    uid: "<id>",
    body: {
      externalUid: "partner-generated-id",
      name: "greenfield1",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersEdit failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutVirtualReferenceNumbersUidRequest](../../models/operations/put-virtual-reference-numbers-uid-request.md)                                                        | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutVirtualReferenceNumbersUidResponse](../../models/operations/put-virtual-reference-numbers-uid-response.md)\>**

### Errors

| Error Type                                                   | Status Code                                                  | Content Type                                                 |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| errors.PutVirtualReferenceNumbersUidNotFoundError            | 404                                                          | application/json                                             |
| errors.PutVirtualReferenceNumbersUidUnprocessableEntityError | 422                                                          | application/json                                             |
| errors.NewlineDefaultError                                   | 4XX, 5XX                                                     | \*/\*                                                        |

## archive

Archives a Virtual Reference Number, removing it from active use. Archived VRNs cannot be used for incoming payments or reconciliation.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="delete_/virtual_reference_numbers/{uid}" method="delete" path="/virtual_reference_numbers/{uid}" example="archived" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.archive({
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
import { virtualReferenceNumbersArchive } from "newline-ts-sdk/funcs/virtual-reference-numbers-archive.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersArchive(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersArchive failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.DeleteVirtualReferenceNumbersUidRequest](../../models/operations/delete-virtual-reference-numbers-uid-request.md)                                                  | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.DeleteVirtualReferenceNumbersUidResponse](../../models/operations/delete-virtual-reference-numbers-uid-response.md)\>**

### Errors

| Error Type                                           | Status Code                                          | Content Type                                         |
| ---------------------------------------------------- | ---------------------------------------------------- | ---------------------------------------------------- |
| errors.DeleteVirtualReferenceNumbersUidNotFoundError | 404                                                  | application/json                                     |
| errors.NewlineDefaultError                           | 4XX, 5XX                                             | \*/\*                                                |

## lock

Locks a Virtual Reference Number to prevent new transactions or usage. This is typically used for fraud prevention or temporary deactivation.

### Example Usage: failed_to_update_vrn

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="failed_to_update_vrn" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```
### Example Usage: locked

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="locked" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```
### Example Usage: unknown_virtual_reference_number

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="unknown_virtual_reference_number" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```
### Example Usage: virtual_reference_number_archived

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="virtual_reference_number_archived" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```
### Example Usage: vrn_already_locked

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="vrn_already_locked" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```
### Example Usage: vrn_lock_cooldown_active

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/lock" method="put" path="/virtual_reference_numbers/{uid}/lock" example="vrn_lock_cooldown_active" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.lock({
    uid: "<id>",
    body: {
      lockReason: "admin",
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
import { virtualReferenceNumbersLock } from "newline-ts-sdk/funcs/virtual-reference-numbers-lock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersLock(newlineSDK, {
    uid: "<id>",
    body: {
      lockReason: "admin",
    },
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersLock failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutVirtualReferenceNumbersUidLockRequest](../../models/operations/put-virtual-reference-numbers-uid-lock-request.md)                                               | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutVirtualReferenceNumbersUidLockResponse](../../models/operations/put-virtual-reference-numbers-uid-lock-response.md)\>**

### Errors

| Error Type                                                       | Status Code                                                      | Content Type                                                     |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| errors.PutVirtualReferenceNumbersUidLockNotFoundError            | 404                                                              | application/json                                                 |
| errors.PutVirtualReferenceNumbersUidLockUnprocessableEntityError | 422                                                              | application/json                                                 |
| errors.NewlineDefaultError                                       | 4XX, 5XX                                                         | \*/\*                                                            |

## unlock

Unlocks a previously locked Virtual Reference Number, restoring its ability to receive payments and participate in reconciliation workflows.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="put_/virtual_reference_numbers/{uid}/unlock" method="put" path="/virtual_reference_numbers/{uid}/unlock" example="registered" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.virtualReferenceNumbers.unlock({
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
import { virtualReferenceNumbersUnlock } from "newline-ts-sdk/funcs/virtual-reference-numbers-unlock.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await virtualReferenceNumbersUnlock(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("virtualReferenceNumbersUnlock failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.PutVirtualReferenceNumbersUidUnlockRequest](../../models/operations/put-virtual-reference-numbers-uid-unlock-request.md)                                           | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.PutVirtualReferenceNumbersUidUnlockResponse](../../models/operations/put-virtual-reference-numbers-uid-unlock-response.md)\>**

### Errors

| Error Type                                                         | Status Code                                                        | Content Type                                                       |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| errors.PutVirtualReferenceNumbersUidUnlockNotFoundError            | 404                                                                | application/json                                                   |
| errors.PutVirtualReferenceNumbersUidUnlockUnprocessableEntityError | 422                                                                | application/json                                                   |
| errors.NewlineDefaultError                                         | 4XX, 5XX                                                           | \*/\*                                                              |