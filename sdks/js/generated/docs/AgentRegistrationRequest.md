
# AgentRegistrationRequest


## Properties

Name | Type
------------ | -------------
`challenge` | string
`publicKey` | string
`nonce` | [AgentRegistrationRequestNonce](AgentRegistrationRequestNonce.md)
`label` | any
`delegatedToken` | any
`owner` | [AgentRegistrationOwner](AgentRegistrationOwner.md)

## Example

```typescript
import type { AgentRegistrationRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "challenge": null,
  "publicKey": null,
  "nonce": null,
  "label": null,
  "delegatedToken": null,
  "owner": null,
} satisfies AgentRegistrationRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentRegistrationRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


