
# AgentRegistrationPendingResponse


## Properties

Name | Type
------------ | -------------
`agentId` | string
`status` | string
`ownerEmail` | string
`inviteExpiresAt` | Date
`inviteDelivery` | string
`inviteToken` | any

## Example

```typescript
import type { AgentRegistrationPendingResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "agentId": null,
  "status": null,
  "ownerEmail": null,
  "inviteExpiresAt": null,
  "inviteDelivery": null,
  "inviteToken": null,
} satisfies AgentRegistrationPendingResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRegistrationPendingResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


