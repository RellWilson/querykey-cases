# AgentRegistrationResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**ApiKey** | **string** | Issued agent-scoped API key secret | 
**Scopes** | **[]string** |  | 
**Verified** | **bool** | Indicates whether the agent is auto-verified on creation | 
**Status** | **string** |  | 
**OwnerUserId** | **string** | Account that owns the agent | 
**SeatUsage** | Pointer to **interface{}** | Latest recorded seat usage for the owner | [optional] 
**SeatLimit** | Pointer to **interface{}** | Seat limit in effect for the owner | [optional] 
**InviteEmail** | Pointer to **interface{}** | Invite email that claimed the agent (invite flow only) | [optional] 
**InviteName** | Pointer to **interface{}** | Owner name associated with the invite flow | [optional] 
**OwnerEmail** | **string** | Owner email awaiting confirmation | 
**InviteExpiresAt** | **time.Time** | ISO timestamp when the invite expires | 
**InviteDelivery** | **string** | Primary delivery channel for the invite | 
**InviteToken** | Pointer to **interface{}** | Invite token returned in non-production environments for testing | [optional] 

## Methods

### NewAgentRegistrationResponse

`func NewAgentRegistrationResponse(agentId string, apiKey string, scopes []string, verified bool, status string, ownerUserId string, ownerEmail string, inviteExpiresAt time.Time, inviteDelivery string, ) *AgentRegistrationResponse`

NewAgentRegistrationResponse instantiates a new AgentRegistrationResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRegistrationResponseWithDefaults

`func NewAgentRegistrationResponseWithDefaults() *AgentRegistrationResponse`

NewAgentRegistrationResponseWithDefaults instantiates a new AgentRegistrationResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *AgentRegistrationResponse) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentRegistrationResponse) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentRegistrationResponse) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetApiKey

`func (o *AgentRegistrationResponse) GetApiKey() string`

GetApiKey returns the ApiKey field if non-nil, zero value otherwise.

### GetApiKeyOk

`func (o *AgentRegistrationResponse) GetApiKeyOk() (*string, bool)`

GetApiKeyOk returns a tuple with the ApiKey field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetApiKey

`func (o *AgentRegistrationResponse) SetApiKey(v string)`

SetApiKey sets ApiKey field to given value.


### GetScopes

`func (o *AgentRegistrationResponse) GetScopes() []string`

GetScopes returns the Scopes field if non-nil, zero value otherwise.

### GetScopesOk

`func (o *AgentRegistrationResponse) GetScopesOk() (*[]string, bool)`

GetScopesOk returns a tuple with the Scopes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetScopes

`func (o *AgentRegistrationResponse) SetScopes(v []string)`

SetScopes sets Scopes field to given value.


### GetVerified

`func (o *AgentRegistrationResponse) GetVerified() bool`

GetVerified returns the Verified field if non-nil, zero value otherwise.

### GetVerifiedOk

`func (o *AgentRegistrationResponse) GetVerifiedOk() (*bool, bool)`

GetVerifiedOk returns a tuple with the Verified field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVerified

`func (o *AgentRegistrationResponse) SetVerified(v bool)`

SetVerified sets Verified field to given value.


### GetStatus

