# CollectionsApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV1CollectionsGet**](CollectionsApi.md#apiv1collectionsget) | **GET** /api/v1/collections | List curated collections |
| [**apiV1CollectionsIdDownloadGet**](CollectionsApi.md#apiv1collectionsiddownloadget) | **GET** /api/v1/collections/{id}/download | Download collection archive |
| [**apiV1CollectionsIdGet**](CollectionsApi.md#apiv1collectionsidget) | **GET** /api/v1/collections/{id} | Get collection detail |



## apiV1CollectionsGet

> CollectionsResponse apiV1CollectionsGet(ecosystem, domain, tier, page, limit)

List curated collections

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '';
import type { ApiV1CollectionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionsApi(config);

  const body = {
    // string (optional)
    ecosystem: ecosystem_example,
    // string (optional)
    domain: domain_example,
    // 'free' | 'professional' | 'enterprise' | Filter by minimum subscription tier (optional)
    tier: tier_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ApiV1CollectionsGetRequest;

  try {
    const data = await api.apiV1CollectionsGet(body);
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
| **ecosystem** | `string` |  | [Optional] [Defaults to `undefined`] |
| **domain** | `string` |  | [Optional] [Defaults to `undefined`] |
| **tier** | `free`, `professional`, `enterprise` | Filter by minimum subscription tier | [Optional] [Defaults to `undefined`] [Enum: free, professional, enterprise] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

[**CollectionsResponse**](CollectionsResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collections list |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CollectionsIdDownloadGet

> apiV1CollectionsIdDownloadGet(id, downloadIntent, format)

Download collection archive

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '';
import type { ApiV1CollectionsIdDownloadGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionsApi(config);

  const body = {
    // string
    id: id_example,
    // 'application' | 'research'
    downloadIntent: downloadIntent_example,
    // 'zip' | 'tar.gz' (optional)
    format: format_example,
  } satisfies ApiV1CollectionsIdDownloadGetRequest;

  try {
    const data = await api.apiV1CollectionsIdDownloadGet(body);
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
| **downloadIntent** | `application`, `research` |  | [Defaults to `undefined`] [Enum: application, research] |
| **format** | `zip`, `tar.gz` |  | [Optional] [Defaults to `&#39;zip&#39;`] [Enum: zip, tar.gz] |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/zip`, `application/gzip`, `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection archive |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CollectionsIdGet

> CollectionDetail apiV1CollectionsIdGet(id)

Get collection detail

### Example

```ts
import {
  Configuration,
  CollectionsApi,
} from '';
import type { ApiV1CollectionsIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new CollectionsApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1CollectionsIdGetRequest;

  try {
    const data = await api.apiV1CollectionsIdGet(body);
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

[**CollectionDetail**](CollectionDetail.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Collection detail |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

