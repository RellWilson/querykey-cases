
# ResearchPaperSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`title` | string
`summary` | string
`category` | string
`tierRequired` | string
`fileSizeBytes` | number
`published` | boolean
`publishedAt` | any
`releaseDate` | any
`checksumSha256` | string
`assetAvailable` | boolean

## Example

```typescript
import type { ResearchPaperSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "title": null,
  "summary": null,
  "category": null,
  "tierRequired": null,
  "fileSizeBytes": null,
  "published": null,
  "publishedAt": null,
  "releaseDate": null,
  "checksumSha256": null,
  "assetAvailable": null,
} satisfies ResearchPaperSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResearchPaperSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


