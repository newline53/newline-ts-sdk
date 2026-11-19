# GetCombinedTransfersUidSecCode

Standard Entry Class (SEC) code. Newline supports the following SEC codes: CCD, CIE, PPD, TEL, WEB, IAT. For more details, refer to our ACH guide's [section](https://developers.newline53.com/docs/ach#standard-entry-class-sec-codes) on SEC code use.


## Example Usage

```typescript
import { GetCombinedTransfersUidSecCode } from "newline-ts-sdk/models/operations";

let value: GetCombinedTransfersUidSecCode = "CIE";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"CCD" | "CIE" | "PPD" | "TEL" | "WEB" | "IAT" | Unrecognized<string>
```