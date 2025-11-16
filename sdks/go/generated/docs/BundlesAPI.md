# \BundlesAPI

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ApiV1BundlesIdFilesGet**](BundlesAPI.md#ApiV1BundlesIdFilesGet) | **Get** /api/v1/bundles/{id}/files | List bundle files
[**ApiV1BundlesIdManifestGet**](BundlesAPI.md#ApiV1BundlesIdManifestGet) | **Get** /api/v1/bundles/{id}/manifest | Get bundle manifest
[**ApiV1CasesCaseIdBundleGet**](BundlesAPI.md#ApiV1CasesCaseIdBundleGet) | **Get** /api/v1/cases/{case_id}/bundle | Download case bundle archive



## ApiV1BundlesIdFilesGet

> BundleManifest ApiV1BundlesIdFilesGet(ctx, id).Execute()

List bundle files

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
	resp, r, err := apiClient.BundlesAPI.ApiV1BundlesIdFilesGet(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BundlesAPI.ApiV1BundlesIdFilesGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1BundlesIdFilesGet`: BundleManifest
	fmt.Fprintf(os.Stdout, "Response from `BundlesAPI.ApiV1BundlesIdFilesGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1BundlesIdFilesGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1BundlesIdManifestGet

> BundleManifest ApiV1BundlesIdManifestGet(ctx, id).Execute()

Get bundle manifest

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
	resp, r, err := apiClient.BundlesAPI.ApiV1BundlesIdManifestGet(context.Background(), id).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BundlesAPI.ApiV1BundlesIdManifestGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
	// response from `ApiV1BundlesIdManifestGet`: BundleManifest
	fmt.Fprintf(os.Stdout, "Response from `BundlesAPI.ApiV1BundlesIdManifestGet`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1BundlesIdManifestGetRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


### Return type

[**BundleManifest**](BundleManifest.md)

### Authorization

[SessionCookie](../README.md#SessionCookie), [ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ApiV1CasesCaseIdBundleGet

> ApiV1CasesCaseIdBundleGet(ctx, caseId).DownloadIntent(downloadIntent).Format(format).Execute()

Download case bundle archive

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
	caseId := "caseId_example" // string | 
	downloadIntent := "downloadIntent_example" // string | 
	format := "format_example" // string |  (optional) (default to "zip")

	configuration := openapiclient.NewConfiguration()
	apiClient := openapiclient.NewAPIClient(configuration)
	r, err := apiClient.BundlesAPI.ApiV1CasesCaseIdBundleGet(context.Background(), caseId).DownloadIntent(downloadIntent).Format(format).Execute()
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error when calling `BundlesAPI.ApiV1CasesCaseIdBundleGet``: %v\n", err)
		fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
	}
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**caseId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiApiV1CasesCaseIdBundleGetRequest struct via the builder pattern


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

