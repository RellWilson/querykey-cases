# AgentInviteCancelResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**RegistrationId** | Pointer to **interface{}** |  | [optional] 
**Status** | **string** |  | 
**InviteEmail** | **string** |  | 
**InviteName** | Pointer to **interface{}** |  | [optional] 
**InviteLabel** | Pointer to **interface{}** |  | [optional] 
**InviteCancelled** | **bool** |  | 
**Reason** | Pointer to **interface{}** | Operator provided cancellation reason | [optional] 

## Methods

### NewAgentInviteCancelResponse

`func NewAgentInviteCancelResponse(agentId string, status string, inviteEmail string, inviteCancelled bool, ) *AgentInviteCancelResponse`

NewAgentInviteCancelResponse instantiates a new AgentInviteCancelResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentInviteCancelResponseWithDefaults

`func NewAgentInviteCancelResponseWithDefaults() *AgentInviteCancelResponse`

NewAgentInviteCancelResponseWithDefaults instantiates a new AgentInviteCancelResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *AgentInviteCancelResponse) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentInviteCancelResponse) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentInviteCancelResponse) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetRegistrationId

`func (o *AgentInviteCancelResponse) GetRegistrationId() interface{}`

GetRegistrationId returns the RegistrationId field if non-nil, zero value otherwise.

### GetRegistrationIdOk

`func (o *AgentInviteCancelResponse) GetRegistrationIdOk() (*interface{}, bool)`

GetRegistrationIdOk returns a tuple with the RegistrationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationId

`func (o *AgentInviteCancelResponse) SetRegistrationId(v interface{})`

SetRegistrationId sets RegistrationId field to given value.

### HasRegistrationId

`func (o *AgentInviteCancelResponse) HasRegistrationId() bool`

HasRegistrationId returns a boolean if a field has been set.

### SetRegistrationIdNil

`func (o *AgentInviteCancelResponse) SetRegistrationIdNil(b bool)`

 SetRegistrationIdNil sets the value for RegistrationId to be an explicit nil

### UnsetRegistrationId
`func (o *AgentInviteCancelResponse) UnsetRegistrationId()`

UnsetRegistrationId ensures that no value is present for RegistrationId, not even an explicit nil
### GetStatus

`func (o *AgentInviteCancelResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AgentInviteCancelResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AgentInviteCancelResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetInviteEmail

`func (o *AgentInviteCancelResponse) GetInviteEmail() string`

GetInviteEmail returns the InviteEmail field if non-nil, zero value otherwise.

### GetInviteEmailOk

`func (o *AgentInviteCancelResponse) GetInviteEmailOk() (*string, bool)`

GetInviteEmailOk returns a tuple with the InviteEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteEmail

`func (o *AgentInviteCancelResponse) SetInviteEmail(v string)`

SetInviteEmail sets InviteEmail field to given value.


### GetInviteName

`func (o *AgentInviteCancelResponse) GetInviteName() interface{}`

GetInviteName returns the InviteName field if non-nil, zero value otherwise.

### GetInviteNameOk

`func (o *AgentInviteCancelResponse) GetInviteNameOk() (*interface{}, bool)`

GetInviteNameOk returns a tuple with the InviteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteName

`func (o *AgentInviteCancelResponse) SetInviteName(v interface{})`

SetInviteName sets InviteName field to given value.

### HasInviteName

`func (o *AgentInviteCancelResponse) HasInviteName() bool`

HasInviteName returns a boolean if a field has been set.

### SetInviteNameNil

`func (o *AgentInviteCancelResponse) SetInviteNameNil(b bool)`

 SetInviteNameNil sets the value for InviteName to be an explicit nil

### UnsetInviteName
`func (o *AgentInviteCancelResponse) UnsetInviteName()`

UnsetInviteName ensures that no value is present for InviteName, not even an explicit nil
### GetInviteLabel

`func (o *AgentInviteCancelResponse) GetInviteLabel() interface{}`

GetInviteLabel returns the InviteLabel field if non-nil, zero value otherwise.

### GetInviteLabelOk

`func (o *AgentInviteCancelResponse) GetInviteLabelOk() (*interface{}, bool)`

GetInviteLabelOk returns a tuple with the InviteLabel field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteLabel

`func (o *AgentInviteCancelResponse) SetInviteLabel(v interface{})`

SetInviteLabel sets InviteLabel field to given value.

### HasInviteLabel

`func (o *AgentInviteCancelResponse) HasInviteLabel() bool`

HasInviteLabel returns a boolean if a field has been set.

### SetInviteLabelNil

`func (o *AgentInviteCancelResponse) SetInviteLabelNil(b bool)`

 SetInviteLabelNil sets the value for InviteLabel to be an explicit nil

### UnsetInviteLabel
`func (o *AgentInviteCancelResponse) UnsetInviteLabel()`

UnsetInviteLabel ensures that no value is present for InviteLabel, not even an explicit nil
### GetInviteCancelled

`func (o *AgentInviteCancelResponse) GetInviteCancelled() bool`

GetInviteCancelled returns the InviteCancelled field if non-nil, zero value otherwise.

### GetInviteCancelledOk

`func (o *AgentInviteCancelResponse) GetInviteCancelledOk() (*bool, bool)`

GetInviteCancelledOk returns a tuple with the InviteCancelled field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteCancelled

`func (o *AgentInviteCancelResponse) SetInviteCancelled(v bool)`

SetInviteCancelled sets InviteCancelled field to given value.


### GetReason

`func (o *AgentInviteCancelResponse) GetReason() interface{}`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *AgentInviteCancelResponse) GetReasonOk() (*interface{}, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *AgentInviteCancelResponse) SetReason(v interface{})`

SetReason sets Reason field to given value.

### HasReason

`func (o *AgentInviteCancelResponse) HasReason() bool`

HasReason returns a boolean if a field has been set.

### SetReasonNil

`func (o *AgentInviteCancelResponse) SetReasonNil(b bool)`

 SetReasonNil sets the value for Reason to be an explicit nil

### UnsetReason
`func (o *AgentInviteCancelResponse) UnsetReason()`

UnsetReason ensures that no value is present for Reason, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


