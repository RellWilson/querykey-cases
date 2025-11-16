
# QKeyCase

 QKey JSON representation (application/qkey)

## Properties

Name | Type
------------ | -------------
`title` | string
`slug` | string
`summary` | string
`body` | any
`version` | number
`tags` | Array&lt;string&gt;
`sources` | Array&lt;object&gt;
`status` | string

## Example

```typescript
import type { QKeyCase } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "slug": null,
  "summary": null,
  "body": null,
  "version": null,
  "tags": null,
  "sources": null,
  "status": null,
} satisfies QKeyCase

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as QKeyCase
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


