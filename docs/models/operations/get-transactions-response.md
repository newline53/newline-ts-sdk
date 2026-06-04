# GetTransactionsResponse

## Example Usage

```typescript
import { GetTransactionsResponse } from "newline-ts-sdk/models/operations";

let value: GetTransactionsResponse = {
  headers: {
    "key": [
      "<value 1>",
      "<value 2>",
    ],
  },
  result: {
    totalCount: 1,
    count: 1,
    limit: 100,
    offset: 0,
    data: [
      {
        uid: "EhrQZJNjCd79LLYq",
        id: 233,
        adjustmentUid: "rLS9K7uqqgdEqBu4",
        customerUid: "6UYRjzgguXjjKDtK",
        createdAt: new Date("2019-10-14T03:21:53.301Z"),
        custodialAccountUids: [
          "[\"66gso857LyQWC6XN\",\"Gw4gr1T81YrvLT6M\"]",
        ],
        description:
          "Transfer from \"Clothing Branding installation\" to \"deposit architect hack\"",
        destinationSyntheticAccountUid: "exMDShw6yM3NHLYV",
        initialActionAt: new Date("2019-10-14T03:21:53.301Z"),
        netAsset: "positive",
        returnUid: "Fnf9cbheYhkTkais",
        settledAt: new Date("2019-10-17T00:01:53.682Z"),
        settledIndex: 23,
        sourceSyntheticAccountUid: "4XkJnsfHsuqrxmeX",
        statementPostedAt: new Date("2019-10-17T00:01:53.682Z"),
        status: "settled",
        transactionBatchUid: "4",
        transactionEventUids: [
          "[\"MB2yqBrm3c4bUbou\",\"qCEEyGQw73Ajn3WZ\"]",
        ],
        transferUid: "rLS9K7uqqgdEqBu4",
        type: "ach",
        usDollarAmount: "12.34",
        virtualReferenceNumberUid: "<id>",
        authorization: {
          authorizationFinalizedAt: new Date("2024-10-09T00:12:53.729Z"),
          authorizationRequiredBy: new Date("2024-10-10T00:18:53.729Z"),
          authorizationStatus: "client_denied",
          deniedMemo: "denied memo",
          deniedReason: "debit_limit_exceeded",
        },
        instantPayment: {
          networkTransactionId: "ca5690da-f0f4-4ca1-acb0-1edb1ae41bd3",
          network: "fednow",
          failureCode: "ERR100",
          failureReason: "Account number invalid or missing",
          counterpartyName: "Marge's Roofing Inc",
          counterpartyBankName: "East West Regional Bank",
          counterpartyBankRoutingNumber: "123456789",
          counterpartyAccountNumberLastFour: "3345",
          paymentId: "BayleeStacy",
          originalEndToEndId: "null",
          transmitterName: "Marge's Roofing Inc",
          initiatingPartyName: "Marge's Roofing Inc",
          instantPaymentTransmitter: {
            name: "Marthas Bank",
            streetNumber: "123abc",
            street1: "Abc St.",
            city: "Chicago",
            state: "IL",
            postalCode: "60301",
            country: null,
          },
          counterpartyBankAddress: null,
        },
        wire: {
          counterpartyName: "Marge's Roofing Inc",
          counterpartyBankAddress: {
            line1: "123 Abc St.",
            line2: "Boring, Oregon 97009",
            line3: "<value>",
          },
          counterpartyBankName: "East West Regional Bank",
          counterpartyBankRoutingNumber: "123456789",
          intermediaryBankAddress: {
            line1: "345 Def Ave",
            line2: "San Francisco",
            line3: "CA 94016",
            country: "US",
          },
          intermediaryBankName: "Fidelity Fiduciary Bank",
          intermediaryBankRoutingNumber: "923456789",
          imad: "20220123ABCDEFGH123456",
          bankToBankInfo: "/DAS/REF:55555ZZ000ZZ",
          originatorAccountNumberLastFour: "1234",
        },
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
          transferTraceId: "A1Z2b3y4c5x6DW78",
          originatorRoutingNumber: "123456789",
          iat: {
            foreignExchangeIndicator: "FF",
            foreignExchangeReferenceIndicator: "3",
            isoDestinationCountryCode: "US",
            isoOriginatingCurrencyCode: "USD",
            isoDestinationCurrencyCode: "USD",
            transactionCode: "22",
            transactionTypeCode: "MIS",
            originatorStreetAddress: "410 TERRY AVENUE NORTH",
            originatorCityStateProvince: "SEATTLE*WA",
            originatorCountryPostalCode: "US*98109",
            odfiName: "BANK OF AMERICA NA",
            odfiIdentificationNumberQualifier: "01",
            odfiId: "121000358",
            odfiBranchCountryCode: "US",
            rdfiName: "FIFTH THIRD BANK NATIONAL ASSOCIA",
            rdfiIdentificationNumberQualifier: "01",
            rdfiId: "071919133",
            rdfiBranchCountryCode: "US",
            counterpartyStreetAddress: "228 S BURNS",
            counterpartyCityStateProvince: "INDEPEDENCE*KS",
            counterpartyCountryPostalCode: "US*67301",
            paymentRelatedInformation1:
              "NTE*ADD*FCS003348198932 PAYMENT-NUM  351380\\NTE*ADD*601 POP GOODS AND SERVICES",
            foreignCorrespondentBanks: [
              {
                name: "BANK OF AMERICA CANADA",
                idNumberQualifier: "01",
                idNumber: "121000358",
                branchCountryCode: "CA",
              },
            ],
          },
        },
      },
    ],
  },
};
```

## Fields

| Field                                                                                               | Type                                                                                                | Required                                                                                            | Description                                                                                         |
| --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `headers`                                                                                           | Record<string, *string*[]>                                                                          | :heavy_check_mark:                                                                                  | N/A                                                                                                 |
| `result`                                                                                            | [operations.GetTransactionsResponseBody](../../models/operations/get-transactions-response-body.md) | :heavy_check_mark:                                                                                  | N/A                                                                                                 |