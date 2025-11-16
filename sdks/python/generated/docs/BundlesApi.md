# querykey_cases_sdk.BundlesApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_bundles_id_files_get**](BundlesApi.md#api_v1_bundles_id_files_get) | **GET** /api/v1/bundles/{id}/files | List bundle files
[**api_v1_bundles_id_manifest_get**](BundlesApi.md#api_v1_bundles_id_manifest_get) | **GET** /api/v1/bundles/{id}/manifest | Get bundle manifest
[**api_v1_cases_case_id_bundle_get**](BundlesApi.md#api_v1_cases_case_id_bundle_get) | **GET** /api/v1/cases/{case_id}/bundle | Download case bundle archive


# **api_v1_bundles_id_files_get**
> BundleManifest api_v1_bundles_id_files_get(id)

List bundle files

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.bundle_manifest import BundleManifest
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
    api_instance = querykey_cases_sdk.BundlesApi(api_client)
    id = 'id_example' # str | 

    try:
        # List bundle files
        api_response = api_instance.api_v1_bundles_id_files_get(id)
        print("The response of BundlesApi->api_v1_bundles_id_files_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundlesApi->api_v1_bundles_id_files_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bundle files |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_bundles_id_manifest_get**
> BundleManifest api_v1_bundles_id_manifest_get(id)

Get bundle manifest

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.bundle_manifest import BundleManifest
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
    api_instance = querykey_cases_sdk.BundlesApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get bundle manifest
        api_response = api_instance.api_v1_bundles_id_manifest_get(id)
        print("The response of BundlesApi->api_v1_bundles_id_manifest_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BundlesApi->api_v1_bundles_id_manifest_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bundle manifest |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_cases_case_id_bundle_get**
> api_v1_cases_case_id_bundle_get(case_id, download_intent, format=format)

Download case bundle archive

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
    api_instance = querykey_cases_sdk.BundlesApi(api_client)
    case_id = 'case_id_example' # str | 
    download_intent = 'download_intent_example' # str | 
    format = zip # str |  (optional) (default to zip)

    try:
        # Download case bundle archive
        api_instance.api_v1_cases_case_id_bundle_get(case_id, download_intent, format=format)
    except Exception as e:
        print("Exception when calling BundlesApi->api_v1_cases_case_id_bundle_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **case_id** | **str**|  | 
 **download_intent** | **str**|  | 
 **format** | **str**|  | [optional] [default to zip]

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/zip, application/gzip, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Case bundle archive |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

