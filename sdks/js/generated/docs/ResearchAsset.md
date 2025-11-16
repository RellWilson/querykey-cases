
# ResearchAsset


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`title` | string
`tierRequired` | string
`filePath` | string
`fileSizeBytes` | number
`checksumSha256` | string
`metadata` | any

## Example

```typescript
import type { ResearchAsset } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "title": null,
  "tierRequired": null,
  "filePath": null,
  "fileSizeBytes": null,
  "checksumSha256": null,
  "metadata": null,
} satisfies ResearchAsset

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ResearchAsset
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


