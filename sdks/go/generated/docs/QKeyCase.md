# QKeyCase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Title** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**Summary** | Pointer to **string** |  | [optional] 
**Body** | Pointer to **interface{}** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 
**Tags** | Pointer to **[]string** |  | [optional] 
**Sources** | Pointer to **[]map[string]interface{}** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 

## Methods

### NewQKeyCase

`func NewQKeyCase() *QKeyCase`

NewQKeyCase instantiates a new QKeyCase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQKeyCaseWithDefaults

`func NewQKeyCaseWithDefaults() *QKeyCase`

NewQKeyCaseWithDefaults instantiates a new QKeyCase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTitle

`func (o *QKeyCase) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *QKeyCase) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *QKeyCase) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *QKeyCase) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSlug

`func (o *QKeyCase) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *QKeyCase) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *QKeyCase) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *QKeyCase) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetSummary

`func (o *QKeyCase) GetSummary() string`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *QKeyCase) GetSummaryOk() (*string, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *QKeyCase) SetSummary(v string)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *QKeyCase) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetBody

`func (o *QKeyCase) GetBody() interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *QKeyCase) GetBodyOk() (*interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *QKeyCase) SetBody(v interface{})`

SetBody sets Body field to given value.

### HasBody

`func (o *QKeyCase) HasBody() bool`

HasBody returns a boolean if a field has been set.

### SetBodyNil

`func (o *QKeyCase) SetBodyNil(b bool)`

 SetBodyNil sets the value for Body to be an explicit nil

### UnsetBody
`func (o *QKeyCase) UnsetBody()`

UnsetBody ensures that no value is present for Body, not even an explicit nil
### GetVersion

`func (o *QKeyCase) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *QKeyCase) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *QKeyCase) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *QKeyCase) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTags

`func (o *QKeyCase) GetTags() []string`

GetTags returns the Tags field if non-nil, zero value otherwise.

### GetTagsOk

`func (o *QKeyCase) GetTagsOk() (*[]string, bool)`

GetTagsOk returns a tuple with the Tags field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTags

`func (o *QKeyCase) SetTags(v []string)`

SetTags sets Tags field to given value.

### HasTags

`func (o *QKeyCase) HasTags() bool`

HasTags returns a boolean if a field has been set.

### GetSources

`func (o *QKeyCase) GetSources() []map[string]interface{}`

GetSources returns the Sources field if non-nil, zero value otherwise.

### GetSourcesOk

`func (o *QKeyCase) GetSourcesOk() (*[]map[string]interface{}, bool)`

GetSourcesOk returns a tuple with the Sources field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSources

`func (o *QKeyCase) SetSources(v []map[string]interface{})`

SetSources sets Sources field to given value.

### HasSources

`func (o *QKeyCase) HasSources() bool`

HasSources returns a boolean if a field has been set.

### GetStatus

`func (o *QKeyCase) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *QKeyCase) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *QKeyCase) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *QKeyCase) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


