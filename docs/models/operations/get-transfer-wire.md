# GetTransferWire

Wire-specific information. Only present if the Transfer is a wire.


## Example Usage

```typescript
import { GetTransferWire } from "newline-ts-sdk/models/operations";

let value: GetTransferWire = {
  intermediaryBankAddress: {
    line1: "345 Def Ave",
    line2: "San Francisco",
    line3: "CA 94016",
    country: "US",
  },
  intermediaryBankName: "Fidelity Fiduciary Bank",
  intermediaryBankRoutingNumber: "923456789",
  wireTransmitter: {
    name: "Marge's Roofing Inc",
    transmitterIdentifier: "123456789012ABC",
    line1: "123 Abc St.",
    line2: "Boring, Oregon 97009",
    line3: null,
    country: "US",
  },
  wireInstructions: "Send ASAP",
};
```

## Fields

| Field                                                                                                                      | Type                                                                                                                       | Required                                                                                                                   | Description                                                                                                                | Example                                                                                                                    |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `intermediaryBankAddress`                                                                                                  | [operations.GetTransferIntermediaryBankAddress](../../models/operations/get-transfer-intermediary-bank-address.md)         | :heavy_minus_sign:                                                                                                         | Address of the intermediary bank. To be populated if an intermediary bank is required to execute the wire transfer.<br/>   | {<br/>"line1": "345 Def Ave",<br/>"line2": "San Francisco",<br/>"line3": "CA 94016",<br/>"country": "US"<br/>}             |
| `intermediaryBankName`                                                                                                     | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Name of the intermediary bank, when applicable. For wires only. Maximum 35 characters.<br/>                                | Fidelity Fiduciary Bank                                                                                                    |
| `intermediaryBankRoutingNumber`                                                                                            | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | The ABA routing number associated with the intermediary bank involved in the wire transfer<br/>                            | 923456789                                                                                                                  |
| `wireTransmitter`                                                                                                          | [operations.GetTransferWireTransmitter](../../models/operations/get-transfer-wire-transmitter.md)                          | :heavy_minus_sign:                                                                                                         | N/A                                                                                                                        |                                                                                                                            |
| `wireInstructions`                                                                                                         | *string*                                                                                                                   | :heavy_minus_sign:                                                                                                         | Additional details or instructions for the wire, issued to the recipient financial institution when the wire is executed.<br/> | Send ASAP                                                                                                                  |