
# AgentChallenge


## Properties

Name | Type
------------ | -------------
`challenge` | string
`difficulty` | number
`expiresAt` | Date
`inviteSupported` | boolean

## Example

```typescript
import type { AgentChallenge } from ''

// TODO: Update the object below with actual values
const example = {
  "challenge": 5c8f9f3a1b2c4d5e6f7081920a0b0c0d0e0f101112131415161718191a1b1c1d,
  "difficulty": 18,
  "expiresAt": 2025-10-03T18:25:43.511Z,
  "inviteSupported": true,
} satisfies AgentChallenge

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AgentChallenge
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


