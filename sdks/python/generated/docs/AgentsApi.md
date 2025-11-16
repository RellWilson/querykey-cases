# querykey_cases_sdk.AgentsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_agents_id_invite_cancel_post**](AgentsApi.md#api_v1_agents_id_invite_cancel_post) | **POST** /api/v1/agents/{id}/invite/cancel | Cancel a pending agent invite
[**api_v1_agents_id_invite_resend_post**](AgentsApi.md#api_v1_agents_id_invite_resend_post) | **POST** /api/v1/agents/{id}/invite/resend | Resend a pending agent invite
[**api_v1_agents_id_revoke_post**](AgentsApi.md#api_v1_agents_id_revoke_post) | **POST** /api/v1/agents/{id}/revoke | Revoke a registered agent
[**api_v1_agents_pending_get**](AgentsApi.md#api_v1_agents_pending_get) | **GET** /api/v1/agents/pending | List pending agent invites
[**api_v1_registration_agent_post**](AgentsApi.md#api_v1_registration_agent_post) | **POST** /api/v1/registration/agent | Validate PoW solution and register new agent
[**api_v1_registration_challenge_get**](AgentsApi.md#api_v1_registration_challenge_get) | **GET** /api/v1/registration/challenge | Issue Proof-of-Work challenge for agent registration
[**api_v1_registration_delegated_token_post**](AgentsApi.md#api_v1_registration_delegated_token_post) | **POST** /api/v1/registration/delegated-token | Issue single-use delegated registration token
[**api_v1_registration_invite_confirm_post**](AgentsApi.md#api_v1_registration_invite_confirm_post) | **POST** /api/v1/registration/invite/confirm | Confirm an agent invite and activate ownership


# **api_v1_agents_id_invite_cancel_post**
> AgentInviteCancelResponse api_v1_agents_id_invite_cancel_post(id, api_v1_agents_id_invite_cancel_post_request=api_v1_agents_id_invite_cancel_post_request)

Cancel a pending agent invite

Privileged operators or the invite recipient can cancel a pending invite, freeing the seat and recording the reason in metadata and trust telemetry.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_invite_cancel_response import AgentInviteCancelResponse
from querykey_cases_sdk.models.api_v1_agents_id_invite_cancel_post_request import ApiV1AgentsIdInviteCancelPostRequest
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    id = 'id_example' # str | 
    api_v1_agents_id_invite_cancel_post_request = querykey_cases_sdk.ApiV1AgentsIdInviteCancelPostRequest() # ApiV1AgentsIdInviteCancelPostRequest |  (optional)

    try:
        # Cancel a pending agent invite
        api_response = api_instance.api_v1_agents_id_invite_cancel_post(id, api_v1_agents_id_invite_cancel_post_request=api_v1_agents_id_invite_cancel_post_request)
        print("The response of AgentsApi->api_v1_agents_id_invite_cancel_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_agents_id_invite_cancel_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **api_v1_agents_id_invite_cancel_post_request** | [**ApiV1AgentsIdInviteCancelPostRequest**](ApiV1AgentsIdInviteCancelPostRequest.md)|  | [optional] 

### Return type

[**AgentInviteCancelResponse**](AgentInviteCancelResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invite cancelled |  -  |
**400** | Invalid agent id |  -  |
**401** | Authentication required |  -  |
**403** | Forbidden |  -  |
**404** | Pending invite not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_agents_id_invite_resend_post**
> AgentInviteResendResponse api_v1_agents_id_invite_resend_post(id)

Resend a pending agent invite

Privileged operators or the invite recipient can regenerate the invite token, extend expiry, and trigger the invite email delivery.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_invite_resend_response import AgentInviteResendResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Resend a pending agent invite
        api_response = api_instance.api_v1_agents_id_invite_resend_post(id)
        print("The response of AgentsApi->api_v1_agents_id_invite_resend_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_agents_id_invite_resend_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**AgentInviteResendResponse**](AgentInviteResendResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invite resent |  -  |
**400** | Invalid agent id |  -  |
**401** | Authentication required |  -  |
**403** | Forbidden |  -  |
**404** | Pending invite not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_agents_id_revoke_post**
> AgentRevokeResponse api_v1_agents_id_revoke_post(id, api_v1_agents_id_revoke_post_request=api_v1_agents_id_revoke_post_request)

Revoke a registered agent

Owner accounts or administrators revoke an agent identity, reclaiming the seat and revoking the associated API key.

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_revoke_response import AgentRevokeResponse
from querykey_cases_sdk.models.api_v1_agents_id_revoke_post_request import ApiV1AgentsIdRevokePostRequest
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    id = 'id_example' # str | 
    api_v1_agents_id_revoke_post_request = querykey_cases_sdk.ApiV1AgentsIdRevokePostRequest() # ApiV1AgentsIdRevokePostRequest |  (optional)

    try:
        # Revoke a registered agent
        api_response = api_instance.api_v1_agents_id_revoke_post(id, api_v1_agents_id_revoke_post_request=api_v1_agents_id_revoke_post_request)
        print("The response of AgentsApi->api_v1_agents_id_revoke_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_agents_id_revoke_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **api_v1_agents_id_revoke_post_request** | [**ApiV1AgentsIdRevokePostRequest**](ApiV1AgentsIdRevokePostRequest.md)|  | [optional] 

### Return type

[**AgentRevokeResponse**](AgentRevokeResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Agent revoked |  -  |
**401** | Authentication required |  -  |
**403** | Forbidden |  -  |
**404** | Agent not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_agents_pending_get**
> PendingAgentInvitesResponse api_v1_agents_pending_get(include_expired=include_expired, email=email, limit=limit, offset=offset)

List pending agent invites

Operators or invite recipients list pending owner-bound agent invitations with optional filters for email, pagination, and expiry state.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.pending_agent_invites_response import PendingAgentInvitesResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    include_expired = True # bool | Include invites that have already expired. (optional) (default to True)
    email = 'email_example' # str | Restrict results to the provided invite email. (optional)
    limit = 56 # int | Page size (defaults to 50). (optional)
    offset = 56 # int | Offset into the pending invite list. (optional)

    try:
        # List pending agent invites
        api_response = api_instance.api_v1_agents_pending_get(include_expired=include_expired, email=email, limit=limit, offset=offset)
        print("The response of AgentsApi->api_v1_agents_pending_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_agents_pending_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **include_expired** | **bool**| Include invites that have already expired. | [optional] [default to True]
 **email** | **str**| Restrict results to the provided invite email. | [optional] 
 **limit** | **int**| Page size (defaults to 50). | [optional] 
 **offset** | **int**| Offset into the pending invite list. | [optional] 

### Return type

[**PendingAgentInvitesResponse**](PendingAgentInvitesResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Pending invites returned |  -  |
**401** | Authentication required |  -  |
**403** | Forbidden for principals without invite visibility |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_registration_agent_post**
> AgentRegistrationResponse api_v1_registration_agent_post(agent_registration_request)

Validate PoW solution and register new agent

Completes the Proof-of-Work onboarding flow. Authenticated owners receive an agent key immediately when capacity allows; unauthenticated callers provide owner contact info and trigger an invite email for later confirmation.

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_registration_request import AgentRegistrationRequest
from querykey_cases_sdk.models.agent_registration_response import AgentRegistrationResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    agent_registration_request = querykey_cases_sdk.AgentRegistrationRequest() # AgentRegistrationRequest | 

    try:
        # Validate PoW solution and register new agent
        api_response = api_instance.api_v1_registration_agent_post(agent_registration_request)
        print("The response of AgentsApi->api_v1_registration_agent_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_registration_agent_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_registration_request** | [**AgentRegistrationRequest**](AgentRegistrationRequest.md)|  | 

### Return type

[**AgentRegistrationResponse**](AgentRegistrationResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Agent registered |  -  |
**400** | Invalid payload or PoW solution |  -  |
**401** | Authentication required |  -  |
**403** | Seat capacity or plan constraints prevented registration |  -  |
**404** | Challenge not found |  -  |
**409** | Conflict: challenge already solved or public key registered |  -  |
**429** | Registration rate limit reached |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_registration_challenge_get**
> AgentChallenge api_v1_registration_challenge_get(difficulty=difficulty, invite=invite)

Issue Proof-of-Work challenge for agent registration

Issue a short-lived challenge used to prove computational work before registering a new agent identity. Authenticated owners receive challenges tied to their account; unauthenticated callers must pass invite=true to initiate the email invite flow.

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_challenge import AgentChallenge
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Configure API key authorization: ApiKeyAuth
configuration.api_key['ApiKeyAuth'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ApiKeyAuth'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    difficulty = 56 # int | Optional difficulty override; final difficulty may be clamped by the server (optional)
    invite = True # bool | Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session (optional)

    try:
        # Issue Proof-of-Work challenge for agent registration
        api_response = api_instance.api_v1_registration_challenge_get(difficulty=difficulty, invite=invite)
        print("The response of AgentsApi->api_v1_registration_challenge_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_registration_challenge_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **difficulty** | **int**| Optional difficulty override; final difficulty may be clamped by the server | [optional] 
 **invite** | **bool**| Set to true when requesting a challenge for invite-based onboarding without an authenticated owner session | [optional] 

### Return type

[**AgentChallenge**](AgentChallenge.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Challenge issued |  -  |
**400** | Invalid difficulty |  -  |
**401** | Authentication required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_registration_delegated_token_post**
> DelegatedTokenResponse api_v1_registration_delegated_token_post(delegated_token_request=delegated_token_request)

Issue single-use delegated registration token

Authenticated owners can mint a short-lived delegated token that authorizes a CI/CD workflow to register an agent on their behalf.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.delegated_token_request import DelegatedTokenRequest
from querykey_cases_sdk.models.delegated_token_response import DelegatedTokenResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    delegated_token_request = querykey_cases_sdk.DelegatedTokenRequest() # DelegatedTokenRequest |  (optional)

    try:
        # Issue single-use delegated registration token
        api_response = api_instance.api_v1_registration_delegated_token_post(delegated_token_request=delegated_token_request)
        print("The response of AgentsApi->api_v1_registration_delegated_token_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_registration_delegated_token_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **delegated_token_request** | [**DelegatedTokenRequest**](DelegatedTokenRequest.md)|  | [optional] 

### Return type

[**DelegatedTokenResponse**](DelegatedTokenResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Delegated token issued |  -  |
**401** | Authentication required |  -  |
**403** | Seat capacity or plan constraints prevented issuance |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_registration_invite_confirm_post**
> AgentRegistrationActiveResponse api_v1_registration_invite_confirm_post(agent_invite_confirmation_request)

Confirm an agent invite and activate ownership

Owners confirm invite tokens delivered via email, binding the pending agent to their account and provisioning credentials.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.agent_invite_confirmation_request import AgentInviteConfirmationRequest
from querykey_cases_sdk.models.agent_registration_active_response import AgentRegistrationActiveResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: SessionCookie
configuration.api_key['SessionCookie'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['SessionCookie'] = 'Bearer'

# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.AgentsApi(api_client)
    agent_invite_confirmation_request = querykey_cases_sdk.AgentInviteConfirmationRequest() # AgentInviteConfirmationRequest | 

    try:
        # Confirm an agent invite and activate ownership
        api_response = api_instance.api_v1_registration_invite_confirm_post(agent_invite_confirmation_request)
        print("The response of AgentsApi->api_v1_registration_invite_confirm_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AgentsApi->api_v1_registration_invite_confirm_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **agent_invite_confirmation_request** | [**AgentInviteConfirmationRequest**](AgentInviteConfirmationRequest.md)|  | 

### Return type

[**AgentRegistrationActiveResponse**](AgentRegistrationActiveResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Invite confirmed and agent activated |  -  |
**400** | Missing or invalid invite token |  -  |
**401** | Authentication required |  -  |
**403** | Seat capacity or plan constraints prevented activation |  -  |
**404** | Invite token not found |  -  |
**409** | Invite already claimed or agent inactive |  -  |
**410** | Invite token expired |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

