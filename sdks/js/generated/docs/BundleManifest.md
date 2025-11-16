
# BundleManifest


## Properties

Name | Type
------------ | -------------
`id` | string
`caseId` | string
`version` | number
`archiveFormat` | string
`checksumSha256` | string
`files` | [Array&lt;BundleFile&gt;](BundleFile.md)

## Example

```typescript
import type { BundleManifest } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "caseId": null,
  "version": null,
  "archiveFormat": null,
  "checksumSha256": null,
  "files": null,
} satisfies BundleManifest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as BundleManifest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


