# DeleteCustomerKycStatus

A value indicating the state of KYC/AML evaluation.


## Example Usage

```typescript
import { DeleteCustomerKycStatus } from "newline-ts-sdk/models/operations";

let value: DeleteCustomerKycStatus = "documents_rejected";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"manual_review" | "approved" | "denied" | "pending_id_documents" | "pending_poa_documents" | "pending_idandpoa_documents" | "documents_provided" | "documents_rejected" | "retake_images" | "pre_verified" | Unrecognized<string>
```