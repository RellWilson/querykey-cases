# ApiV1CasesPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | **string** |  | 
**Slug** | **string** |  | 
**Summary** | Pointer to **string** |  | [optional] 
**Body** | Pointer to **string** |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 
**Sources** | Pointer to **[]map[string]interface{}** |  | [optional] 

## Methods

### NewApiV1CasesPostRequest

`func NewApiV1CasesPostRequest(title string, slug string, ) *ApiV1CasesPostRequest`

NewApiV1CasesPostRequest instantiates a new ApiV1CasesPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiV1CasesPostRequestWithDefaults

`func NewApiV1CasesPostRequestWithDefaults() *ApiV1CasesPostRequest`

NewApiV1CasesPostRequestWithDefaults instantiates a new ApiV1CasesPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *ApiV1CasesPostRequest) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *ApiV1CasesPostRequest) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *ApiV1CasesPostRequest) SetTitle(v string)`

SetTitle sets Title field to given value.


### GetSlug

`func (o *ApiV1CasesPostRequest) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *ApiV1CasesPostRequest) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *ApiV1CasesPostRequest) SetSlug(v string)`

SetSlug sets Slug field to given value.


### GetSummary

`func (o *ApiV1CasesPostRequest) GetSummary() string`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *ApiV1CasesPostRequest) GetSummaryOk() (*string, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *ApiV1CasesPostRequest) SetSummary(v string)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *ApiV1CasesPostRequest) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetBody

`func (o *ApiV1CasesPostRequest) GetBody() string`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *ApiV1CasesPostRequest) GetBodyOk() (*string, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *ApiV1CasesPostRequest) SetBody(v string)`

SetBody sets Body field to given value.

### HasBody

`func (o *ApiV1CasesPostRequest) HasBody() bool`

HasBody returns a boolean if a field has been set.

### GetTags

`func (o *ApiV1CasesPostRequest) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *ApiV1CasesPostRequest) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *ApiV1CasesPostRequest) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *ApiV1CasesPostRequest) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetSources

`func (o *ApiV1CasesPostRequest) GetSources() []map[string]interface{}`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *ApiV1CasesPostRequest) GetSourcesOk() (*[]map[string]interface{}, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *ApiV1CasesPostRequest) SetSources(v []map[string]interface{})`

SetSources sets Sources field to given value.

### HasSources

`func (o *ApiV1CasesPostRequest) HasSources() bool`

HasSources returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


