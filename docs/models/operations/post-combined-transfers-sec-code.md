# PostCombinedTransfersSecCode

Standard Entry Class (SEC) code. Newline supports the following SEC codes: CCD, CIE, PPD, TEL, WEB. For more details, refer to our ACH guide's [section](https://developers.newline53.com/docs/ach#standard-entry-class-sec-codes) on SEC code use.


## Example Usage

```typescript
import { PostCombinedTransfersSecCode } from "newline-ts-sdk/models/operations";

let value: PostCombinedTransfersSecCode = "CIE";
```

## Values

```typescript
"CCD" | "CIE" | "PPD" | "TEL" | "WEB"
```