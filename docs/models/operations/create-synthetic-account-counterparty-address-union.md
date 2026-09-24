# CreateSyntheticAccountCounterpartyAddressUnion

Address of the business or individual who owns the external account. The accepted format depends on your program's wire address configuration (`unstructured`, `structured`, or `both`). Unstructured format uses `line1`/`line2`/`line3`/`country`. Structured format uses `building_number`/`street_name`/`city`/`postal_code`/`state`/`country` (with `city` and `country` required).



## Supported Types

### `operations.CreateSyntheticAccountCounterpartyAddressUnstructuredAddress`

```typescript
const value:
  operations.CreateSyntheticAccountCounterpartyAddressUnstructuredAddress = {
    line1: "123 Abc St.",
    line2: "Boring, Oregon 97009",
    line3: null,
    country: null,
  };
```

### `operations.CreateSyntheticAccountStructuredAddress`

```typescript
const value: operations.CreateSyntheticAccountStructuredAddress = {
  line1: "123 Main St",
  line2: "Suite 400",
  buildingNumber: "123",
  streetName: "Main St",
  city: "Cincinnati",
  state: "OH",
  postalCode: "45202",
  country: "US",
};
```

