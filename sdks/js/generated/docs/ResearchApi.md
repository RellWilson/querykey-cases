# ResearchApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV1ResearchPapersGet**](ResearchApi.md#apiv1researchpapersget) | **GET** /api/v1/research/papers | List research papers |
| [**apiV1ResearchPapersIdDownloadGet**](ResearchApi.md#apiv1researchpapersiddownloadget) | **GET** /api/v1/research/papers/{id}/download | Download research paper |



## apiV1ResearchPapersGet

> ResearchPapersResponse apiV1ResearchPapersGet(category, page, limit)

List research papers

### Example

```ts
import {
  Configuration,
  ResearchApi,
} from '';
import type { ApiV1ResearchPapersGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ResearchApi(config);

  const body = {
    // string (optional)
    category: category_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ApiV1ResearchPapersGetRequest;

  try {
    const data = await api.apiV1ResearchPapersGet(body);
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
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**ResearchPapersResponse**](ResearchPapersResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Research papers |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1ResearchPapersIdDownloadGet

> apiV1ResearchPapersIdDownloadGet(id, downloadIntent)

Download research paper

### Example

```ts
import {
  Configuration,
  ResearchApi,
} from '';
import type { ApiV1ResearchPapersIdDownloadGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new ResearchApi(config);

  const body = {
    // string
    id: id_example,
    // 'research'
    downloadIntent: downloadIntent_example,
  } satisfies ApiV1ResearchPapersIdDownloadGetRequest;

  try {
    const data = await api.apiV1ResearchPapersIdDownloadGet(body);
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
| **downloadIntent** | `research` |  | [Defaults to `undefined`] [Enum: research] |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/pdf`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Research PDF |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

