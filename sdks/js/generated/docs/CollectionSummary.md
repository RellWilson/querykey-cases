
# CollectionSummary


## Properties

Name | Type
------------ | -------------
`id` | string
`slug` | string
`name` | string
`description` | string
`ecosystem` | string
`domain` | any
`version` | string
`tierRequired` | string
`caseCount` | number
`published` | boolean
`publishedAt` | any
`createdAt` | Date
`lastUpdated` | Date
`maintainers` | [Array&lt;CollectionSummaryMaintainersInner&gt;](CollectionSummaryMaintainersInner.md)
`manifestAvailable` | boolean

## Example

```typescript
import type { CollectionSummary } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "slug": null,
  "name": null,
  "description": null,
  "ecosystem": null,
  "domain": null,
  "version": null,
  "tierRequired": null,
  "caseCount": null,
  "published": null,
  "publishedAt": null,
  "createdAt": null,
  "lastUpdated": null,
  "maintainers": null,
  "manifestAvailable": null,
} satisfies CollectionSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CollectionSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


