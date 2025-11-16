# ApiKeyMasked

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Label** | Pointer to **interface{}** |  | [optional] 
**LastUsedAt** | Pointer to **interface{}** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 

## Methods

### NewApiKeyMasked

`func NewApiKeyMasked() *ApiKeyMasked`

NewApiKeyMasked instantiates a new ApiKeyMasked object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiKeyMaskedWithDefaults

`func NewApiKeyMaskedWithDefaults() *ApiKeyMasked`

NewApiKeyMaskedWithDefaults instantiates a new ApiKeyMasked object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *ApiKeyMasked) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *ApiKeyMasked) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *ApiKeyMasked) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *ApiKeyMasked) HasId() bool`

HasId returns a boolean if a field has been set.

### GetLabel

`func (o *ApiKeyMasked) GetLabel() interface{}`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ApiKeyMasked) GetLabelOk() (*interface{}, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ApiKeyMasked) SetLabel(v interface{})`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ApiKeyMasked) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### SetLabelNil

`func (o *ApiKeyMasked) SetLabelNil(b bool)`

 SetLabelNil sets the value for Label to be an explicit nil

### UnsetLabel
`func (o *ApiKeyMasked) UnsetLabel()`

UnsetLabel ensures that no value is present for Label, not even an explicit nil
### GetLastUsedAt

`func (o *ApiKeyMasked) GetLastUsedAt() interface{}`

GetLastUsedAt returns the LastUsedAt field if non-nil, zero value otherwise.

### GetLastUsedAtOk

`func (o *ApiKeyMasked) GetLastUsedAtOk() (*interface{}, bool)`

GetLastUsedAtOk returns a tuple with the LastUsedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUsedAt

`func (o *ApiKeyMasked) SetLastUsedAt(v interface{})`

SetLastUsedAt sets LastUsedAt field to given value.

### HasLastUsedAt

`func (o *ApiKeyMasked) HasLastUsedAt() bool`

HasLastUsedAt returns a boolean if a field has been set.

### SetLastUsedAtNil

`func (o *ApiKeyMasked) SetLastUsedAtNil(b bool)`

 SetLastUsedAtNil sets the value for LastUsedAt to be an explicit nil

### UnsetLastUsedAt
`func (o *ApiKeyMasked) UnsetLastUsedAt()`

UnsetLastUsedAt ensures that no value is present for LastUsedAt, not even an explicit nil
### GetCreatedAt

`func (o *ApiKeyMasked) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *ApiKeyMasked) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *ApiKeyMasked) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *ApiKeyMasked) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


