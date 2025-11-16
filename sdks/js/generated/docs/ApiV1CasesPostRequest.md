
# ApiV1CasesPostRequest


## Properties

Name | Type
------------ | -------------
`title` | string
`slug` | string
`summary` | string
`body` | string
`tags` | Array&lt;string&gt;
`sources` | Array&lt;object&gt;

## Example

```typescript
import type { ApiV1CasesPostRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "title": null,
  "slug": null,
  "summary": null,
  "body": null,
  "tags": null,
  "sources": null,
} satisfies ApiV1CasesPostRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ApiV1CasesPostRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


