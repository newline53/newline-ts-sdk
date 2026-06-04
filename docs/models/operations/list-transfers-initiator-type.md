# ListTransfersInitiatorType

The initiator_type declares the originator for the Transfer. If set to Customer, origination information is pulled from the supplied initiating_customer_uid. If set to Transmitter, origination information is required, provided in the transmitter object (see below). Defaults to Customer. Providing Transmitter information is the Client's responsibility, please review more details in our [Transfers guide](https://developers.newline53.com/docs/transfer#introduction-what-is-a-transfer).


## Example Usage

```typescript
import { ListTransfersInitiatorType } from "newline-ts-sdk/models/operations";

let value: ListTransfersInitiatorType = "customer";

// Open enum: unrecognized values are captured as Unrecognized<string>
```

## Values

```typescript
"customer" | "transmitter" | Unrecognized<string>
```