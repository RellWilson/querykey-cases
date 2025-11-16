
# AgentInviteCancelResponse


## Properties

Name | Type
------------ | -------------
`agentId` | string
`registrationId` | any
`status` | string
`inviteEmail` | string
`inviteName` | any
`inviteLabel` | any
`inviteCancelled` | boolean
`reason` | any

## Example

```typescript
import type { AgentInviteCancelResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "agentId": null,
  "registrationId": null,
  "status": null,
  "inviteEmail": null,
  "inviteName": null,
  "inviteLabel": null,
  "inviteCancelled": null,
  "reason": null,
} satisfies AgentInviteCancelResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentInviteCancelResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


