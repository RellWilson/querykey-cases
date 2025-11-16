# Case

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Title** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**Summary** | Pointer to **string** |  | [optional] 
**Body** | Pointer to **interface{}** |  | [optional] 
**Status** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 
**NeedsReview** | Pointer to **interface{}** |  | [optional] 
**TagsCsv** | Pointer to **interface{}** |  | [optional] 
**SourcesJson** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewCase

`func NewCase() *Case`

NewCase instantiates a new Case object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCaseWithDefaults

`func NewCaseWithDefaults() *Case`

NewCaseWithDefaults instantiates a new Case object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *Case) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *Case) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *Case) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *Case) HasId() bool`

HasId returns a boolean if a field has been set.

### GetTitle

`func (o *Case) GetTitle() string`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *Case) GetTitleOk() (*string, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *Case) SetTitle(v string)`

SetTitle sets Title field to given value.

### HasTitle

`func (o *Case) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### GetSlug

`func (o *Case) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *Case) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *Case) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *Case) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetSummary

`func (o *Case) GetSummary() string`

GetSummary returns the Summary field if non-nil, zero value otherwise.

### GetSummaryOk

`func (o *Case) GetSummaryOk() (*string, bool)`

GetSummaryOk returns a tuple with the Summary field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSummary

`func (o *Case) SetSummary(v string)`

SetSummary sets Summary field to given value.

### HasSummary

`func (o *Case) HasSummary() bool`

HasSummary returns a boolean if a field has been set.

### GetBody

`func (o *Case) GetBody() interface{}`

GetBody returns the Body field if non-nil, zero value otherwise.

### GetBodyOk

`func (o *Case) GetBodyOk() (*interface{}, bool)`

GetBodyOk returns a tuple with the Body field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBody

`func (o *Case) SetBody(v interface{})`

SetBody sets Body field to given value.

### HasBody

`func (o *Case) HasBody() bool`

HasBody returns a boolean if a field has been set.

### SetBodyNil

`func (o *Case) SetBodyNil(b bool)`

 SetBodyNil sets the value for Body to be an explicit nil

### UnsetBody
`func (o *Case) UnsetBody()`

UnsetBody ensures that no value is present for Body, not even an explicit nil
### GetStatus

`func (o *Case) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *Case) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *Case) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *Case) HasStatus() bool`

HasStatus returns a boolean if a field has been set.

### GetVersion

`func (o *Case) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *Case) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *Case) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *Case) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetNeedsReview

`func (o *Case) GetNeedsReview() interface{}`

GetNeedsReview returns the NeedsReview field if non-nil, zero value otherwise.

### GetNeedsReviewOk

`func (o *Case) GetNeedsReviewOk() (*interface{}, bool)`

GetNeedsReviewOk returns a tuple with the NeedsReview field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNeedsReview

`func (o *Case) SetNeedsReview(v interface{})`

SetNeedsReview sets NeedsReview field to given value.

### HasNeedsReview

`func (o *Case) HasNeedsReview() bool`

HasNeedsReview returns a boolean if a field has been set.

### SetNeedsReviewNil

`func (o *Case) SetNeedsReviewNil(b bool)`

 SetNeedsReviewNil sets the value for NeedsReview to be an explicit nil

### UnsetNeedsReview
`func (o *Case) UnsetNeedsReview()`

UnsetNeedsReview ensures that no value is present for NeedsReview, not even an explicit nil
### GetTagsCsv

`func (o *Case) GetTagsCsv() interface{}`

GetTagsCsv returns the TagsCsv field if non-nil, zero value otherwise.

### GetTagsCsvOk

`func (o *Case) GetTagsCsvOk() (*interface{}, bool)`

GetTagsCsvOk returns a tuple with the TagsCsv field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTagsCsv

`func (o *Case) SetTagsCsv(v interface{})`

SetTagsCsv sets TagsCsv field to given value.

### HasTagsCsv

`func (o *Case) HasTagsCsv() bool`

HasTagsCsv returns a boolean if a field has been set.

### SetTagsCsvNil

`func (o *Case) SetTagsCsvNil(b bool)`

 SetTagsCsvNil sets the value for TagsCsv to be an explicit nil

### UnsetTagsCsv
`func (o *Case) UnsetTagsCsv()`

UnsetTagsCsv ensures that no value is present for TagsCsv, not even an explicit nil
### GetSourcesJson

`func (o *Case) GetSourcesJson() interface{}`

GetSourcesJson returns the SourcesJson field if non-nil, zero value otherwise.

### GetSourcesJsonOk

`func (o *Case) GetSourcesJsonOk() (*interface{}, bool)`

GetSourcesJsonOk returns a tuple with the SourcesJson field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSourcesJson

`func (o *Case) SetSourcesJson(v interface{})`

SetSourcesJson sets SourcesJson field to given value.

### HasSourcesJson

`func (o *Case) HasSourcesJson() bool`

HasSourcesJson returns a boolean if a field has been set.

### SetSourcesJsonNil

`func (o *Case) SetSourcesJsonNil(b bool)`

 SetSourcesJsonNil sets the value for SourcesJson to be an explicit nil

### UnsetSourcesJson
`func (o *Case) UnsetSourcesJson()`

UnsetSourcesJson ensures that no value is present for SourcesJson, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


