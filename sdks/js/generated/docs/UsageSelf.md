
# UsageSelf


## Properties

Name | Type
------------ | -------------
`date` | string
`plan` | string
`limits` | { [key: string]: any; }
`usage` | [Array&lt;UsageSelfUsageInner&gt;](UsageSelfUsageInner.md)
`resetAt` | Date

## Example

```typescript
import type { UsageSelf } from ''

// TODO: Update the object below with actual values
const example = {
  "date": 2025-09-18,
  "plan": free,
  "limits": {"cases_read":200,"cases_write":25},
  "usage": null,
  "resetAt": null,
} satisfies UsageSelf

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as UsageSelf
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


