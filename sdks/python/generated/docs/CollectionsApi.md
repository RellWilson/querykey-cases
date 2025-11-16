# querykey_cases_sdk.CollectionsApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_collections_get**](CollectionsApi.md#api_v1_collections_get) | **GET** /api/v1/collections | List curated collections
[**api_v1_collections_id_download_get**](CollectionsApi.md#api_v1_collections_id_download_get) | **GET** /api/v1/collections/{id}/download | Download collection archive
[**api_v1_collections_id_get**](CollectionsApi.md#api_v1_collections_id_get) | **GET** /api/v1/collections/{id} | Get collection detail


# **api_v1_collections_get**
> CollectionsResponse api_v1_collections_get(ecosystem=ecosystem, domain=domain, tier=tier, page=page, limit=limit)

List curated collections

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.collections_response import CollectionsResponse
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
    api_instance = querykey_cases_sdk.CollectionsApi(api_client)
    ecosystem = 'ecosystem_example' # str |  (optional)
    domain = 'domain_example' # str |  (optional)
    tier = 'tier_example' # str | Filter by minimum subscription tier (optional)
    page = 56 # int |  (optional)
    limit = 56 # int |  (optional)

    try:
        # List curated collections
        api_response = api_instance.api_v1_collections_get(ecosystem=ecosystem, domain=domain, tier=tier, page=page, limit=limit)
        print("The response of CollectionsApi->api_v1_collections_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->api_v1_collections_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem** | **str**|  | [optional] 
 **domain** | **str**|  | [optional] 
 **tier** | **str**| Filter by minimum subscription tier | [optional] 
 **page** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

[**CollectionsResponse**](CollectionsResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collections list |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_collections_id_download_get**
> api_v1_collections_id_download_get(id, download_intent, format=format)

Download collection archive

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
    api_instance = querykey_cases_sdk.CollectionsApi(api_client)
    id = 'id_example' # str | 
    download_intent = 'download_intent_example' # str | 
    format = zip # str |  (optional) (default to zip)

    try:
        # Download collection archive
        api_instance.api_v1_collections_id_download_get(id, download_intent, format=format)
    except Exception as e:
        print("Exception when calling CollectionsApi->api_v1_collections_id_download_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
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
**200** | Collection archive |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_collections_id_get**
> CollectionDetail api_v1_collections_id_get(id)

Get collection detail

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.collection_detail import CollectionDetail
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
    api_instance = querykey_cases_sdk.CollectionsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get collection detail
        api_response = api_instance.api_v1_collections_id_get(id)
        print("The response of CollectionsApi->api_v1_collections_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->api_v1_collections_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CollectionDetail**](CollectionDetail.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Collection detail |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

