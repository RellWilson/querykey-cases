# \AgentsAPI

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV1AgentsIdInviteCancelPost**](AgentsAPI.md#ApiV1AgentsIdInviteCancelPost) | **Post** /api/v1/agents/{id}/invite/cancel | Cancel a pending agent invite
[**ApiV1AgentsIdInviteResendPost**](AgentsAPI.md#ApiV1AgentsIdInviteResendPost) | **Post** /api/v1/agents/{id}/invite/resend | Resend a pending agent invite
[**ApiV1AgentsIdRevokePost**](AgentsAPI.md#ApiV1AgentsIdRevokePost) | **Post** /api/v1/agents/{id}/revoke | Revoke a registered agent
[**ApiV1AgentsPendingGet**](AgentsAPI.md#ApiV1AgentsPendingGet) | **Get** /api/v1/agents/pending | List pending agent invites
[**ApiV1RegistrationAgentPost**](AgentsAPI.md#ApiV1RegistrationAgentPost) | **Post** /api/v1/registration/agent | Validate PoW solution and register new agent
[**ApiV1RegistrationChallengeGet**](AgentsAPI.md#ApiV1RegistrationChallengeGet) | **Get** /api/v1/registration/challenge | Issue Proof-of-Work challenge for agent registration
[**ApiV1RegistrationDelegatedTokenPost**](AgentsAPI.md#ApiV1RegistrationDelegatedTokenPost) | **Post** /api/v1/registration/delegated-token | Issue single-use delegated registration token
[**ApiV1RegistrationInviteConfirmPost**](AgentsAPI.md#ApiV1RegistrationInviteConfirmPost) | **Post** /api/v1/registration/invite/confirm | Confirm an agent invite and activate ownership



## ApiV1AgentsIdInviteCancelPost

> AgentInviteCancelResponse ApiV1AgentsIdInviteCancelPost(ctx, id).ApiV1AgentsIdInviteCancelPostRequest(apiV1AgentsIdInviteCancelPostRequest).Execute()

Cancel a pending agent invite



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	apiV1AgentsIdInviteCancelPostRequest := *openapiclient.NewApiV1AgentsIdInviteCancelPostRequest() // ApiV1AgentsIdInviteCancelPostRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1AgentsIdInviteCancelPost(context.Background(), id).ApiV1AgentsIdInviteCancelPostRequest(apiV1AgentsIdInviteCancelPostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1AgentsIdInviteCancelPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1AgentsIdInviteCancelPost`: AgentInviteCancelResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1AgentsIdInviteCancelPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1AgentsIdInviteCancelPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **apiV1AgentsIdInviteCancelPostRequest** | [**ApiV1AgentsIdInviteCancelPostRequest**](ApiV1AgentsIdInviteCancelPostRequest.md) |  | 

### Return type

[**AgentInviteCancelResponse**](AgentInviteCancelResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1AgentsIdInviteResendPost

> AgentInviteResendResponse ApiV1AgentsIdInviteResendPost(ctx, id).Execute()

Resend a pending agent invite



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1AgentsIdInviteResendPost(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1AgentsIdInviteResendPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1AgentsIdInviteResendPost`: AgentInviteResendResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1AgentsIdInviteResendPost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1AgentsIdInviteResendPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**AgentInviteResendResponse**](AgentInviteResendResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1AgentsIdRevokePost

> AgentRevokeResponse ApiV1AgentsIdRevokePost(ctx, id).ApiV1AgentsIdRevokePostRequest(apiV1AgentsIdRevokePostRequest).Execute()

Revoke a registered agent



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	id := "38400000-8cf0-11bd-b23e-10b96e4ef00d" // string | 
	apiV1AgentsIdRevokePostRequest := *openapiclient.NewApiV1AgentsIdRevokePostRequest() // ApiV1AgentsIdRevokePostRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1AgentsIdRevokePost(context.Background(), id).ApiV1AgentsIdRevokePostRequest(apiV1AgentsIdRevokePostRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1AgentsIdRevokePost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1AgentsIdRevokePost`: AgentRevokeResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1AgentsIdRevokePost`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1AgentsIdRevokePostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **apiV1AgentsIdRevokePostRequest** | [**ApiV1AgentsIdRevokePostRequest**](ApiV1AgentsIdRevokePostRequest.md) |  | 

### Return type

[**AgentRevokeResponse**](AgentRevokeResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1AgentsPendingGet

> PendingAgentInvitesResponse ApiV1AgentsPendingGet(ctx).IncludeExpired(includeExpired).Email(email).Limit(limit).Offset(offset).Execute()

List pending agent invites



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	includeExpired := true // bool | Include invites that have already expired. (optional) (default to true)
	email := "email_example" // string | Restrict results to the provided invite email. (optional)
	limit := int32(56) // int32 | Page size (defaults to 50). (optional)
	offset := int32(56) // int32 | Offset into the pending invite list. (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1AgentsPendingGet(context.Background()).IncludeExpired(includeExpired).Email(email).Limit(limit).Offset(offset).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1AgentsPendingGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1AgentsPendingGet`: PendingAgentInvitesResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1AgentsPendingGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1AgentsPendingGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **includeExpired** | **bool** | Include invites that have already expired. | [default to true]
 **email** | **string** | Restrict results to the provided invite email. | 
 **limit** | **int32** | Page size (defaults to 50). | 
 **offset** | **int32** | Offset into the pending invite list. | 

### Return type

[**PendingAgentInvitesResponse**](PendingAgentInvitesResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1RegistrationAgentPost

> AgentRegistrationResponse ApiV1RegistrationAgentPost(ctx).AgentRegistrationRequest(agentRegistrationRequest).Execute()

Validate PoW solution and register new agent



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	agentRegistrationRequest := *openapiclient.NewAgentRegistrationRequest("Challenge_example", "PublicKey_example", openapiclient.AgentRegistrationRequest_nonce{Int32: new(int32)}) // AgentRegistrationRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1RegistrationAgentPost(context.Background()).AgentRegistrationRequest(agentRegistrationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1RegistrationAgentPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1RegistrationAgentPost`: AgentRegistrationResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1RegistrationAgentPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1RegistrationAgentPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentRegistrationRequest** | [**AgentRegistrationRequest**](AgentRegistrationRequest.md) |  | 

### Return type

[**AgentRegistrationResponse**](AgentRegistrationResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1RegistrationChallengeGet

> AgentChallenge ApiV1RegistrationChallengeGet(ctx).Difficulty(difficulty).Invite(invite).Execute()

Issue Proof-of-Work challenge for agent registration



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	difficulty := int32(56) // int32 | Optional difficulty override; final difficulty may be clamped by the server (optional)
	invite := true // bool | Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1RegistrationChallengeGet(context.Background()).Difficulty(difficulty).Invite(invite).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1RegistrationChallengeGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1RegistrationChallengeGet`: AgentChallenge
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1RegistrationChallengeGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1RegistrationChallengeGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **difficulty** | **int32** | Optional difficulty override; final difficulty may be clamped by the server | 
 **invite** | **bool** | Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session | 

### Return type

[**AgentChallenge**](AgentChallenge.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1RegistrationDelegatedTokenPost

> DelegatedTokenResponse ApiV1RegistrationDelegatedTokenPost(ctx).DelegatedTokenRequest(delegatedTokenRequest).Execute()

Issue single-use delegated registration token



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	delegatedTokenRequest := *openapiclient.NewDelegatedTokenRequest() // DelegatedTokenRequest |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1RegistrationDelegatedTokenPost(context.Background()).DelegatedTokenRequest(delegatedTokenRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1RegistrationDelegatedTokenPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1RegistrationDelegatedTokenPost`: DelegatedTokenResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1RegistrationDelegatedTokenPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1RegistrationDelegatedTokenPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegatedTokenRequest** | [**DelegatedTokenRequest**](DelegatedTokenRequest.md) |  | 

### Return type

[**DelegatedTokenResponse**](DelegatedTokenResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1RegistrationInviteConfirmPost

> AgentRegistrationActiveResponse ApiV1RegistrationInviteConfirmPost(ctx).AgentInviteConfirmationRequest(agentInviteConfirmationRequest).Execute()

Confirm an agent invite and activate ownership



### Example

```go
package main

import (
	"context"
	"fmt"
	"os"
	openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
	agentInviteConfirmationRequest := *openapiclient.NewAgentInviteConfirmationRequest("Token_example") // AgentInviteConfirmationRequest | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.AgentsAPI.ApiV1RegistrationInviteConfirmPost(context.Background()).AgentInviteConfirmationRequest(agentInviteConfirmationRequest).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `AgentsAPI.ApiV1RegistrationInviteConfirmPost``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1RegistrationInviteConfirmPost`: AgentRegistrationActiveResponse
	fmt.Fprintf(os.Stdout, "Response from `AgentsAPI.ApiV1RegistrationInviteConfirmPost`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1RegistrationInviteConfirmPostRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agentInviteConfirmationRequest** | [**AgentInviteConfirmationRequest**](AgentInviteConfirmationRequest.md) |  | 

### Return type

[**AgentRegistrationActiveResponse**](AgentRegistrationActiveResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

