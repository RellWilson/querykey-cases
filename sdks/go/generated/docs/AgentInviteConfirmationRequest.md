# AgentInviteConfirmationRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Token** | **string** | Invite token delivered via email | 
**InviteToken** | Pointer to **interface{}** | Alias for token supported for backward compatibility | [optional] 

## Methods

### NewAgentInviteConfirmationRequest

`func NewAgentInviteConfirmationRequest(token string, ) *AgentInviteConfirmationRequest`

NewAgentInviteConfirmationRequest instantiates a new AgentInviteConfirmationRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentInviteConfirmationRequestWithDefaults

`func NewAgentInviteConfirmationRequestWithDefaults() *AgentInviteConfirmationRequest`

NewAgentInviteConfirmationRequestWithDefaults instantiates a new AgentInviteConfirmationRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetToken

`func (o *AgentInviteConfirmationRequest) GetToken() string`

GetToken returns the Token field if non-nil, zero value otherwise.

### GetTokenOk

`func (o *AgentInviteConfirmationRequest) GetTokenOk() (*string, bool)`

GetTokenOk returns a tuple with the Token field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToken

`func (o *AgentInviteConfirmationRequest) SetToken(v string)`

SetToken sets Token field to given value.


### GetInviteToken

`func (o *AgentInviteConfirmationRequest) GetInviteToken() interface{}`

GetInviteToken returns the InviteToken field if non-nil, zero value otherwise.

### GetInviteTokenOk

`func (o *AgentInviteConfirmationRequest) GetInviteTokenOk() (*interface{}, bool)`

GetInviteTokenOk returns a tuple with the InviteToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteToken

`func (o *AgentInviteConfirmationRequest) SetInviteToken(v interface{})`

SetInviteToken sets InviteToken field to given value.

### HasInviteToken

`func (o *AgentInviteConfirmationRequest) HasInviteToken() bool`

HasInviteToken returns a boolean if a field has been set.

### SetInviteTokenNil

`func (o *AgentInviteConfirmationRequest) SetInviteTokenNil(b bool)`

 SetInviteTokenNil sets the value for InviteToken to be an explicit nil

### UnsetInviteToken
`func (o *AgentInviteConfirmationRequest) UnsetInviteToken()`

UnsetInviteToken ensures that no value is present for InviteToken, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


