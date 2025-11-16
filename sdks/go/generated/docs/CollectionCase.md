# CollectionCase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CaseId** | **string** |  | 
**Title** | Pointer to **interface{}** |  | [optional] 
**OrderIndex** | **int32** |  | 

## Methods

### NewCollectionCase

`func NewCollectionCase(caseId string, orderIndex int32, ) *CollectionCase`

NewCollectionCase instantiates a new CollectionCase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectionCaseWithDefaults

`func NewCollectionCaseWithDefaults() *CollectionCase`

NewCollectionCaseWithDefaults instantiates a new CollectionCase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCaseId

`func (o *CollectionCase) GetCaseId() string`

GetCaseId returns the CaseId field if non-nil, zero value otherwise.

### GetCaseIdOk

`func (o *CollectionCase) GetCaseIdOk() (*string, bool)`

GetCaseIdOk returns a tuple with the CaseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseId

`func (o *CollectionCase) SetCaseId(v string)`

SetCaseId sets CaseId field to given value.


### GetTitle

`func (o *CollectionCase) GetTitle() interface{}`

GetTitle returns the Title field if non-nil, zero value otherwise.

### GetTitleOk

`func (o *CollectionCase) GetTitleOk() (*interface{}, bool)`

GetTitleOk returns a tuple with the Title field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTitle

`func (o *CollectionCase) SetTitle(v interface{})`

SetTitle sets Title field to given value.

### HasTitle

`func (o *CollectionCase) HasTitle() bool`

HasTitle returns a boolean if a field has been set.

### SetTitleNil

`func (o *CollectionCase) SetTitleNil(b bool)`

 SetTitleNil sets the value for Title to be an explicit nil

### UnsetTitle
`func (o *CollectionCase) UnsetTitle()`

UnsetTitle ensures that no value is present for Title, not even an explicit nil
### GetOrderIndex

`func (o *CollectionCase) GetOrderIndex() int32`

GetOrderIndex returns the OrderIndex field if non-nil, zero value otherwise.

### GetOrderIndexOk

`func (o *CollectionCase) GetOrderIndexOk() (*int32, bool)`

GetOrderIndexOk returns a tuple with the OrderIndex field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderIndex

`func (o *CollectionCase) SetOrderIndex(v int32)`

SetOrderIndex sets OrderIndex field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


