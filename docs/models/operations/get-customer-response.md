# GetCustomerResponse

## Example Usage

```typescript
import { GetCustomerResponse } from "newline-ts-sdk/models/operations";

let value: GetCustomerResponse = {
  headers: {
    "key": [
      "<value 1>",
    ],
  },
  result: {
    uid: "EhrQZJNjCd79LLYq",
    externalUid: "partner-generated-id",
    activatedAt: new Date("2019-10-15T03:21:53.301Z"),
    createdAt: new Date("2019-10-14T03:21:53.301Z"),
    customerType: "primary",
    email: "olive.oyl@newline53.com",
    clientVerified: false,
    lockReason: null,
    lockedAt: null,
    piiConfirmedAt: new Date("2020-10-14T03:21:53.301Z"),
    poolUids: [
      "HiuQZJNjCd79LLYq, NoPJB9g9ZQTh5qMv",
    ],
    primaryCustomerUid: null,
    profileResponses: [
      {
        profileRequirement:
          "Please provide your approximate annual income in USD.",
        profileResponse: "Profile response",
        profileRequirementUid: "ptRLF7nQvy8VoqM1",
      },
    ],
    programUid: "kaxHFJnWvJxRJZxr",
    secondaryCustomerUids: [
      "464QyebpxbBNrGkX",
    ],
    totalBalance: "12345.67",
    archivedAt: null,
    details: {
      firstName: "Olive",
      middleName: "Olivia",
      lastName: "Oyl",
      suffix: "Jr.",
      phone: "5555551212",
      businessName: "Oliver's Olive Emporium",
      ssnLastFour: "3333",
      dob: new Date("1919-12-08"),
      address: {
        street1: "123 Abc St.",
        street2: "Suite 4A",
        city: "Chicago",
        state: "IL",
        postalCode: "60301",
      },
    },
  },
};
```

## Fields

| Field                                                                                       | Type                                                                                        | Required                                                                                    | Description                                                                                 |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `headers`                                                                                   | Record<string, *string*[]>                                                                  | :heavy_check_mark:                                                                          | N/A                                                                                         |
| `result`                                                                                    | [operations.GetCustomerResponseBody](../../models/operations/get-customer-response-body.md) | :heavy_check_mark:                                                                          | N/A                                                                                         |