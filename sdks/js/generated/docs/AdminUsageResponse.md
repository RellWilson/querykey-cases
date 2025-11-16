
# AdminUsageResponse


## Properties

Name | Type
------------ | -------------
`date` | Date
`userId` | any
`groups` | [Array&lt;AdminUsageGroup&gt;](AdminUsageGroup.md)

## Example

```typescript
import type { AdminUsageResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "date": Mon Sep 29 19:00:00 CDT 2025,
  "userId": null,
  "groups": null,
} satisfies AdminUsageResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AdminUsageResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


