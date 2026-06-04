# Products

## Overview

Products represent financial services available in your program. Discover onboarding requirements, prerequisites, and detailed product configurations.

**Endpoints:**

- GET [List Products: GET /products](https://developers.newline53.com/reference/get_products)
    
- GET [Get a single Product: GET /products/{uid}](https://developers.newline53.com/reference/get_products-uid)

The Products endpoint represents the financial products available to your Customers. It exposes the accounts, compliance, and Customer Profile Requirements necessary for your Customer to access the Product. For some programs, a customer must onboard one product before another product is made available. Newline will work with clients to define the required Product onboarding sequence as part of your Program.

Use the Products endpoint to view the Products available to your Program and the prerequisite information or actions that must be taken for a Customer to access the Product.

For more information about Newline's products and their utilization, please refer to the [Products Programs](https://developers.newline53.com/docs/product-programs) guides.

### Available Operations

* [list](#list) - List Products
* [get](#get) - Get a single Product

## list

Products filtered by the given parameters.


### Example Usage

<!-- UsageSnippet language="typescript" operationID="listProducts" method="get" path="/products" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.products.list({
    programUid: "pQtTCSXz57fuefzp",
  });

  console.log(result);
}

run();
```

### Standalone function

The standalone function version of this method:

```typescript
import { NewlineSDKCore } from "newline-ts-sdk/core.js";
import { productsList } from "newline-ts-sdk/funcs/products-list.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await productsList(newlineSDK, {
    programUid: "pQtTCSXz57fuefzp",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsList failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.ListProductsRequest](../../models/operations/list-products-request.md)                                                                                             | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.ListProductsResponse](../../models/operations/list-products-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |

## get

Retrieve overall status about a Product as well as its configuration, availability, and any associated metadata.

### Example Usage

<!-- UsageSnippet language="typescript" operationID="getProduct" method="get" path="/products/{uid}" -->
```typescript
import { NewlineSDK } from "newline-ts-sdk";

const newlineSDK = new NewlineSDK({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const result = await newlineSDK.products.get({
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
import { productsGet } from "newline-ts-sdk/funcs/products-get.js";

// Use `NewlineSDKCore` for best tree-shaking performance.
// You can create one instance of it to use across an application.
const newlineSDK = new NewlineSDKCore({
  security: {
    programUid: process.env["NEWLINE_PROGRAM_UID"] ?? "",
    hmacKey: process.env["NEWLINE_HMAC_KEY"] ?? "",
  },
});

async function run() {
  const res = await productsGet(newlineSDK, {
    uid: "<id>",
  });
  if (res.ok) {
    const { value: result } = res;
    console.log(result);
  } else {
    console.log("productsGet failed:", res.error);
  }
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetProductRequest](../../models/operations/get-product-request.md)                                                                                                 | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |
| `options.retries`                                                                                                                                                              | [RetryConfig](../../lib/utils/retryconfig.md)                                                                                                                                  | :heavy_minus_sign:                                                                                                                                                             | Enables retrying HTTP requests under certain failure conditions.                                                                                                               |

### Response

**Promise\<[operations.GetProductResponse](../../models/operations/get-product-response.md)\>**

### Errors

| Error Type                 | Status Code                | Content Type               |
| -------------------------- | -------------------------- | -------------------------- |
| errors.NewlineDefaultError | 4XX, 5XX                   | \*/\*                      |