`func (o *AgentRegistrationResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AgentRegistrationResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AgentRegistrationResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetOwnerUserId

`func (o *AgentRegistrationResponse) GetOwnerUserId() string`

GetOwnerUserId returns the OwnerUserId field if non-nil, zero value otherwise.

### GetOwnerUserIdOk

`func (o *AgentRegistrationResponse) GetOwnerUserIdOk() (*string, bool)`

GetOwnerUserIdOk returns a tuple with the OwnerUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerUserId

`func (o *AgentRegistrationResponse) SetOwnerUserId(v string)`

SetOwnerUserId sets OwnerUserId field to given value.


### GetSeatUsage

`func (o *AgentRegistrationResponse) GetSeatUsage() interface{}`

GetSeatUsage returns the SeatUsage field if non-nil, zero value otherwise.

### GetSeatUsageOk

`func (o *AgentRegistrationResponse) GetSeatUsageOk() (*interface{}, bool)`

GetSeatUsageOk returns a tuple with the SeatUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeatUsage

`func (o *AgentRegistrationResponse) SetSeatUsage(v interface{})`

SetSeatUsage sets SeatUsage field to given value.

### HasSeatUsage

`func (o *AgentRegistrationResponse) HasSeatUsage() bool`

HasSeatUsage returns a boolean if a field has been set.

### SetSeatUsageNil

`func (o *AgentRegistrationResponse) SetSeatUsageNil(b bool)`

 SetSeatUsageNil sets the value for SeatUsage to be an explicit nil

### UnsetSeatUsage
`func (o *AgentRegistrationResponse) UnsetSeatUsage()`

UnsetSeatUsage ensures that no value is present for SeatUsage, not even an explicit nil
### GetSeatLimit

`func (o *AgentRegistrationResponse) GetSeatLimit() interface{}`

GetSeatLimit returns the SeatLimit field if non-nil, zero value otherwise.

### GetSeatLimitOk

`func (o *AgentRegistrationResponse) GetSeatLimitOk() (*interface{}, bool)`

GetSeatLimitOk returns a tuple with the SeatLimit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeatLimit

`func (o *AgentRegistrationResponse) SetSeatLimit(v interface{})`

SetSeatLimit sets SeatLimit field to given value.

### HasSeatLimit

`func (o *AgentRegistrationResponse) HasSeatLimit() bool`

HasSeatLimit returns a boolean if a field has been set.

### SetSeatLimitNil

`func (o *AgentRegistrationResponse) SetSeatLimitNil(b bool)`

 SetSeatLimitNil sets the value for SeatLimit to be an explicit nil

### UnsetSeatLimit
`func (o *AgentRegistrationResponse) UnsetSeatLimit()`

UnsetSeatLimit ensures that no value is present for SeatLimit, not even an explicit nil
### GetInviteEmail

`func (o *AgentRegistrationResponse) GetInviteEmail() interface{}`

GetInviteEmail returns the InviteEmail field if non-nil, zero value otherwise.

### GetInviteEmailOk

`func (o *AgentRegistrationResponse) GetInviteEmailOk() (*interface{}, bool)`

GetInviteEmailOk returns a tuple with the InviteEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteEmail

`func (o *AgentRegistrationResponse) SetInviteEmail(v interface{})`

SetInviteEmail sets InviteEmail field to given value.

### HasInviteEmail

`func (o *AgentRegistrationResponse) HasInviteEmail() bool`

HasInviteEmail returns a boolean if a field has been set.

### SetInviteEmailNil

`func (o *AgentRegistrationResponse) SetInviteEmailNil(b bool)`

 SetInviteEmailNil sets the value for InviteEmail to be an explicit nil

### UnsetInviteEmail
`func (o *AgentRegistrationResponse) UnsetInviteEmail()`

UnsetInviteEmail ensures that no value is present for InviteEmail, not even an explicit nil
### GetInviteName

`func (o *AgentRegistrationResponse) GetInviteName() interface{}`

GetInviteName returns the InviteName field if non-nil, zero value otherwise.

### GetInviteNameOk

`func (o *AgentRegistrationResponse) GetInviteNameOk() (*interface{}, bool)`

GetInviteNameOk returns a tuple with the InviteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteName

`func (o *AgentRegistrationResponse) SetInviteName(v interface{})`

SetInviteName sets InviteName field to given value.

### HasInviteName

`func (o *AgentRegistrationResponse) HasInviteName() bool`

HasInviteName returns a boolean if a field has been set.

### SetInviteNameNil

`func (o *AgentRegistrationResponse) SetInviteNameNil(b bool)`

 SetInviteNameNil sets the value for InviteName to be an explicit nil

### UnsetInviteName
`func (o *AgentRegistrationResponse) UnsetInviteName()`

UnsetInviteName ensures that no value is present for InviteName, not even an explicit nil
### GetOwnerEmail

`func (o *AgentRegistrationResponse) GetOwnerEmail() string`

GetOwnerEmail returns the OwnerEmail field if non-nil, zero value otherwise.

### GetOwnerEmailOk

`func (o *AgentRegistrationResponse) GetOwnerEmailOk() (*string, bool)`

GetOwnerEmailOk returns a tuple with the OwnerEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerEmail

`func (o *AgentRegistrationResponse) SetOwnerEmail(v string)`

SetOwnerEmail sets OwnerEmail field to given value.


### GetInviteExpiresAt

`func (o *AgentRegistrationResponse) GetInviteExpiresAt() time.Time`

GetInviteExpiresAt returns the InviteExpiresAt field if non-nil, zero value otherwise.

### GetInviteExpiresAtOk

`func (o *AgentRegistrationResponse) GetInviteExpiresAtOk() (*time.Time, bool)`

GetInviteExpiresAtOk returns a tuple with the InviteExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteExpiresAt

`func (o *AgentRegistrationResponse) SetInviteExpiresAt(v time.Time)`

SetInviteExpiresAt sets InviteExpiresAt field to given value.


### GetInviteDelivery

`func (o *AgentRegistrationResponse) GetInviteDelivery() string`

GetInviteDelivery returns the InviteDelivery field if non-nil, zero value otherwise.

### GetInviteDeliveryOk

`func (o *AgentRegistrationResponse) GetInviteDeliveryOk() (*string, bool)`

GetInviteDeliveryOk returns a tuple with the InviteDelivery field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteDelivery

`func (o *AgentRegistrationResponse) SetInviteDelivery(v string)`

SetInviteDelivery sets InviteDelivery field to given value.


### GetInviteToken

`func (o *AgentRegistrationResponse) GetInviteToken() interface{}`

GetInviteToken returns the InviteToken field if non-nil, zero value otherwise.

### GetInviteTokenOk

`func (o *AgentRegistrationResponse) GetInviteTokenOk() (*interface{}, bool)`

GetInviteTokenOk returns a tuple with the InviteToken field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteToken

`func (o *AgentRegistrationResponse) SetInviteToken(v interface{})`

SetInviteToken sets InviteToken field to given value.

### HasInviteToken

`func (o *AgentRegistrationResponse) HasInviteToken() bool`

HasInviteToken returns a boolean if a field has been set.

### SetInviteTokenNil

`func (o *AgentRegistrationResponse) SetInviteTokenNil(b bool)`

 SetInviteTokenNil sets the value for InviteToken to be an explicit nil

### UnsetInviteToken
`func (o *AgentRegistrationResponse) UnsetInviteToken()`

UnsetInviteToken ensures that no value is present for InviteToken, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


