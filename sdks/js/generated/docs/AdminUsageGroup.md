
# AdminUsageGroup


## Properties

Name | Type
------------ | -------------
`endpointGroup` | string
`count` | number
`userId` | any
`total` | any

## Example

```typescript
import type { AdminUsageGroup } from ''

// TODO: Update the object below with actual values
const example = {
  "endpointGroup": cases_read,
  "count": 128,
  "userId": d5d8a6cf-3fef-4ea8-8d76-0a038c722c5b,
  "total": 512,
} satisfies AdminUsageGroup

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUsageGroup
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


