
# PendingAgentInvite


## Properties

Name | Type
------------ | -------------
`agentId` | string
`registrationId` | any
`label` | any
`inviteEmail` | string
`inviteName` | any
`status` | string
`inviteExpiresAt` | any
`createdAt` | any
`updatedAt` | any
`challengeDifficulty` | any
`metadata` | { [key: string]: any; }
`isExpired` | boolean
`resendCount` | number
`inviteLastSentAt` | any
`inviteLastSentBy` | [PendingAgentInviteInviteLastSentBy](PendingAgentInviteInviteLastSentBy.md)
`expiresInSeconds` | any

## Example

```typescript
import type { PendingAgentInvite } from ''

// TODO: Update the object below with actual values
const example = {
  "agentId": null,
  "registrationId": null,
  "label": null,
  "inviteEmail": null,
  "inviteName": null,
  "status": null,
  "inviteExpiresAt": null,
  "createdAt": null,
  "updatedAt": null,
  "challengeDifficulty": null,
  "metadata": null,
  "isExpired": null,
  "resendCount": null,
  "inviteLastSentAt": null,
  "inviteLastSentBy": null,
  "expiresInSeconds": null,
} satisfies PendingAgentInvite

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PendingAgentInvite
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


