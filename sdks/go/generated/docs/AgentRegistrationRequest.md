# AgentRegistrationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Challenge** | **string** | Challenge value returned by GET /api/v1/registration/challenge | 
**PublicKey** | **string** | Hex-encoded 32-byte public key | 
**Nonce** | [**AgentRegistrationRequestNonce**](AgentRegistrationRequestNonce.md) |  | 
**Label** | Pointer to **interface{}** | Optional human-friendly label for the agent | [optional] 
**DelegatedToken** | Pointer to **interface{}** | Single-use delegated token issued by the owner. Not permitted for invite flow. | [optional] 
**Owner** | Pointer to [**NullableAgentRegistrationOwner**](AgentRegistrationOwner.md) |  | [optional] 

## Methods

### NewAgentRegistrationRequest

`func NewAgentRegistrationRequest(challenge string, publicKey string, nonce AgentRegistrationRequestNonce, ) *AgentRegistrationRequest`

NewAgentRegistrationRequest instantiates a new AgentRegistrationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRegistrationRequestWithDefaults

`func NewAgentRegistrationRequestWithDefaults() *AgentRegistrationRequest`

NewAgentRegistrationRequestWithDefaults instantiates a new AgentRegistrationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChallenge

`func (o *AgentRegistrationRequest) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *AgentRegistrationRequest) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *AgentRegistrationRequest) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.


### GetPublicKey

`func (o *AgentRegistrationRequest) GetPublicKey() string`

GetPublicKey returns the PublicKey field if non-nil, zero value otherwise.

### GetPublicKeyOk

`func (o *AgentRegistrationRequest) GetPublicKeyOk() (*string, bool)`

GetPublicKeyOk returns a tuple with the PublicKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublicKey

`func (o *AgentRegistrationRequest) SetPublicKey(v string)`

SetPublicKey sets PublicKey field to given value.


### GetNonce

`func (o *AgentRegistrationRequest) GetNonce() AgentRegistrationRequestNonce`

GetNonce returns the Nonce field if non-nil, zero value otherwise.

### GetNonceOk

`func (o *AgentRegistrationRequest) GetNonceOk() (*AgentRegistrationRequestNonce, bool)`

GetNonceOk returns a tuple with the Nonce field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNonce

`func (o *AgentRegistrationRequest) SetNonce(v AgentRegistrationRequestNonce)`

SetNonce sets Nonce field to given value.


### GetLabel

`func (o *AgentRegistrationRequest) GetLabel() interface{}`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *AgentRegistrationRequest) GetLabelOk() (*interface{}, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *AgentRegistrationRequest) SetLabel(v interface{})`

SetLabel sets Label field to given value.

### HasLabel

`func (o *AgentRegistrationRequest) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### SetLabelNil

`func (o *AgentRegistrationRequest) SetLabelNil(b bool)`

 SetLabelNil sets the value for Label to be an explicit nil

### UnsetLabel
`func (o *AgentRegistrationRequest) UnsetLabel()`

UnsetLabel ensures that no value is present for Label, not even an explicit nil
### GetDelegatedToken

`func (o *AgentRegistrationRequest) GetDelegatedToken() interface{}`

GetDelegatedToken returns the DelegatedToken field if non-nil, zero value otherwise.

### GetDelegatedTokenOk

`func (o *AgentRegistrationRequest) GetDelegatedTokenOk() (*interface{}, bool)`

GetDelegatedTokenOk returns a tuple with the DelegatedToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDelegatedToken

`func (o *AgentRegistrationRequest) SetDelegatedToken(v interface{})`

SetDelegatedToken sets DelegatedToken field to given value.

### HasDelegatedToken

`func (o *AgentRegistrationRequest) HasDelegatedToken() bool`

HasDelegatedToken returns a boolean if a field has been set.

### SetDelegatedTokenNil

`func (o *AgentRegistrationRequest) SetDelegatedTokenNil(b bool)`

 SetDelegatedTokenNil sets the value for DelegatedToken to be an explicit nil

### UnsetDelegatedToken
`func (o *AgentRegistrationRequest) UnsetDelegatedToken()`

UnsetDelegatedToken ensures that no value is present for DelegatedToken, not even an explicit nil
### GetOwner

`func (o *AgentRegistrationRequest) GetOwner() AgentRegistrationOwner`

GetOwner returns the Owner field if non-nil, zero value otherwise.

### GetOwnerOk

`func (o *AgentRegistrationRequest) GetOwnerOk() (*AgentRegistrationOwner, bool)`

GetOwnerOk returns a tuple with the Owner field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwner

`func (o *AgentRegistrationRequest) SetOwner(v AgentRegistrationOwner)`

SetOwner sets Owner field to given value.

### HasOwner

`func (o *AgentRegistrationRequest) HasOwner() bool`

HasOwner returns a boolean if a field has been set.

### SetOwnerNil

`func (o *AgentRegistrationRequest) SetOwnerNil(b bool)`

 SetOwnerNil sets the value for Owner to be an explicit nil

### UnsetOwner
`func (o *AgentRegistrationRequest) UnsetOwner()`

UnsetOwner ensures that no value is present for Owner, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


