
# AgentRegistrationActiveResponse


## Properties

Name | Type
------------ | -------------
`agentId` | string
`apiKey` | string
`scopes` | Array&lt;string&gt;
`verified` | boolean
`status` | string
`ownerUserId` | string
`seatUsage` | any
`seatLimit` | any
`inviteEmail` | any
`inviteName` | any

## Example

```typescript
import type { AgentRegistrationActiveResponse } from ''

// TODO: Update the object below with actual values
const example = {
  "agentId": null,
  "apiKey": null,
  "scopes": null,
  "verified": null,
  "status": null,
  "ownerUserId": null,
  "seatUsage": null,
  "seatLimit": null,
  "inviteEmail": null,
  "inviteName": null,
} satisfies AgentRegistrationActiveResponse

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRegistrationActiveResponse
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


