# \CollectionsAPI

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV1CollectionsGet**](CollectionsAPI.md#ApiV1CollectionsGet) | **Get** /api/v1/collections | List curated collections
[**ApiV1CollectionsIdDownloadGet**](CollectionsAPI.md#ApiV1CollectionsIdDownloadGet) | **Get** /api/v1/collections/{id}/download | Download collection archive
[**ApiV1CollectionsIdGet**](CollectionsAPI.md#ApiV1CollectionsIdGet) | **Get** /api/v1/collections/{id} | Get collection detail



## ApiV1CollectionsGet

> CollectionsResponse ApiV1CollectionsGet(ctx).Ecosystem(ecosystem).Domain(domain).Tier(tier).Page(page).Limit(limit).Execute()

List curated collections

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
	ecosystem := "ecosystem_example" // string |  (optional)
	domain := "domain_example" // string |  (optional)
	tier := "tier_example" // string | Filter by minimum subscription tier (optional)
	page := int32(56) // int32 |  (optional)
	limit := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CollectionsAPI.ApiV1CollectionsGet(context.Background()).Ecosystem(ecosystem).Domain(domain).Tier(tier).Page(page).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CollectionsAPI.ApiV1CollectionsGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1CollectionsGet`: CollectionsResponse
	fmt.Fprintf(os.Stdout, "Response from `CollectionsAPI.ApiV1CollectionsGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1CollectionsGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystem** | **string** |  | 
 **domain** | **string** |  | 
 **tier** | **string** | Filter by minimum subscription tier | 
 **page** | **int32** |  | 
 **limit** | **int32** |  | 

### Return type

[**CollectionsResponse**](CollectionsResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1CollectionsIdDownloadGet

> ApiV1CollectionsIdDownloadGet(ctx, id).DownloadIntent(downloadIntent).Format(format).Execute()

Download collection archive

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
	id := "id_example" // string | 
	downloadIntent := "downloadIntent_example" // string | 
	format := "format_example" // string |  (optional) (default to "zip")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.CollectionsAPI.ApiV1CollectionsIdDownloadGet(context.Background(), id).DownloadIntent(downloadIntent).Format(format).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CollectionsAPI.ApiV1CollectionsIdDownloadGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1CollectionsIdDownloadGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **downloadIntent** | **string** |  | 
 **format** | **string** |  | [default to &quot;zip&quot;]

### Return type

 (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/zip, application/gzip, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1CollectionsIdGet

> CollectionDetail ApiV1CollectionsIdGet(ctx, id).Execute()

Get collection detail

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
	id := "id_example" // string | 

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.CollectionsAPI.ApiV1CollectionsIdGet(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `CollectionsAPI.ApiV1CollectionsIdGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1CollectionsIdGet`: CollectionDetail
	fmt.Fprintf(os.Stdout, "Response from `CollectionsAPI.ApiV1CollectionsIdGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1CollectionsIdGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**CollectionDetail**](CollectionDetail.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

