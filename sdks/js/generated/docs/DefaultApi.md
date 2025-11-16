# DefaultApi

All URIs are relative to *http://localhost:8080*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**apiAdminAgentIdExemptAuditGet**](DefaultApi.md#apiadminagentidexemptauditget) | **GET** /api/admin/agent/{id}/exempt/audit | Get full audit history for agent exemption toggles |
| [**apiAdminAgentIdExemptPost**](DefaultApi.md#apiadminagentidexemptpostoperation) | **POST** /api/admin/agent/{id}/exempt | Set or clear agent exempt flag (admin-only) |
| [**apiAdminAgentIdGet**](DefaultApi.md#apiadminagentidget) | **GET** /api/admin/agent/{id} | Get agent details and recent exempt audit events |
| [**apiAdminCasesGet**](DefaultApi.md#apiadmincasesget) | **GET** /api/admin/cases | Admin list cases (recent) |
| [**apiAdminReloadConfigPost**](DefaultApi.md#apiadminreloadconfigpost) | **POST** /api/admin/reload-config | Reload plan &amp; quota config |
| [**apiAdminUsageGet**](DefaultApi.md#apiadminusageget) | **GET** /api/admin/usage | Admin usage aggregate (today or ?day&#x3D;YYYY-MM-DD, optional ?user_id&#x3D;UUID) |
| [**apiAuthApiKeysGet**](DefaultApi.md#apiauthapikeysget) | **GET** /api/auth/api-keys | List API keys |
| [**apiAuthApiKeysIdDelete**](DefaultApi.md#apiauthapikeysiddelete) | **DELETE** /api/auth/api-keys/{id} | Soft revoke API key |
| [**apiAuthApiKeysIdPost**](DefaultApi.md#apiauthapikeysidpost) | **POST** /api/auth/api-keys/{id} | Rotate API key (alias: /rotate) |
| [**apiAuthApiKeysIdRotatePost**](DefaultApi.md#apiauthapikeysidrotatepost) | **POST** /api/auth/api-keys/{id}/rotate | Rotate API key |
| [**apiAuthApiKeysPost**](DefaultApi.md#apiauthapikeyspostoperation) | **POST** /api/auth/api-keys | Create API key |
| [**apiAuthLoginPost**](DefaultApi.md#apiauthloginpost) | **POST** /api/auth/login | Login (with lockout) |
| [**apiAuthLogoutPost**](DefaultApi.md#apiauthlogoutpost) | **POST** /api/auth/logout | Logout |
| [**apiAuthMeGet**](DefaultApi.md#apiauthmeget) | **GET** /api/auth/me | Session info |
| [**apiAuthRegisterPost**](DefaultApi.md#apiauthregisterpostoperation) | **POST** /api/auth/register | Register user |
| [**apiBillingCheckoutPost**](DefaultApi.md#apibillingcheckoutpostoperation) | **POST** /api/billing/checkout | Create checkout session (mock if no Stripe) |
| [**apiBillingPortalGet**](DefaultApi.md#apibillingportalget) | **GET** /api/billing/portal | Customer portal link (mock if no Stripe) |
| [**apiBillingWebhookPost**](DefaultApi.md#apibillingwebhookpost) | **POST** /api/billing/webhook | Billing webhook (Stripe events) |
| [**apiEntitlementTestWriteGet**](DefaultApi.md#apientitlementtestwriteget) | **GET** /api/entitlement/test-write | Sample plan-gated endpoint |
| [**apiGet**](DefaultApi.md#apiget) | **GET** /api/ | Capability descriptor |
| [**apiUsageMeGet**](DefaultApi.md#apiusagemeget) | **GET** /api/usage/me | Today\&#39;s usage &amp; plan limits for authenticated user |
| [**apiV1CasesGet**](DefaultApi.md#apiv1casesget) | **GET** /api/v1/cases | List/search published cases |
| [**apiV1CasesIdGet**](DefaultApi.md#apiv1casesidget) | **GET** /api/v1/cases/{id} | Get case by id |
| [**apiV1CasesIdPublishPost**](DefaultApi.md#apiv1casesidpublishpost) | **POST** /api/v1/cases/{id}/publish | Publish case |
| [**apiV1CasesIdPut**](DefaultApi.md#apiv1casesidputoperation) | **PUT** /api/v1/cases/{id} | Update draft/review case |
| [**apiV1CasesIdSubmitPost**](DefaultApi.md#apiv1casesidsubmitpost) | **POST** /api/v1/cases/{id}/submit | Submit draft for review |
| [**apiV1CasesIdSuggestPost**](DefaultApi.md#apiv1casesidsuggestpost) | **POST** /api/v1/cases/{id}/suggest | Submit a suggestion to improve a case |
| [**apiV1CasesIdVersionsGet**](DefaultApi.md#apiv1casesidversionsget) | **GET** /api/v1/cases/{id}/versions | List versions by case id |
| [**apiV1CasesIdVersionsVDiffWGet**](DefaultApi.md#apiv1casesidversionsvdiffwget) | **GET** /api/v1/cases/{id}/versions/{v}/diff/{w} | Diff two case versions |
| [**apiV1CasesMineGet**](DefaultApi.md#apiv1casesmineget) | **GET** /api/v1/cases/mine | List my published cases |
| [**apiV1CasesPost**](DefaultApi.md#apiv1casespostoperation) | **POST** /api/v1/cases | Create draft case |
| [**apiV1CasesSearchGet**](DefaultApi.md#apiv1casessearchget) | **GET** /api/v1/cases/search | Search published cases (alias) |
| [**apiV1CasesSlugSlugGet**](DefaultApi.md#apiv1casesslugslugget) | **GET** /api/v1/cases/slug/{slug} | Get case by slug (JSON or QKey) |
| [**apiV1CasesSlugSlugVersionsGet**](DefaultApi.md#apiv1casesslugslugversionsget) | **GET** /api/v1/cases/slug/{slug}/versions | List versions by slug |
| [**healthzAuthGet**](DefaultApi.md#healthzauthget) | **GET** /healthz/auth | Auth subsystem health |
| [**healthzGet**](DefaultApi.md#healthzget) | **GET** /healthz | Health check |
| [**openapiJsonGet**](DefaultApi.md#openapijsonget) | **GET** /openapi.json | Fetch OpenAPI spec (ETag) |



## apiAdminAgentIdExemptAuditGet

> apiAdminAgentIdExemptAuditGet(id)

Get full audit history for agent exemption toggles

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminAgentIdExemptAuditGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
  } satisfies ApiAdminAgentIdExemptAuditGetRequest;

  try {
    const data = await api.apiAdminAgentIdExemptAuditGet(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Audit list |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAdminAgentIdExemptPost

> apiAdminAgentIdExemptPost(id, apiAdminAgentIdExemptPostRequest)

Set or clear agent exempt flag (admin-only)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminAgentIdExemptPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
    // ApiAdminAgentIdExemptPostRequest
    apiAdminAgentIdExemptPostRequest: ...,
  } satisfies ApiAdminAgentIdExemptPostOperationRequest;

  try {
    const data = await api.apiAdminAgentIdExemptPost(body);
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
| **apiAdminAgentIdExemptPostRequest** | [ApiAdminAgentIdExemptPostRequest](ApiAdminAgentIdExemptPostRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Exempt toggled |  -  |
| **400** | Bad request |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAdminAgentIdGet

> apiAdminAgentIdGet(id)

Get agent details and recent exempt audit events

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminAgentIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
  } satisfies ApiAdminAgentIdGetRequest;

  try {
    const data = await api.apiAdminAgentIdGet(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Agent details and audits |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAdminCasesGet

> apiAdminCasesGet()

Admin list cases (recent)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminCasesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiAdminCasesGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cases listed |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAdminReloadConfigPost

> apiAdminReloadConfigPost()

Reload plan &amp; quota config

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminReloadConfigPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiAdminReloadConfigPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Config reloaded |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAdminUsageGet

> AdminUsageResponse apiAdminUsageGet(day, userId)

Admin usage aggregate (today or ?day&#x3D;YYYY-MM-DD, optional ?user_id&#x3D;UUID)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAdminUsageGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string | Date in YYYY-MM-DD format (optional)
    day: day_example,
    // string | Filter results to a single user id (optional)
    userId: userId_example,
  } satisfies ApiAdminUsageGetRequest;

  try {
    const data = await api.apiAdminUsageGet(body);
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
| **day** | `string` | Date in YYYY-MM-DD format | [Optional] [Defaults to `undefined`] |
| **userId** | `string` | Filter results to a single user id | [Optional] [Defaults to `undefined`] |

### Return type

[**AdminUsageResponse**](AdminUsageResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Aggregated usage |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthApiKeysGet

> ApiAuthApiKeysGet200Response apiAuthApiKeysGet()

List API keys

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthApiKeysGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiAuthApiKeysGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ApiAuthApiKeysGet200Response**](ApiAuthApiKeysGet200Response.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List returned |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthApiKeysIdDelete

> apiAuthApiKeysIdDelete(id)

Soft revoke API key

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthApiKeysIdDeleteRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiAuthApiKeysIdDeleteRequest;

  try {
    const data = await api.apiAuthApiKeysIdDelete(body);
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

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Revoked (soft) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthApiKeysIdPost

> apiAuthApiKeysIdPost()

Rotate API key (alias: /rotate)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthApiKeysIdPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiAuthApiKeysIdPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **405** | Use /rotate subresource |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthApiKeysIdRotatePost

> apiAuthApiKeysIdRotatePost(id)

Rotate API key

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthApiKeysIdRotatePostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiAuthApiKeysIdRotatePostRequest;

  try {
    const data = await api.apiAuthApiKeysIdRotatePost(body);
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

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Rotated - returns new secret |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthApiKeysPost

> ApiAuthApiKeysPost201Response apiAuthApiKeysPost(apiAuthApiKeysPostRequest)

Create API key

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthApiKeysPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // ApiAuthApiKeysPostRequest (optional)
    apiAuthApiKeysPostRequest: ...,
  } satisfies ApiAuthApiKeysPostOperationRequest;

  try {
    const data = await api.apiAuthApiKeysPost(body);
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
| **apiAuthApiKeysPostRequest** | [ApiAuthApiKeysPostRequest](ApiAuthApiKeysPostRequest.md) |  | [Optional] |

### Return type

[**ApiAuthApiKeysPost201Response**](ApiAuthApiKeysPost201Response.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Key created |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthLoginPost

> apiAuthLoginPost(apiAuthRegisterPostRequest)

Login (with lockout)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthLoginPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // ApiAuthRegisterPostRequest
    apiAuthRegisterPostRequest: ...,
  } satisfies ApiAuthLoginPostRequest;

  try {
    const data = await api.apiAuthLoginPost(body);
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
| **apiAuthRegisterPostRequest** | [ApiAuthRegisterPostRequest](ApiAuthRegisterPostRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Session established |  -  |
| **401** | Invalid credentials |  -  |
| **423** | Account temporarily locked |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthLogoutPost

> apiAuthLogoutPost()

Logout

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthLogoutPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiAuthLogoutPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Logged out |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthMeGet

> apiAuthMeGet()

Session info

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiAuthMeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Current user |  -  |
| **401** | Not authenticated |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiAuthRegisterPost

> apiAuthRegisterPost(apiAuthRegisterPostRequest)

Register user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiAuthRegisterPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // ApiAuthRegisterPostRequest
    apiAuthRegisterPostRequest: ...,
  } satisfies ApiAuthRegisterPostOperationRequest;

  try {
    const data = await api.apiAuthRegisterPost(body);
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
| **apiAuthRegisterPostRequest** | [ApiAuthRegisterPostRequest](ApiAuthRegisterPostRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Registered |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiBillingCheckoutPost

> apiBillingCheckoutPost(apiBillingCheckoutPostRequest)

Create checkout session (mock if no Stripe)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiBillingCheckoutPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // ApiBillingCheckoutPostRequest
    apiBillingCheckoutPostRequest: ...,
  } satisfies ApiBillingCheckoutPostOperationRequest;

  try {
    const data = await api.apiBillingCheckoutPost(body);
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
| **apiBillingCheckoutPostRequest** | [ApiBillingCheckoutPostRequest](ApiBillingCheckoutPostRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Checkout URL |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiBillingPortalGet

> apiBillingPortalGet()

Customer portal link (mock if no Stripe)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiBillingPortalGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiBillingPortalGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Portal URL |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiBillingWebhookPost

> apiBillingWebhookPost()

Billing webhook (Stripe events)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiBillingWebhookPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiBillingWebhookPost();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Processed &amp; verified |  -  |
| **202** | Received but ignored (not allowlisted) |  -  |
| **400** | Signature invalid |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiEntitlementTestWriteGet

> apiEntitlementTestWriteGet()

Sample plan-gated endpoint

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiEntitlementTestWriteGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiEntitlementTestWriteGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Allowed |  -  |
| **401** | Auth required |  -  |
| **402** | Plan upgrade required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiGet

> apiGet()

Capability descriptor

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.apiGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Capabilities |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiUsageMeGet

> UsageSelf apiUsageMeGet()

Today\&#39;s usage &amp; plan limits for authenticated user

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiUsageMeGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  try {
    const data = await api.apiUsageMeGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UsageSelf**](UsageSelf.md)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Usage detail |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesGet

> apiV1CasesGet(q, page, limit)

List/search published cases

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    q: q_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ApiV1CasesGetRequest;

  try {
    const data = await api.apiV1CasesGet(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Cases list |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdGet

> apiV1CasesIdGet(id)

Get case by id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1CasesIdGetRequest;

  try {
    const data = await api.apiV1CasesIdGet(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Case |  -  |
| **401** | Auth required for unpublished |  -  |
| **403** | Forbidden for unpublished |  -  |
| **404** | Not found |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdPublishPost

> apiV1CasesIdPublishPost(id)

Publish case

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdPublishPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1CasesIdPublishPostRequest;

  try {
    const data = await api.apiV1CasesIdPublishPost(body);
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

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Published |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdPut

> apiV1CasesIdPut(id, apiV1CasesIdPutRequest)

Update draft/review case

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdPutOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
    // ApiV1CasesIdPutRequest
    apiV1CasesIdPutRequest: ...,
  } satisfies ApiV1CasesIdPutOperationRequest;

  try {
    const data = await api.apiV1CasesIdPut(body);
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
| **apiV1CasesIdPutRequest** | [ApiV1CasesIdPutRequest](ApiV1CasesIdPutRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Updated |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdSubmitPost

> apiV1CasesIdSubmitPost(id)

Submit draft for review

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdSubmitPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1CasesIdSubmitPostRequest;

  try {
    const data = await api.apiV1CasesIdSubmitPost(body);
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

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Submitted |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdSuggestPost

> apiV1CasesIdSuggestPost(id, caseSuggestionRequest)

Submit a suggestion to improve a case

Authenticated users can suggest improvements. Published cases accept suggestions from any user; unpublished cases restrict to the author or privileged roles.

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdSuggestPostRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string
    id: id_example,
    // CaseSuggestionRequest
    caseSuggestionRequest: ...,
  } satisfies ApiV1CasesIdSuggestPostRequest;

  try {
    const data = await api.apiV1CasesIdSuggestPost(body);
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
| **caseSuggestionRequest** | [CaseSuggestionRequest](CaseSuggestionRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **202** | Suggestion accepted for review |  -  |
| **400** | Invalid payload |  -  |
| **401** | Authentication required |  -  |
| **403** | Forbidden for unpublished |  -  |
| **404** | Case not found |  -  |
| **429** | Rate limit exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdVersionsGet

> apiV1CasesIdVersionsGet(id)

List versions by case id

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdVersionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
  } satisfies ApiV1CasesIdVersionsGetRequest;

  try {
    const data = await api.apiV1CasesIdVersionsGet(body);
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

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Versions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesIdVersionsVDiffWGet

> apiV1CasesIdVersionsVDiffWGet(id, v, w)

Diff two case versions

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesIdVersionsVDiffWGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    id: id_example,
    // number
    v: 56,
    // number
    w: 56,
  } satisfies ApiV1CasesIdVersionsVDiffWGetRequest;

  try {
    const data = await api.apiV1CasesIdVersionsVDiffWGet(body);
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
| **v** | `number` |  | [Defaults to `undefined`] |
| **w** | `number` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Diff result |  -  |
| **400** | Bad request |  -  |
| **401** | Auth required |  -  |
| **403** | Forbidden |  -  |
| **404** | Not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesMineGet

> apiV1CasesMineGet(q, page, limit)

List my published cases

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesMineGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // string (optional)
    q: q_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ApiV1CasesMineGetRequest;

  try {
    const data = await api.apiV1CasesMineGet(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Caller-authored published cases list |  -  |
| **401** | Auth required |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesPost

> apiV1CasesPost(apiV1CasesPostRequest)

Create draft case

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesPostOperationRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const config = new Configuration({ 
    // To configure API key authorization: SessionCookie
    apiKey: "YOUR API KEY",
    // To configure API key authorization: ApiKeyAuth
    apiKey: "YOUR API KEY",
  });
  const api = new DefaultApi(config);

  const body = {
    // ApiV1CasesPostRequest
    apiV1CasesPostRequest: ...,
  } satisfies ApiV1CasesPostOperationRequest;

  try {
    const data = await api.apiV1CasesPost(body);
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
| **apiV1CasesPostRequest** | [ApiV1CasesPostRequest](ApiV1CasesPostRequest.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | Draft created |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesSearchGet

> apiV1CasesSearchGet(q, page, limit)

Search published cases (alias)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesSearchGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string (optional)
    q: q_example,
    // number (optional)
    page: 56,
    // number (optional)
    limit: 56,
  } satisfies ApiV1CasesSearchGetRequest;

  try {
    const data = await api.apiV1CasesSearchGet(body);
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
| **q** | `string` |  | [Optional] [Defaults to `undefined`] |
| **page** | `number` |  | [Optional] [Defaults to `undefined`] |
| **limit** | `number` |  | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Search results |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesSlugSlugGet

> apiV1CasesSlugSlugGet(slug, accept)

Get case by slug (JSON or QKey)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesSlugSlugGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    slug: slug_example,
    // string | Set to application/qkey to receive  QKey JSON (optional)
    accept: accept_example,
  } satisfies ApiV1CasesSlugSlugGetRequest;

  try {
    const data = await api.apiV1CasesSlugSlugGet(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |
| **accept** | `string` | Set to application/qkey to receive  QKey JSON | [Optional] [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Case or QKey |  -  |
| **401** | Auth required for unpublished |  -  |
| **403** | Forbidden for unpublished |  -  |
| **404** | Not found |  -  |
| **406** | Not acceptable (QKey unavailable) |  -  |
| **429** | Quota exceeded |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## apiV1CasesSlugSlugVersionsGet

> apiV1CasesSlugSlugVersionsGet(slug)

List versions by slug

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { ApiV1CasesSlugSlugVersionsGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  const body = {
    // string
    slug: slug_example,
  } satisfies ApiV1CasesSlugSlugVersionsGetRequest;

  try {
    const data = await api.apiV1CasesSlugSlugVersionsGet(body);
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
| **slug** | `string` |  | [Defaults to `undefined`] |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Versions list |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthzAuthGet

> healthzAuthGet()

Auth subsystem health

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { HealthzAuthGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.healthzAuthGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Auth health payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## healthzGet

> healthzGet()

Health check

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { HealthzGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.healthzGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## openapiJsonGet

> openapiJsonGet()

Fetch OpenAPI spec (ETag)

### Example

```ts
import {
  Configuration,
  DefaultApi,
} from '';
import type { OpenapiJsonGetRequest } from '';

async function example() {
  console.log("🚀 Testing  SDK...");
  const api = new DefaultApi();

  try {
    const data = await api.openapiJsonGet();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | Spec JSON |  -  |
| **304** | Not Modified |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

