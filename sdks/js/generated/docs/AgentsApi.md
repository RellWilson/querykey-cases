# AgentsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV1AgentsIdInviteCancelPost**](AgentsApi.md#apiv1agentsidinvitecancelpostoperation) | **POST** /api/v1/agents/{id}/invite/cancel | Cancel a pending agent invite |
| [**apiV1AgentsIdInviteResendPost**](AgentsApi.md#apiv1agentsidinviteresendpost) | **POST** /api/v1/agents/{id}/invite/resend | Resend a pending agent invite |
| [**apiV1AgentsIdRevokePost**](AgentsApi.md#apiv1agentsidrevokepostoperation) | **POST** /api/v1/agents/{id}/revoke | Revoke a registered agent |
| [**apiV1AgentsPendingGet**](AgentsApi.md#apiv1agentspendingget) | **GET** /api/v1/agents/pending | List pending agent invites |
| [**apiV1RegistrationAgentPost**](AgentsApi.md#apiv1registrationagentpost) | **POST** /api/v1/registration/agent | Validate PoW solution and register new agent |
| [**apiV1RegistrationChallengeGet**](AgentsApi.md#apiv1registrationchallengeget) | **GET** /api/v1/registration/challenge | Issue Proof-of-Work challenge for agent registration |
| [**apiV1RegistrationDelegatedTokenPost**](AgentsApi.md#apiv1registrationdelegatedtokenpost) | **POST** /api/v1/registration/delegated-token | Issue single-use delegated registration token |
| [**apiV1RegistrationInviteConfirmPost**](AgentsApi.md#apiv1registrationinviteconfirmpost) | **POST** /api/v1/registration/invite/confirm | Confirm an agent invite and activate ownership |



## apiV1AgentsIdInviteCancelPost

> AgentInviteCancelResponse apiV1AgentsIdInviteCancelPost(id, apiV1AgentsIdInviteCancelPostRequest)

Cancel a pending agent invite

Privileged operators or the invite recipient can cancel a pending invite, freeing the seat and recording the reason in metadata and trust telemetry.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1AgentsIdInviteCancelPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ApiV1AgentsIdInviteCancelPostRequest (optional)
    apiV1AgentsIdInviteCancelPostRequest: ...,
  } satisfies ApiV1AgentsIdInviteCancelPostOperationRequest;

  try {
    const data = await api.apiV1AgentsIdInviteCancelPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **apiV1AgentsIdInviteCancelPostRequest** | [ApiV1AgentsIdInviteCancelPostRequest](ApiV1AgentsIdInviteCancelPostRequest.md) |  | [Optional] |

### Return type

[**AgentInviteCancelResponse**](AgentInviteCancelResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invite cancelled |  -  |
| **400** | Invalid agent id |  -  |
| **401** | Authentication required |  -  |
| **403** | Forbidden |  -  |
| **404** | Pending invite not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1AgentsIdInviteResendPost

> AgentInviteResendResponse apiV1AgentsIdInviteResendPost(id)

Resend a pending agent invite

Privileged operators or the invite recipient can regenerate the invite token, extend expiry, and trigger the invite email delivery.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1AgentsIdInviteResendPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
  } satisfies ApiV1AgentsIdInviteResendPostRequest;

  try {
    const data = await api.apiV1AgentsIdInviteResendPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |

### Return type

[**AgentInviteResendResponse**](AgentInviteResendResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invite resent |  -  |
| **400** | Invalid agent id |  -  |
| **401** | Authentication required |  -  |
| **403** | Forbidden |  -  |
| **404** | Pending invite not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1AgentsIdRevokePost

> AgentRevokeResponse apiV1AgentsIdRevokePost(id, apiV1AgentsIdRevokePostRequest)

Revoke a registered agent

Owner accounts or administrators revoke an agent identity, reclaiming the seat and revoking the associated API key.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1AgentsIdRevokePostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // string
    id: 38400000-8cf0-11bd-b23e-10b96e4ef00d,
    // ApiV1AgentsIdRevokePostRequest (optional)
    apiV1AgentsIdRevokePostRequest: ...,
  } satisfies ApiV1AgentsIdRevokePostOperationRequest;

  try {
    const data = await api.apiV1AgentsIdRevokePost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **id** | `string` |  | [Defaults to `undefined`] |
| **apiV1AgentsIdRevokePostRequest** | [ApiV1AgentsIdRevokePostRequest](ApiV1AgentsIdRevokePostRequest.md) |  | [Optional] |

### Return type

[**AgentRevokeResponse**](AgentRevokeResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent revoked |  -  |
| **401** | Authentication required |  -  |
| **403** | Forbidden |  -  |
| **404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1AgentsPendingGet

> PendingAgentInvitesResponse apiV1AgentsPendingGet(includeExpired, email, limit, offset)

List pending agent invites

Operators or invite recipients list pending owner-bound agent invitations with optional filters for email, pagination, and expiry state.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1AgentsPendingGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // boolean | Include invites that have already expired. (optional)
    includeExpired: true,
    // string | Restrict results to the provided invite email. (optional)
    email: email_example,
    // number | Page size (defaults to 50). (optional)
    limit: 56,
    // number | Offset into the pending invite list. (optional)
    offset: 56,
  } satisfies ApiV1AgentsPendingGetRequest;

  try {
    const data = await api.apiV1AgentsPendingGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **includeExpired** | `boolean` | Include invites that have already expired. | [Optional] [Defaults to `true`] |
| **email** | `string` | Restrict results to the provided invite email. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Page size (defaults to 50). | [Optional] [Defaults to `undefined`] |
| **offset** | `number` | Offset into the pending invite list. | [Optional] [Defaults to `undefined`] |

### Return type

[**PendingAgentInvitesResponse**](PendingAgentInvitesResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Pending invites returned |  -  |
| **401** | Authentication required |  -  |
| **403** | Forbidden for principals without invite visibility |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1RegistrationAgentPost

> AgentRegistrationResponse apiV1RegistrationAgentPost(agentRegistrationRequest)

Validate PoW solution and register new agent

Completes the Proof-of-Work onboarding flow. Authenticated owners receive an agent key immediately when capacity allows; unauthenticated callers provide owner contact info and trigger an invite email for later confirmation.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1RegistrationAgentPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // AgentRegistrationRequest
    agentRegistrationRequest: ...,
  } satisfies ApiV1RegistrationAgentPostRequest;

  try {
    const data = await api.apiV1RegistrationAgentPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentRegistrationRequest** | [AgentRegistrationRequest](AgentRegistrationRequest.md) |  | |

### Return type

[**AgentRegistrationResponse**](AgentRegistrationResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Agent registered |  -  |
| **400** | Invalid payload or PoW solution |  -  |
| **401** | Authentication required |  -  |
| **403** | Seat capacity or plan constraints prevented registration |  -  |
| **404** | Challenge not found |  -  |
| **409** | Conflict: challenge already solved or public key registered |  -  |
| **429** | Registration rate limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1RegistrationChallengeGet

> AgentChallenge apiV1RegistrationChallengeGet(difficulty, invite)

Issue Proof-of-Work challenge for agent registration

Issue a short-lived challenge used to prove computational work before registering a new agent identity. Authenticated owners receive challenges tied to their account; unauthenticated callers must pass invite&#x3D;true to initiate the email invite flow.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1RegistrationChallengeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // number | Optional difficulty override; final difficulty may be clamped by the server (optional)
    difficulty: 56,
    // boolean | Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session (optional)
    invite: true,
  } satisfies ApiV1RegistrationChallengeGetRequest;

  try {
    const data = await api.apiV1RegistrationChallengeGet(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **difficulty** | `number` | Optional difficulty override; final difficulty may be clamped by the server | [Optional] [Defaults to `undefined`] |
| **invite** | `boolean` | Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session | [Optional] [Defaults to `undefined`] |

### Return type

[**AgentChallenge**](AgentChallenge.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Challenge issued |  -  |
| **400** | Invalid difficulty |  -  |
| **401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1RegistrationDelegatedTokenPost

> DelegatedTokenResponse apiV1RegistrationDelegatedTokenPost(delegatedTokenRequest)

Issue single-use delegated registration token

Authenticated owners can mint a short-lived delegated token that authorizes a CI/CD workflow to register an agent on their behalf.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1RegistrationDelegatedTokenPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // DelegatedTokenRequest (optional)
    delegatedTokenRequest: ...,
  } satisfies ApiV1RegistrationDelegatedTokenPostRequest;

  try {
    const data = await api.apiV1RegistrationDelegatedTokenPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **delegatedTokenRequest** | [DelegatedTokenRequest](DelegatedTokenRequest.md) |  | [Optional] |

### Return type

[**DelegatedTokenResponse**](DelegatedTokenResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Delegated token issued |  -  |
| **401** | Authentication required |  -  |
| **403** | Seat capacity or plan constraints prevented issuance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1RegistrationInviteConfirmPost

> AgentRegistrationActiveResponse apiV1RegistrationInviteConfirmPost(agentInviteConfirmationRequest)

Confirm an agent invite and activate ownership

Owners confirm invite tokens delivered via email, binding the pending agent to their account and provisioning credentials.

### Example

```ts
import {
  Configuration,
  AgentsApi,
} from '';
import type { ApiV1RegistrationInviteConfirmPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new AgentsApi(config);

  const body = {
    // AgentInviteConfirmationRequest
    agentInviteConfirmationRequest: ...,
  } satisfies ApiV1RegistrationInviteConfirmPostRequest;

  try {
    const data = await api.apiV1RegistrationInviteConfirmPost(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **agentInviteConfirmationRequest** | [AgentInviteConfirmationRequest](AgentInviteConfirmationRequest.md) |  | |

### Return type

[**AgentRegistrationActiveResponse**](AgentRegistrationActiveResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Invite confirmed and agent activated |  -  |
| **400** | Missing or invalid invite token |  -  |
| **401** | Authentication required |  -  |
| **403** | Seat capacity or plan constraints prevented activation |  -  |
| **404** | Invite token not found |  -  |
| **409** | Invite already claimed or agent inactive |  -  |
| **410** | Invite token expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

