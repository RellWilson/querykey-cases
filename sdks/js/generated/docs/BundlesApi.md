# BundlesApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiV1BundlesIdFilesGet**](BundlesApi.md#apiv1bundlesidfilesget) | **GET** /api/v1/bundles/{id}/files | List bundle files |
| [**apiV1BundlesIdManifestGet**](BundlesApi.md#apiv1bundlesidmanifestget) | **GET** /api/v1/bundles/{id}/manifest | Get bundle manifest |
| [**apiV1CasesCaseIdBundleGet**](BundlesApi.md#apiv1casescaseidbundleget) | **GET** /api/v1/cases/{case_id}/bundle | Download case bundle archive |



## apiV1BundlesIdFilesGet

> BundleManifest apiV1BundlesIdFilesGet(id)

List bundle files

### Example

```ts
import {
  Configuration,
  BundlesApi,
} from '';
import type { ApiV1BundlesIdFilesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BundlesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1BundlesIdFilesGetRequest;

  try {
    const data = await api.apiV1BundlesIdFilesGet(body);
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

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bundle files |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1BundlesIdManifestGet

> BundleManifest apiV1BundlesIdManifestGet(id)

Get bundle manifest

### Example

```ts
import {
  Configuration,
  BundlesApi,
} from '';
import type { ApiV1BundlesIdManifestGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BundlesApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1BundlesIdManifestGetRequest;

  try {
    const data = await api.apiV1BundlesIdManifestGet(body);
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

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Bundle manifest |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesCaseIdBundleGet

> apiV1CasesCaseIdBundleGet(caseId, downloadIntent, format)

Download case bundle archive

### Example

```ts
import {
  Configuration,
  BundlesApi,
} from '';
import type { ApiV1CasesCaseIdBundleGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new BundlesApi(config);

  const body = {
    // string
    caseId: caseId_example,
    // 'application' | 'research'
    downloadIntent: downloadIntent_example,
    // 'zip' | 'tar.gz' (optional)
    format: format_example,
  } satisfies ApiV1CasesCaseIdBundleGetRequest;

  try {
    const data = await api.apiV1CasesCaseIdBundleGet(body);
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
| **caseId** | `string` |  | [Defaults to `undefined`] |
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
| **200** | Case bundle archive |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |
| **404** | Not found |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

