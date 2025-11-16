# ApiAuthApiKeysPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Label** | Pointer to **string** |  | [optional] 
**Scopes** | Pointer to **[]string** | Optional scopes to associate with key | [optional] 

## Methods

### NewApiAuthApiKeysPostRequest

`func NewApiAuthApiKeysPostRequest() *ApiAuthApiKeysPostRequest`

NewApiAuthApiKeysPostRequest instantiates a new ApiAuthApiKeysPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAuthApiKeysPostRequestWithDefaults

`func NewApiAuthApiKeysPostRequestWithDefaults() *ApiAuthApiKeysPostRequest`

NewApiAuthApiKeysPostRequestWithDefaults instantiates a new ApiAuthApiKeysPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLabel

`func (o *ApiAuthApiKeysPostRequest) GetLabel() string`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *ApiAuthApiKeysPostRequest) GetLabelOk() (*string, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *ApiAuthApiKeysPostRequest) SetLabel(v string)`

SetLabel sets Label field to given value.

### HasLabel

`func (o *ApiAuthApiKeysPostRequest) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### GetScopes

`func (o *ApiAuthApiKeysPostRequest) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *ApiAuthApiKeysPostRequest) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *ApiAuthApiKeysPostRequest) SetScopes(v []string)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *ApiAuthApiKeysPostRequest) HasScopes() bool`

HasScopes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


