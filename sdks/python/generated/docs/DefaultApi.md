# querykey_cases_sdk.DefaultApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_admin_agent_id_exempt_audit_get**](DefaultApi.md#api_admin_agent_id_exempt_audit_get) | **GET** /api/admin/agent/{id}/exempt/audit | Get full audit history for agent exemption toggles
[**api_admin_agent_id_exempt_post**](DefaultApi.md#api_admin_agent_id_exempt_post) | **POST** /api/admin/agent/{id}/exempt | Set or clear agent exempt flag (admin-only)
[**api_admin_agent_id_get**](DefaultApi.md#api_admin_agent_id_get) | **GET** /api/admin/agent/{id} | Get agent details and recent exempt audit events
[**api_admin_cases_get**](DefaultApi.md#api_admin_cases_get) | **GET** /api/admin/cases | Admin list cases (recent)
[**api_admin_reload_config_post**](DefaultApi.md#api_admin_reload_config_post) | **POST** /api/admin/reload-config | Reload plan &amp; quota config
[**api_admin_usage_get**](DefaultApi.md#api_admin_usage_get) | **GET** /api/admin/usage | Admin usage aggregate (today or ?day&#x3D;YYYY-MM-DD, optional ?user_id&#x3D;UUID)
[**api_auth_api_keys_get**](DefaultApi.md#api_auth_api_keys_get) | **GET** /api/auth/api-keys | List API keys
[**api_auth_api_keys_id_delete**](DefaultApi.md#api_auth_api_keys_id_delete) | **DELETE** /api/auth/api-keys/{id} | Soft revoke API key
[**api_auth_api_keys_id_post**](DefaultApi.md#api_auth_api_keys_id_post) | **POST** /api/auth/api-keys/{id} | Rotate API key (alias: /rotate)
[**api_auth_api_keys_id_rotate_post**](DefaultApi.md#api_auth_api_keys_id_rotate_post) | **POST** /api/auth/api-keys/{id}/rotate | Rotate API key
[**api_auth_api_keys_post**](DefaultApi.md#api_auth_api_keys_post) | **POST** /api/auth/api-keys | Create API key
[**api_auth_login_post**](DefaultApi.md#api_auth_login_post) | **POST** /api/auth/login | Login (with lockout)
[**api_auth_logout_post**](DefaultApi.md#api_auth_logout_post) | **POST** /api/auth/logout | Logout
[**api_auth_me_get**](DefaultApi.md#api_auth_me_get) | **GET** /api/auth/me | Session info
[**api_auth_register_post**](DefaultApi.md#api_auth_register_post) | **POST** /api/auth/register | Register user
[**api_billing_checkout_post**](DefaultApi.md#api_billing_checkout_post) | **POST** /api/billing/checkout | Create checkout session (mock if no Stripe)
[**api_billing_portal_get**](DefaultApi.md#api_billing_portal_get) | **GET** /api/billing/portal | Customer portal link (mock if no Stripe)
[**api_billing_webhook_post**](DefaultApi.md#api_billing_webhook_post) | **POST** /api/billing/webhook | Billing webhook (Stripe events)
[**api_entitlement_test_write_get**](DefaultApi.md#api_entitlement_test_write_get) | **GET** /api/entitlement/test-write | Sample plan-gated endpoint
[**api_get**](DefaultApi.md#api_get) | **GET** /api/ | Capability descriptor
[**api_usage_me_get**](DefaultApi.md#api_usage_me_get) | **GET** /api/usage/me | Today&#39;s usage &amp; plan limits for authenticated user
[**api_v1_cases_get**](DefaultApi.md#api_v1_cases_get) | **GET** /api/v1/cases | List/search published cases
[**api_v1_cases_id_get**](DefaultApi.md#api_v1_cases_id_get) | **GET** /api/v1/cases/{id} | Get case by id
[**api_v1_cases_id_publish_post**](DefaultApi.md#api_v1_cases_id_publish_post) | **POST** /api/v1/cases/{id}/publish | Publish case
[**api_v1_cases_id_put**](DefaultApi.md#api_v1_cases_id_put) | **PUT** /api/v1/cases/{id} | Update draft/review case
[**api_v1_cases_id_submit_post**](DefaultApi.md#api_v1_cases_id_submit_post) | **POST** /api/v1/cases/{id}/submit | Submit draft for review
[**api_v1_cases_id_suggest_post**](DefaultApi.md#api_v1_cases_id_suggest_post) | **POST** /api/v1/cases/{id}/suggest | Submit a suggestion to improve a case
[**api_v1_cases_id_versions_get**](DefaultApi.md#api_v1_cases_id_versions_get) | **GET** /api/v1/cases/{id}/versions | List versions by case id
[**api_v1_cases_id_versions_v_diff_w_get**](DefaultApi.md#api_v1_cases_id_versions_v_diff_w_get) | **GET** /api/v1/cases/{id}/versions/{v}/diff/{w} | Diff two case versions
[**api_v1_cases_mine_get**](DefaultApi.md#api_v1_cases_mine_get) | **GET** /api/v1/cases/mine | List my published cases
[**api_v1_cases_post**](DefaultApi.md#api_v1_cases_post) | **POST** /api/v1/cases | Create draft case
[**api_v1_cases_search_get**](DefaultApi.md#api_v1_cases_search_get) | **GET** /api/v1/cases/search | Search published cases (alias)
[**api_v1_cases_slug_slug_get**](DefaultApi.md#api_v1_cases_slug_slug_get) | **GET** /api/v1/cases/slug/{slug} | Get case by slug (JSON or QKey)
[**api_v1_cases_slug_slug_versions_get**](DefaultApi.md#api_v1_cases_slug_slug_versions_get) | **GET** /api/v1/cases/slug/{slug}/versions | List versions by slug
[**healthz_auth_get**](DefaultApi.md#healthz_auth_get) | **GET** /healthz/auth | Auth subsystem health
[**healthz_get**](DefaultApi.md#healthz_get) | **GET** /healthz | Health check
[**openapi_json_get**](DefaultApi.md#openapi_json_get) | **GET** /openapi.json | Fetch OpenAPI spec (ETag)


# **api_admin_agent_id_exempt_audit_get**
> api_admin_agent_id_exempt_audit_get(id)

Get full audit history for agent exemption toggles

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get full audit history for agent exemption toggles
        api_instance.api_admin_agent_id_exempt_audit_get(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_agent_id_exempt_audit_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Audit list |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_admin_agent_id_exempt_post**
> api_admin_agent_id_exempt_post(id, api_admin_agent_id_exempt_post_request)

Set or clear agent exempt flag (admin-only)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_admin_agent_id_exempt_post_request import ApiAdminAgentIdExemptPostRequest
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 
    api_admin_agent_id_exempt_post_request = querykey_cases_sdk.ApiAdminAgentIdExemptPostRequest() # ApiAdminAgentIdExemptPostRequest | 

    try:
        # Set or clear agent exempt flag (admin-only)
        api_instance.api_admin_agent_id_exempt_post(id, api_admin_agent_id_exempt_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_agent_id_exempt_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **api_admin_agent_id_exempt_post_request** | [**ApiAdminAgentIdExemptPostRequest**](ApiAdminAgentIdExemptPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Exempt toggled |  -  |
**400** | Bad request |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_admin_agent_id_get**
> api_admin_agent_id_get(id)

Get agent details and recent exempt audit events

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get agent details and recent exempt audit events
        api_instance.api_admin_agent_id_get(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_agent_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Agent details and audits |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_admin_cases_get**
> api_admin_cases_get()

Admin list cases (recent)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Admin list cases (recent)
        api_instance.api_admin_cases_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_cases_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cases listed |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_admin_reload_config_post**
> api_admin_reload_config_post()

Reload plan & quota config

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Reload plan & quota config
        api_instance.api_admin_reload_config_post()
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_reload_config_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Config reloaded |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_admin_usage_get**
> AdminUsageResponse api_admin_usage_get(day=day, user_id=user_id)

Admin usage aggregate (today or ?day=YYYY-MM-DD, optional ?user_id=UUID)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.models.admin_usage_response import AdminUsageResponse
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    day = 'day_example' # str | Date in YYYY-MM-DD format (optional)
    user_id = 'user_id_example' # str | Filter results to a single user id (optional)

    try:
        # Admin usage aggregate (today or ?day=YYYY-MM-DD, optional ?user_id=UUID)
        api_response = api_instance.api_admin_usage_get(day=day, user_id=user_id)
        print("The response of DefaultApi->api_admin_usage_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_admin_usage_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **day** | **str**| Date in YYYY-MM-DD format | [optional] 
 **user_id** | **str**| Filter results to a single user id | [optional] 

### Return type

[**AdminUsageResponse**](AdminUsageResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Aggregated usage |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_api_keys_get**
> ApiAuthApiKeysGet200Response api_auth_api_keys_get()

List API keys

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_auth_api_keys_get200_response import ApiAuthApiKeysGet200Response
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # List API keys
        api_response = api_instance.api_auth_api_keys_get()
        print("The response of DefaultApi->api_auth_api_keys_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_api_keys_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiAuthApiKeysGet200Response**](ApiAuthApiKeysGet200Response.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List returned |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_api_keys_id_delete**
> api_auth_api_keys_id_delete(id)

Soft revoke API key

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Soft revoke API key
        api_instance.api_auth_api_keys_id_delete(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_api_keys_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Revoked (soft) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_api_keys_id_post**
> api_auth_api_keys_id_post()

Rotate API key (alias: /rotate)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Rotate API key (alias: /rotate)
        api_instance.api_auth_api_keys_id_post()
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_api_keys_id_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**405** | Use /rotate subresource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_api_keys_id_rotate_post**
> api_auth_api_keys_id_rotate_post(id)

Rotate API key

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Rotate API key
        api_instance.api_auth_api_keys_id_rotate_post(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_api_keys_id_rotate_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Rotated - returns new secret |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_api_keys_post**
> ApiAuthApiKeysPost201Response api_auth_api_keys_post(api_auth_api_keys_post_request=api_auth_api_keys_post_request)

Create API key

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_auth_api_keys_post201_response import ApiAuthApiKeysPost201Response
from querykey_cases_sdk.models.api_auth_api_keys_post_request import ApiAuthApiKeysPostRequest
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    api_auth_api_keys_post_request = querykey_cases_sdk.ApiAuthApiKeysPostRequest() # ApiAuthApiKeysPostRequest |  (optional)

    try:
        # Create API key
        api_response = api_instance.api_auth_api_keys_post(api_auth_api_keys_post_request=api_auth_api_keys_post_request)
        print("The response of DefaultApi->api_auth_api_keys_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_api_keys_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_auth_api_keys_post_request** | [**ApiAuthApiKeysPostRequest**](ApiAuthApiKeysPostRequest.md)|  | [optional] 

### Return type

[**ApiAuthApiKeysPost201Response**](ApiAuthApiKeysPost201Response.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Key created |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_login_post**
> api_auth_login_post(api_auth_register_post_request)

Login (with lockout)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_auth_register_post_request import ApiAuthRegisterPostRequest
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    api_auth_register_post_request = querykey_cases_sdk.ApiAuthRegisterPostRequest() # ApiAuthRegisterPostRequest | 

    try:
        # Login (with lockout)
        api_instance.api_auth_login_post(api_auth_register_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_login_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_auth_register_post_request** | [**ApiAuthRegisterPostRequest**](ApiAuthRegisterPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Session established |  -  |
**401** | Invalid credentials |  -  |
**423** | Account temporarily locked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_logout_post**
> api_auth_logout_post()

Logout

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Logout
        api_instance.api_auth_logout_post()
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_logout_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Logged out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_me_get**
> api_auth_me_get()

Session info

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Session info
        api_instance.api_auth_me_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_me_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Current user |  -  |
**401** | Not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_auth_register_post**
> api_auth_register_post(api_auth_register_post_request)

Register user

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_auth_register_post_request import ApiAuthRegisterPostRequest
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    api_auth_register_post_request = querykey_cases_sdk.ApiAuthRegisterPostRequest() # ApiAuthRegisterPostRequest | 

    try:
        # Register user
        api_instance.api_auth_register_post(api_auth_register_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_auth_register_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_auth_register_post_request** | [**ApiAuthRegisterPostRequest**](ApiAuthRegisterPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Registered |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_billing_checkout_post**
> api_billing_checkout_post(api_billing_checkout_post_request)

Create checkout session (mock if no Stripe)

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_billing_checkout_post_request import ApiBillingCheckoutPostRequest
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    api_billing_checkout_post_request = querykey_cases_sdk.ApiBillingCheckoutPostRequest() # ApiBillingCheckoutPostRequest | 

    try:
        # Create checkout session (mock if no Stripe)
        api_instance.api_billing_checkout_post(api_billing_checkout_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_billing_checkout_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_billing_checkout_post_request** | [**ApiBillingCheckoutPostRequest**](ApiBillingCheckoutPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Checkout URL |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_billing_portal_get**
> api_billing_portal_get()

Customer portal link (mock if no Stripe)

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Customer portal link (mock if no Stripe)
        api_instance.api_billing_portal_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_billing_portal_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Portal URL |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_billing_webhook_post**
> api_billing_webhook_post()

Billing webhook (Stripe events)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Billing webhook (Stripe events)
        api_instance.api_billing_webhook_post()
    except Exception as e:
        print("Exception when calling DefaultApi->api_billing_webhook_post: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Processed &amp; verified |  -  |
**202** | Received but ignored (not allowlisted) |  -  |
**400** | Signature invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_entitlement_test_write_get**
> api_entitlement_test_write_get()

Sample plan-gated endpoint

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Sample plan-gated endpoint
        api_instance.api_entitlement_test_write_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_entitlement_test_write_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Allowed |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_get**
> api_get()

Capability descriptor

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Capability descriptor
        api_instance.api_get()
    except Exception as e:
        print("Exception when calling DefaultApi->api_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Capabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_usage_me_get**
> UsageSelf api_usage_me_get()

Today's usage & plan limits for authenticated user

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.usage_self import UsageSelf
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Today's usage & plan limits for authenticated user
        api_response = api_instance.api_usage_me_get()
        print("The response of DefaultApi->api_usage_me_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->api_usage_me_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**UsageSelf**](UsageSelf.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Usage detail |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_get**
> api_v1_cases_get(q=q, page=page, limit=limit)

List/search published cases

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    q = 'q_example' # str |  (optional)
    page = 56 # int |  (optional)
    limit = 56 # int |  (optional)

    try:
        # List/search published cases
        api_instance.api_v1_cases_get(q=q, page=page, limit=limit)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**|  | [optional] 
 **page** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Cases list |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_get**
> api_v1_cases_id_get(id)

Get case by id

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get case by id
        api_instance.api_v1_cases_id_get(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case |  -  |
**401** | Auth required for unpublished |  -  |
**403** | Forbidden for unpublished |  -  |
**404** | Not found |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_publish_post**
> api_v1_cases_id_publish_post(id)

Publish case

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Publish case
        api_instance.api_v1_cases_id_publish_post(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_publish_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Published |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_put**
> api_v1_cases_id_put(id, api_v1_cases_id_put_request)

Update draft/review case

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_v1_cases_id_put_request import ApiV1CasesIdPutRequest
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 
    api_v1_cases_id_put_request = querykey_cases_sdk.ApiV1CasesIdPutRequest() # ApiV1CasesIdPutRequest | 

    try:
        # Update draft/review case
        api_instance.api_v1_cases_id_put(id, api_v1_cases_id_put_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **api_v1_cases_id_put_request** | [**ApiV1CasesIdPutRequest**](ApiV1CasesIdPutRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_submit_post**
> api_v1_cases_id_submit_post(id)

Submit draft for review

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # Submit draft for review
        api_instance.api_v1_cases_id_submit_post(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_submit_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Submitted |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_suggest_post**
> api_v1_cases_id_suggest_post(id, case_suggestion_request)

Submit a suggestion to improve a case

Authenticated users can suggest improvements. Published cases accept suggestions from any user; unpublished cases restrict to the author or privileged roles.

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.case_suggestion_request import CaseSuggestionRequest
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 
    case_suggestion_request = querykey_cases_sdk.CaseSuggestionRequest() # CaseSuggestionRequest | 

    try:
        # Submit a suggestion to improve a case
        api_instance.api_v1_cases_id_suggest_post(id, case_suggestion_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_suggest_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **case_suggestion_request** | [**CaseSuggestionRequest**](CaseSuggestionRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | Suggestion accepted for review |  -  |
**400** | Invalid payload |  -  |
**401** | Authentication required |  -  |
**403** | Forbidden for unpublished |  -  |
**404** | Case not found |  -  |
**429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_versions_get**
> api_v1_cases_id_versions_get(id)

List versions by case id

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 

    try:
        # List versions by case id
        api_instance.api_v1_cases_id_versions_get(id)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Versions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_id_versions_v_diff_w_get**
> api_v1_cases_id_versions_v_diff_w_get(id, v, w)

Diff two case versions

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    id = 'id_example' # str | 
    v = 56 # int | 
    w = 56 # int | 

    try:
        # Diff two case versions
        api_instance.api_v1_cases_id_versions_v_diff_w_get(id, v, w)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_id_versions_v_diff_w_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **v** | **int**|  | 
 **w** | **int**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Diff result |  -  |
**400** | Bad request |  -  |
**401** | Auth required |  -  |
**403** | Forbidden |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_mine_get**
> api_v1_cases_mine_get(q=q, page=page, limit=limit)

List my published cases

### Example

* Api Key Authentication (SessionCookie):

```python
import querykey_cases_sdk
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    q = 'q_example' # str |  (optional)
    page = 56 # int |  (optional)
    limit = 56 # int |  (optional)

    try:
        # List my published cases
        api_instance.api_v1_cases_mine_get(q=q, page=page, limit=limit)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_mine_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**|  | [optional] 
 **page** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Caller-authored published cases list |  -  |
**401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_post**
> api_v1_cases_post(api_v1_cases_post_request)

Create draft case

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.api_v1_cases_post_request import ApiV1CasesPostRequest
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
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    api_v1_cases_post_request = querykey_cases_sdk.ApiV1CasesPostRequest() # ApiV1CasesPostRequest | 

    try:
        # Create draft case
        api_instance.api_v1_cases_post(api_v1_cases_post_request)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_v1_cases_post_request** | [**ApiV1CasesPostRequest**](ApiV1CasesPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Draft created |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_search_get**
> api_v1_cases_search_get(q=q, page=page, limit=limit)

Search published cases (alias)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    q = 'q_example' # str |  (optional)
    page = 56 # int |  (optional)
    limit = 56 # int |  (optional)

    try:
        # Search published cases (alias)
        api_instance.api_v1_cases_search_get(q=q, page=page, limit=limit)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_search_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **q** | **str**|  | [optional] 
 **page** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Search results |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_slug_slug_get**
> api_v1_cases_slug_slug_get(slug, accept=accept)

Get case by slug (JSON or QKey)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    slug = 'slug_example' # str | 
    accept = 'accept_example' # str | Set to application/qkey to receive  QKey JSON (optional)

    try:
        # Get case by slug (JSON or QKey)
        api_instance.api_v1_cases_slug_slug_get(slug, accept=accept)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_slug_slug_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**|  | 
 **accept** | **str**| Set to application/qkey to receive  QKey JSON | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case or QKey |  -  |
**401** | Auth required for unpublished |  -  |
**403** | Forbidden for unpublished |  -  |
**404** | Not found |  -  |
**406** | Not acceptable (QKey unavailable) |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_slug_slug_versions_get**
> api_v1_cases_slug_slug_versions_get(slug)

List versions by slug

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)
    slug = 'slug_example' # str | 

    try:
        # List versions by slug
        api_instance.api_v1_cases_slug_slug_versions_get(slug)
    except Exception as e:
        print("Exception when calling DefaultApi->api_v1_cases_slug_slug_versions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **slug** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Versions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **healthz_auth_get**
> healthz_auth_get()

Auth subsystem health

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Auth subsystem health
        api_instance.healthz_auth_get()
    except Exception as e:
        print("Exception when calling DefaultApi->healthz_auth_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Auth health payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **healthz_get**
> healthz_get()

Health check

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Health check
        api_instance.healthz_get()
    except Exception as e:
        print("Exception when calling DefaultApi->healthz_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **openapi_json_get**
> openapi_json_get()

Fetch OpenAPI spec (ETag)

### Example


```python
import querykey_cases_sdk
from querykey_cases_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:8080
# See configuration.py for a list of all supported configuration parameters.
configuration = querykey_cases_sdk.Configuration(
    host = "http://localhost:8080"
)


# Enter a context with an instance of the API client
with querykey_cases_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = querykey_cases_sdk.DefaultApi(api_client)

    try:
        # Fetch OpenAPI spec (ETag)
        api_instance.openapi_json_get()
    except Exception as e:
        print("Exception when calling DefaultApi->openapi_json_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Spec JSON |  -  |
**304** | Not Modified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

