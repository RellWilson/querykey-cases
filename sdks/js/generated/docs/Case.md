
# Case


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`slug` | string
`summary` | string
`body` | any
`status` | string
`version` | number
`needsReview` | any
`tagsCsv` | any
`sourcesJson` | any

## Example

```typescript
import type { Case } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "slug": null,
  "summary": null,
  "body": null,
  "status": null,
  "version": null,
  "needsReview": null,
  "tagsCsv": null,
  "sourcesJson": null,
} satisfies Case

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Case
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


