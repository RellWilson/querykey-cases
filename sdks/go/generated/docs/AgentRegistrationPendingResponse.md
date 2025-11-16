# AgentRegistrationPendingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**Status** | **string** |  | 
**OwnerEmail** | **string** | Owner email awaiting confirmation | 
**InviteExpiresAt** | **time.Time** | ISO timestamp when the invite expires | 
**InviteDelivery** | **string** | Primary delivery channel for the invite | 
**InviteToken** | Pointer to **interface{}** | Invite token returned in non-production environments for testing | [optional] 

## Methods

### NewAgentRegistrationPendingResponse

`func NewAgentRegistrationPendingResponse(agentId string, status string, ownerEmail string, inviteExpiresAt time.Time, inviteDelivery string, ) *AgentRegistrationPendingResponse`

NewAgentRegistrationPendingResponse instantiates a new AgentRegistrationPendingResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRegistrationPendingResponseWithDefaults

`func NewAgentRegistrationPendingResponseWithDefaults() *AgentRegistrationPendingResponse`

NewAgentRegistrationPendingResponseWithDefaults instantiates a new AgentRegistrationPendingResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *AgentRegistrationPendingResponse) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentRegistrationPendingResponse) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentRegistrationPendingResponse) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetStatus

`func (o *AgentRegistrationPendingResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AgentRegistrationPendingResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AgentRegistrationPendingResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetOwnerEmail

`func (o *AgentRegistrationPendingResponse) GetOwnerEmail() string`

GetOwnerEmail returns the OwnerEmail field if non-nil, zero value otherwise.

### GetOwnerEmailOk

`func (o *AgentRegistrationPendingResponse) GetOwnerEmailOk() (*string, bool)`

GetOwnerEmailOk returns a tuple with the OwnerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerEmail

`func (o *AgentRegistrationPendingResponse) SetOwnerEmail(v string)`

SetOwnerEmail sets OwnerEmail field to given value.


### GetInviteExpiresAt

`func (o *AgentRegistrationPendingResponse) GetInviteExpiresAt() time.Time`

GetInviteExpiresAt returns the InviteExpiresAt field if non-nil, zero value otherwise.

### GetInviteExpiresAtOk

`func (o *AgentRegistrationPendingResponse) GetInviteExpiresAtOk() (*time.Time, bool)`

GetInviteExpiresAtOk returns a tuple with the InviteExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteExpiresAt

`func (o *AgentRegistrationPendingResponse) SetInviteExpiresAt(v time.Time)`

SetInviteExpiresAt sets InviteExpiresAt field to given value.


### GetInviteDelivery

`func (o *AgentRegistrationPendingResponse) GetInviteDelivery() string`

GetInviteDelivery returns the InviteDelivery field if non-nil, zero value otherwise.

### GetInviteDeliveryOk

`func (o *AgentRegistrationPendingResponse) GetInviteDeliveryOk() (*string, bool)`

GetInviteDeliveryOk returns a tuple with the InviteDelivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteDelivery

`func (o *AgentRegistrationPendingResponse) SetInviteDelivery(v string)`

SetInviteDelivery sets InviteDelivery field to given value.


### GetInviteToken

`func (o *AgentRegistrationPendingResponse) GetInviteToken() interface{}`

GetInviteToken returns the InviteToken field if non-nil, zero value otherwise.

### GetInviteTokenOk

`func (o *AgentRegistrationPendingResponse) GetInviteTokenOk() (*interface{}, bool)`

GetInviteTokenOk returns a tuple with the InviteToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteToken

`func (o *AgentRegistrationPendingResponse) SetInviteToken(v interface{})`

SetInviteToken sets InviteToken field to given value.

### HasInviteToken

`func (o *AgentRegistrationPendingResponse) HasInviteToken() bool`

HasInviteToken returns a boolean if a field has been set.

### SetInviteTokenNil

`func (o *AgentRegistrationPendingResponse) SetInviteTokenNil(b bool)`

 SetInviteTokenNil sets the value for InviteToken to be an explicit nil

### UnsetInviteToken
`func (o *AgentRegistrationPendingResponse) UnsetInviteToken()`

UnsetInviteToken ensures that no value is present for InviteToken, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


