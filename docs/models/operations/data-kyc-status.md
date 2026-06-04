# DataKycStatus

A value indicating the state of KYC/AML evaluation.


## Example Usage

```typescript
import { DataKycStatus } from "newline-ts-sdk/models/operations";

let value: DataKycStatus = "pre_verified";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual_review" | "approved" | "denied" | "pending_id_documents" | "pending_poa_documents" | "pending_idandpoa_documents" | "documents_provided" | "documents_rejected" | "retake_images" | "pre_verified" | Unrecognized<string>
```