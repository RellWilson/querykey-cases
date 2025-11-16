# querykey_cases_sdk.ResearchApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_v1_research_papers_get**](ResearchApi.md#api_v1_research_papers_get) | **GET** /api/v1/research/papers | List research papers
[**api_v1_research_papers_id_download_get**](ResearchApi.md#api_v1_research_papers_id_download_get) | **GET** /api/v1/research/papers/{id}/download | Download research paper


# **api_v1_research_papers_get**
> ResearchPapersResponse api_v1_research_papers_get(category=category, page=page, limit=limit)

List research papers

### Example

* Api Key Authentication (SessionCookie):
* Api Key Authentication (ApiKeyAuth):

```python
import querykey_cases_sdk
from querykey_cases_sdk.models.research_papers_response import ResearchPapersResponse
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
    api_instance = querykey_cases_sdk.ResearchApi(api_client)
    category = 'category_example' # str |  (optional)
    page = 56 # int |  (optional)
    limit = 56 # int |  (optional)

    try:
        # List research papers
        api_response = api_instance.api_v1_research_papers_get(category=category, page=page, limit=limit)
        print("The response of ResearchApi->api_v1_research_papers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ResearchApi->api_v1_research_papers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **str**|  | [optional] 
 **page** | **int**|  | [optional] 
 **limit** | **int**|  | [optional] 

### Return type

[**ResearchPapersResponse**](ResearchPapersResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Research papers |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_v1_research_papers_id_download_get**
> api_v1_research_papers_id_download_get(id, download_intent)

Download research paper

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
    api_instance = querykey_cases_sdk.ResearchApi(api_client)
    id = 'id_example' # str | 
    download_intent = 'download_intent_example' # str | 

    try:
        # Download research paper
        api_instance.api_v1_research_papers_id_download_get(id, download_intent)
    except Exception as e:
        print("Exception when calling ResearchApi->api_v1_research_papers_id_download_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **download_intent** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf, application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Research PDF |  -  |
**401** | Auth required |  -  |
**402** | Plan upgrade required |  -  |
**404** | Not found |  -  |
**429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

