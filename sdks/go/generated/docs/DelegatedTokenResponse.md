# DelegatedTokenResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DelegatedToken** | **string** | Secret token value (single use) | 
**ExpiresAt** | **time.Time** | Expiration timestamp in ISO-8601 | 
**Scopes** | **[]string** | Granted scopes (always agent:register for v1.0) | 

## Methods

### NewDelegatedTokenResponse

`func NewDelegatedTokenResponse(delegatedToken string, expiresAt time.Time, scopes []string, ) *DelegatedTokenResponse`

NewDelegatedTokenResponse instantiates a new DelegatedTokenResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewDelegatedTokenResponseWithDefaults

`func NewDelegatedTokenResponseWithDefaults() *DelegatedTokenResponse`

NewDelegatedTokenResponseWithDefaults instantiates a new DelegatedTokenResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDelegatedToken

`func (o *DelegatedTokenResponse) GetDelegatedToken() string`

GetDelegatedToken returns the DelegatedToken field if non-nil, zero value otherwise.

### GetDelegatedTokenOk

`func (o *DelegatedTokenResponse) GetDelegatedTokenOk() (*string, bool)`

GetDelegatedTokenOk returns a tuple with the DelegatedToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelegatedToken

`func (o *DelegatedTokenResponse) SetDelegatedToken(v string)`

SetDelegatedToken sets DelegatedToken field to given value.


### GetExpiresAt

`func (o *DelegatedTokenResponse) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *DelegatedTokenResponse) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *DelegatedTokenResponse) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.


### GetScopes

`func (o *DelegatedTokenResponse) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *DelegatedTokenResponse) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *DelegatedTokenResponse) SetScopes(v []string)`

SetScopes sets Scopes field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


