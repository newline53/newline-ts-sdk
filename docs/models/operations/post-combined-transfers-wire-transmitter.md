# PostCombinedTransfersWireTransmitter

Information about the Transmitter. Must be provided if the `initiator_type` is `transmitter`. Includes the transmitter's name, identifier, and address. The accepted address format depends on your program's wire address configuration. For `unstructured` format: `line1` and `country` are required. For `structured` format: `city` and `country` are required.



## Supported Types

### `operations.WireTransmitterTransferUnstructuredAddress`

```typescript
const value: operations.WireTransmitterTransferUnstructuredAddress = {
  line1: "123 Abc St.",
  line2: "Boring, Oregon 97009",
  line3: null,
  country: "US",
  name: "Marge's Roofing Inc",
  transmitterIdentifier: "123456789012345",
};
```

### `operations.TransferStructuredAddress`

```typescript
const value: operations.TransferStructuredAddress = {
  line1: "123 Main St",
  line2: "Suite 400",
  buildingNumber: "123",
  streetName: "Main St",
  city: "Cincinnati",
  state: "OH",
  postalCode: "45202",
  country: "US",
  name: "Marge's Roofing Inc",
  transmitterIdentifier: "123456789012345",
};
```

