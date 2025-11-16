# \ResearchAPI

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV1ResearchPapersGet**](ResearchAPI.md#ApiV1ResearchPapersGet) | **Get** /api/v1/research/papers | List research papers
[**ApiV1ResearchPapersIdDownloadGet**](ResearchAPI.md#ApiV1ResearchPapersIdDownloadGet) | **Get** /api/v1/research/papers/{id}/download | Download research paper



## ApiV1ResearchPapersGet

> ResearchPapersResponse ApiV1ResearchPapersGet(ctx).Category(category).Page(page).Limit(limit).Execute()

List research papers

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
	category := "category_example" // string |  (optional)
	page := int32(56) // int32 |  (optional)
	limit := int32(56) // int32 |  (optional)

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	resp, r, err := apiClient.ResearchAPI.ApiV1ResearchPapersGet(context.Background()).Category(category).Page(page).Limit(limit).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResearchAPI.ApiV1ResearchPapersGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1ResearchPapersGet`: ResearchPapersResponse
	fmt.Fprintf(os.Stdout, "Response from `ResearchAPI.ApiV1ResearchPapersGet`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiApiV1ResearchPapersGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category** | **string** |  | 
 **page** | **int32** |  | 
 **limit** | **int32** |  | 

### Return type

[**ResearchPapersResponse**](ResearchPapersResponse.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1ResearchPapersIdDownloadGet

> ApiV1ResearchPapersIdDownloadGet(ctx, id).DownloadIntent(downloadIntent).Execute()

Download research paper

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

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.ResearchAPI.ApiV1ResearchPapersIdDownloadGet(context.Background(), id).DownloadIntent(downloadIntent).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `ResearchAPI.ApiV1ResearchPapersIdDownloadGet``: %v\n", err)
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

Other parameters are passed through a pointer to a apiApiV1ResearchPapersIdDownloadGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **downloadIntent** | **string** |  | 

### Return type

 (empty response body)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

