
# UsageSelfUsageInner


## Properties

Name | Type
------------ | -------------
`group` | string
`used` | number
`limit` | any
`remaining` | any

## Example

```typescript
import type { UsageSelfUsageInner } from ''

// TODO: Update the object below with actual values
const example = {
  "group": cases_read,
  "used": 7,
  "limit": 200,
  "remaining": 193,
} satisfies UsageSelfUsageInner

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSelfUsageInner
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


