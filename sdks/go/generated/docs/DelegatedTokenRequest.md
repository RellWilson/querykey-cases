# DelegatedTokenRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpiresIn** | Pointer to **interface{}** | Requested TTL in seconds; server enforces configured bounds | [optional] 
**Scopes** | Pointer to **[]string** | Optional scopes list; only agent:register is currently supported | [optional] 

## Methods

### NewDelegatedTokenRequest

`func NewDelegatedTokenRequest() *DelegatedTokenRequest`

NewDelegatedTokenRequest instantiates a new DelegatedTokenRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDelegatedTokenRequestWithDefaults

`func NewDelegatedTokenRequestWithDefaults() *DelegatedTokenRequest`

NewDelegatedTokenRequestWithDefaults instantiates a new DelegatedTokenRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpiresIn

`func (o *DelegatedTokenRequest) GetExpiresIn() interface{}`

GetExpiresIn returns the ExpiresIn field if non-nil, zero value otherwise.

### GetExpiresInOk

`func (o *DelegatedTokenRequest) GetExpiresInOk() (*interface{}, bool)`

GetExpiresInOk returns a tuple with the ExpiresIn field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresIn

`func (o *DelegatedTokenRequest) SetExpiresIn(v interface{})`

SetExpiresIn sets ExpiresIn field to given value.

### HasExpiresIn

`func (o *DelegatedTokenRequest) HasExpiresIn() bool`

HasExpiresIn returns a boolean if a field has been set.

### SetExpiresInNil

`func (o *DelegatedTokenRequest) SetExpiresInNil(b bool)`

 SetExpiresInNil sets the value for ExpiresIn to be an explicit nil

### UnsetExpiresIn
`func (o *DelegatedTokenRequest) UnsetExpiresIn()`

UnsetExpiresIn ensures that no value is present for ExpiresIn, not even an explicit nil
### GetScopes

`func (o *DelegatedTokenRequest) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *DelegatedTokenRequest) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *DelegatedTokenRequest) SetScopes(v []string)`

SetScopes sets Scopes field to given value.

### HasScopes

`func (o *DelegatedTokenRequest) HasScopes() bool`

HasScopes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


