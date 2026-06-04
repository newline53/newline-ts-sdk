# QueryParamKycStatus

Filter by KYC status. Multiple values are allowed e.g. `kyc_status[]=approved&kyc_status[]=under_review`.

## Example Usage

```typescript
import { QueryParamKycStatus } from "newline-ts-sdk/models/operations";

let value: QueryParamKycStatus = "pre_verified";
```

## Values

```typescript
"approved" | "denied" | "documents_provided" | "documents_rejected" | "manual_review" | "pending_id_documents" | "pending_poa_documents" | "pending_idandpoa_documents" | "retake_images" | "pre_verified"
```