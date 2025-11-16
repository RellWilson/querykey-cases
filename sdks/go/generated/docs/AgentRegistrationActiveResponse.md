# AgentRegistrationActiveResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**ApiKey** | **string** | Issued agent-scoped API key secret | 
**Scopes** | **[]string** |  | 
**Verified** | **bool** | Indicates whether the agent is auto-verified on creation | 
**Status** | **string** | Current lifecycle status | 
**OwnerUserId** | **string** | Account that owns the agent | 
**SeatUsage** | Pointer to **interface{}** | Latest recorded seat usage for the owner | [optional] 
**SeatLimit** | Pointer to **interface{}** | Seat limit in effect for the owner | [optional] 
**InviteEmail** | Pointer to **interface{}** | Invite email that claimed the agent (invite flow only) | [optional] 
**InviteName** | Pointer to **interface{}** | Owner name associated with the invite flow | [optional] 

## Methods

### NewAgentRegistrationActiveResponse

`func NewAgentRegistrationActiveResponse(agentId string, apiKey string, scopes []string, verified bool, status string, ownerUserId string, ) *AgentRegistrationActiveResponse`

NewAgentRegistrationActiveResponse instantiates a new AgentRegistrationActiveResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRegistrationActiveResponseWithDefaults

`func NewAgentRegistrationActiveResponseWithDefaults() *AgentRegistrationActiveResponse`

NewAgentRegistrationActiveResponseWithDefaults instantiates a new AgentRegistrationActiveResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *AgentRegistrationActiveResponse) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentRegistrationActiveResponse) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentRegistrationActiveResponse) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetApiKey

`func (o *AgentRegistrationActiveResponse) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *AgentRegistrationActiveResponse) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *AgentRegistrationActiveResponse) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.


### GetScopes

`func (o *AgentRegistrationActiveResponse) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *AgentRegistrationActiveResponse) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *AgentRegistrationActiveResponse) SetScopes(v []string)`

SetScopes sets Scopes field to given value.


### GetVerified

`func (o *AgentRegistrationActiveResponse) GetVerified() bool`

GetVerified returns the Verified field if non-nil, zero value otherwise.

### GetVerifiedOk

`func (o *AgentRegistrationActiveResponse) GetVerifiedOk() (*bool, bool)`

GetVerifiedOk returns a tuple with the Verified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerified

`func (o *AgentRegistrationActiveResponse) SetVerified(v bool)`

SetVerified sets Verified field to given value.


### GetStatus

`func (o *AgentRegistrationActiveResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AgentRegistrationActiveResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AgentRegistrationActiveResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetOwnerUserId

`func (o *AgentRegistrationActiveResponse) GetOwnerUserId() string`

GetOwnerUserId returns the OwnerUserId field if non-nil, zero value otherwise.

### GetOwnerUserIdOk

`func (o *AgentRegistrationActiveResponse) GetOwnerUserIdOk() (*string, bool)`

GetOwnerUserIdOk returns a tuple with the OwnerUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerUserId

`func (o *AgentRegistrationActiveResponse) SetOwnerUserId(v string)`

SetOwnerUserId sets OwnerUserId field to given value.


### GetSeatUsage

`func (o *AgentRegistrationActiveResponse) GetSeatUsage() interface{}`

GetSeatUsage returns the SeatUsage field if non-nil, zero value otherwise.

### GetSeatUsageOk

`func (o *AgentRegistrationActiveResponse) GetSeatUsageOk() (*interface{}, bool)`

GetSeatUsageOk returns a tuple with the SeatUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeatUsage

`func (o *AgentRegistrationActiveResponse) SetSeatUsage(v interface{})`

SetSeatUsage sets SeatUsage field to given value.

### HasSeatUsage

`func (o *AgentRegistrationActiveResponse) HasSeatUsage() bool`

HasSeatUsage returns a boolean if a field has been set.

### SetSeatUsageNil

`func (o *AgentRegistrationActiveResponse) SetSeatUsageNil(b bool)`

 SetSeatUsageNil sets the value for SeatUsage to be an explicit nil

### UnsetSeatUsage
`func (o *AgentRegistrationActiveResponse) UnsetSeatUsage()`

UnsetSeatUsage ensures that no value is present for SeatUsage, not even an explicit nil
### GetSeatLimit

`func (o *AgentRegistrationActiveResponse) GetSeatLimit() interface{}`

GetSeatLimit returns the SeatLimit field if non-nil, zero value otherwise.

### GetSeatLimitOk

`func (o *AgentRegistrationActiveResponse) GetSeatLimitOk() (*interface{}, bool)`

GetSeatLimitOk returns a tuple with the SeatLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeatLimit

`func (o *AgentRegistrationActiveResponse) SetSeatLimit(v interface{})`

SetSeatLimit sets SeatLimit field to given value.

### HasSeatLimit

`func (o *AgentRegistrationActiveResponse) HasSeatLimit() bool`

HasSeatLimit returns a boolean if a field has been set.

### SetSeatLimitNil

`func (o *AgentRegistrationActiveResponse) SetSeatLimitNil(b bool)`

 SetSeatLimitNil sets the value for SeatLimit to be an explicit nil

### UnsetSeatLimit
`func (o *AgentRegistrationActiveResponse) UnsetSeatLimit()`

UnsetSeatLimit ensures that no value is present for SeatLimit, not even an explicit nil
### GetInviteEmail

`func (o *AgentRegistrationActiveResponse) GetInviteEmail() interface{}`

GetInviteEmail returns the InviteEmail field if non-nil, zero value otherwise.

### GetInviteEmailOk

`func (o *AgentRegistrationActiveResponse) GetInviteEmailOk() (*interface{}, bool)`

GetInviteEmailOk returns a tuple with the InviteEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteEmail

`func (o *AgentRegistrationActiveResponse) SetInviteEmail(v interface{})`

SetInviteEmail sets InviteEmail field to given value.

### HasInviteEmail

`func (o *AgentRegistrationActiveResponse) HasInviteEmail() bool`

HasInviteEmail returns a boolean if a field has been set.

### SetInviteEmailNil

`func (o *AgentRegistrationActiveResponse) SetInviteEmailNil(b bool)`

 SetInviteEmailNil sets the value for InviteEmail to be an explicit nil

### UnsetInviteEmail
`func (o *AgentRegistrationActiveResponse) UnsetInviteEmail()`

UnsetInviteEmail ensures that no value is present for InviteEmail, not even an explicit nil
### GetInviteName

`func (o *AgentRegistrationActiveResponse) GetInviteName() interface{}`

GetInviteName returns the InviteName field if non-nil, zero value otherwise.

### GetInviteNameOk

`func (o *AgentRegistrationActiveResponse) GetInviteNameOk() (*interface{}, bool)`

GetInviteNameOk returns a tuple with the InviteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteName

`func (o *AgentRegistrationActiveResponse) SetInviteName(v interface{})`

SetInviteName sets InviteName field to given value.

### HasInviteName

`func (o *AgentRegistrationActiveResponse) HasInviteName() bool`

HasInviteName returns a boolean if a field has been set.

### SetInviteNameNil

`func (o *AgentRegistrationActiveResponse) SetInviteNameNil(b bool)`

 SetInviteNameNil sets the value for InviteName to be an explicit nil

### UnsetInviteName
`func (o *AgentRegistrationActiveResponse) UnsetInviteName()`

UnsetInviteName ensures that no value is present for InviteName, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


