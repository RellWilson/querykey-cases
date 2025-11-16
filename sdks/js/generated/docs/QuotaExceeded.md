
# QuotaExceeded


## Properties

Name | Type
------------ | -------------
`error` | string
`message` | string
`group` | string
`plan` | string
`limit` | number
`remaining` | number
`resetAt` | Date

## Example

```typescript
import type { QuotaExceeded } from ''

// TODO: Update the object below with actual values
const example = {
  "error": quota_exceeded,
  "message": Daily quota exceeded for endpoint group,
  "group": cases_read,
  "plan": free,
  "limit": 200,
  "remaining": 0,
  "resetAt": null,
} satisfies QuotaExceeded

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QuotaExceeded
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


