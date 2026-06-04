# ListCustomersResponseBody

A list of Customers is returned

## Example Usage

```typescript
import { ListCustomersResponseBody } from "newline-ts-sdk/models/operations";

let value: ListCustomersResponseBody = {
  totalCount: 1,
  count: 1,
  limit: 100,
  offset: 0,
  data: [
    {
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
      },
    },
  ],
};
```

## Fields

| Field                                                                            | Type                                                                             | Required                                                                         | Description                                                                      | Example                                                                          |
| -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `totalCount`                                                                     | *number*                                                                         | :heavy_minus_sign:                                                               | Total count of items available to retrieve                                       | 1                                                                                |
| `count`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Number of items retrieved                                                        | 1                                                                                |
| `limit`                                                                          | *number*                                                                         | :heavy_minus_sign:                                                               | Maximum number of items to retrieve                                              | 100                                                                              |
| `offset`                                                                         | *number*                                                                         | :heavy_minus_sign:                                                               | Index of the first item to retrieve                                              | 0                                                                                |
| `data`                                                                           | [operations.ListCustomersData](../../models/operations/list-customers-data.md)[] | :heavy_minus_sign:                                                               | N/A                                                                              |                                                                                  |