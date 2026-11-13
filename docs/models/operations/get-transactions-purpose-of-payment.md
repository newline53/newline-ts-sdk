# GetTransactionsPurposeOfPayment

An optional code supplied when an instant payment Transfer is initiated, indicating the kind of transaction being sent. If supplied, it must be one of the approved codes listed below, otherwise the Transfer is rejected. Omit the field or send an empty string to leave it unset; when unset it is returned as an empty string. Only applies to Newline initiated instant payments; it is not populated for received instant payments.


## Example Usage

```typescript
import { GetTransactionsPurposeOfPayment } from "newline-ts-sdk/models/operations";

let value: GetTransactionsPurposeOfPayment = "PAYR";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"NOWS" | "GDDS" | "SCVE" | "INSC" | "INSM" | "INVS" | "PAYR" | "UBIL" | "PDEP" | "ACCT" | "CBLK" | "MP2P" | "TRAD" | Unrecognized<string>
```