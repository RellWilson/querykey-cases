# PendingAgentInvite

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**RegistrationId** | Pointer to **interface{}** |  | [optional] 
**Label** | Pointer to **interface{}** | Agent label recorded during invite creation | [optional] 
**InviteEmail** | **string** |  | 
**InviteName** | Pointer to **interface{}** |  | [optional] 
**Status** | **string** |  | 
**InviteExpiresAt** | Pointer to **interface{}** |  | [optional] 
**CreatedAt** | Pointer to **interface{}** |  | [optional] 
**UpdatedAt** | Pointer to **interface{}** |  | [optional] 
**ChallengeDifficulty** | Pointer to **interface{}** | Proof-of-work difficulty tied to the invite challenge | [optional] 
**Metadata** | Pointer to **map[string]interface{}** | Opaque metadata captured for invite lifecycle | [optional] 
**IsExpired** | **bool** |  | 
**ResendCount** | **int32** |  | 
**InviteLastSentAt** | Pointer to **interface{}** |  | [optional] 
**InviteLastSentBy** | Pointer to [**PendingAgentInviteInviteLastSentBy**](PendingAgentInviteInviteLastSentBy.md) |  | [optional] 
**ExpiresInSeconds** | Pointer to **interface{}** | Remaining seconds until expiry (negative when expired) | [optional] 

## Methods

### NewPendingAgentInvite

`func NewPendingAgentInvite(agentId string, inviteEmail string, status string, isExpired bool, resendCount int32, ) *PendingAgentInvite`

NewPendingAgentInvite instantiates a new PendingAgentInvite object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPendingAgentInviteWithDefaults

`func NewPendingAgentInviteWithDefaults() *PendingAgentInvite`

NewPendingAgentInviteWithDefaults instantiates a new PendingAgentInvite object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *PendingAgentInvite) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *PendingAgentInvite) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *PendingAgentInvite) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetRegistrationId

`func (o *PendingAgentInvite) GetRegistrationId() interface{}`

GetRegistrationId returns the RegistrationId field if non-nil, zero value otherwise.

### GetRegistrationIdOk

`func (o *PendingAgentInvite) GetRegistrationIdOk() (*interface{}, bool)`

GetRegistrationIdOk returns a tuple with the RegistrationId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRegistrationId

`func (o *PendingAgentInvite) SetRegistrationId(v interface{})`

SetRegistrationId sets RegistrationId field to given value.

### HasRegistrationId

`func (o *PendingAgentInvite) HasRegistrationId() bool`

HasRegistrationId returns a boolean if a field has been set.

### SetRegistrationIdNil

`func (o *PendingAgentInvite) SetRegistrationIdNil(b bool)`

 SetRegistrationIdNil sets the value for RegistrationId to be an explicit nil

### UnsetRegistrationId
`func (o *PendingAgentInvite) UnsetRegistrationId()`

UnsetRegistrationId ensures that no value is present for RegistrationId, not even an explicit nil
### GetLabel

`func (o *PendingAgentInvite) GetLabel() interface{}`

GetLabel returns the Label field if non-nil, zero value otherwise.

### GetLabelOk

`func (o *PendingAgentInvite) GetLabelOk() (*interface{}, bool)`

GetLabelOk returns a tuple with the Label field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLabel

`func (o *PendingAgentInvite) SetLabel(v interface{})`

SetLabel sets Label field to given value.

### HasLabel

`func (o *PendingAgentInvite) HasLabel() bool`

HasLabel returns a boolean if a field has been set.

### SetLabelNil

`func (o *PendingAgentInvite) SetLabelNil(b bool)`

 SetLabelNil sets the value for Label to be an explicit nil

### UnsetLabel
`func (o *PendingAgentInvite) UnsetLabel()`

UnsetLabel ensures that no value is present for Label, not even an explicit nil
### GetInviteEmail

`func (o *PendingAgentInvite) GetInviteEmail() string`

GetInviteEmail returns the InviteEmail field if non-nil, zero value otherwise.

### GetInviteEmailOk

`func (o *PendingAgentInvite) GetInviteEmailOk() (*string, bool)`

GetInviteEmailOk returns a tuple with the InviteEmail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteEmail

`func (o *PendingAgentInvite) SetInviteEmail(v string)`

SetInviteEmail sets InviteEmail field to given value.


### GetInviteName

`func (o *PendingAgentInvite) GetInviteName() interface{}`

GetInviteName returns the InviteName field if non-nil, zero value otherwise.

### GetInviteNameOk

`func (o *PendingAgentInvite) GetInviteNameOk() (*interface{}, bool)`

GetInviteNameOk returns a tuple with the InviteName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteName

`func (o *PendingAgentInvite) SetInviteName(v interface{})`

SetInviteName sets InviteName field to given value.

### HasInviteName

`func (o *PendingAgentInvite) HasInviteName() bool`

HasInviteName returns a boolean if a field has been set.

### SetInviteNameNil

`func (o *PendingAgentInvite) SetInviteNameNil(b bool)`

 SetInviteNameNil sets the value for InviteName to be an explicit nil

### UnsetInviteName
`func (o *PendingAgentInvite) UnsetInviteName()`

UnsetInviteName ensures that no value is present for InviteName, not even an explicit nil
### GetStatus

`func (o *PendingAgentInvite) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *PendingAgentInvite) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *PendingAgentInvite) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetInviteExpiresAt

`func (o *PendingAgentInvite) GetInviteExpiresAt() interface{}`

GetInviteExpiresAt returns the InviteExpiresAt field if non-nil, zero value otherwise.

### GetInviteExpiresAtOk

`func (o *PendingAgentInvite) GetInviteExpiresAtOk() (*interface{}, bool)`

GetInviteExpiresAtOk returns a tuple with the InviteExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteExpiresAt

`func (o *PendingAgentInvite) SetInviteExpiresAt(v interface{})`

SetInviteExpiresAt sets InviteExpiresAt field to given value.

### HasInviteExpiresAt

`func (o *PendingAgentInvite) HasInviteExpiresAt() bool`

HasInviteExpiresAt returns a boolean if a field has been set.

### SetInviteExpiresAtNil

`func (o *PendingAgentInvite) SetInviteExpiresAtNil(b bool)`

 SetInviteExpiresAtNil sets the value for InviteExpiresAt to be an explicit nil

### UnsetInviteExpiresAt
`func (o *PendingAgentInvite) UnsetInviteExpiresAt()`

UnsetInviteExpiresAt ensures that no value is present for InviteExpiresAt, not even an explicit nil
### GetCreatedAt

`func (o *PendingAgentInvite) GetCreatedAt() interface{}`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *PendingAgentInvite) GetCreatedAtOk() (*interface{}, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *PendingAgentInvite) SetCreatedAt(v interface{})`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *PendingAgentInvite) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### SetCreatedAtNil

`func (o *PendingAgentInvite) SetCreatedAtNil(b bool)`

 SetCreatedAtNil sets the value for CreatedAt to be an explicit nil

### UnsetCreatedAt
`func (o *PendingAgentInvite) UnsetCreatedAt()`

UnsetCreatedAt ensures that no value is present for CreatedAt, not even an explicit nil
### GetUpdatedAt

`func (o *PendingAgentInvite) GetUpdatedAt() interface{}`

GetUpdatedAt returns the UpdatedAt field if non-nil, zero value otherwise.

### GetUpdatedAtOk

`func (o *PendingAgentInvite) GetUpdatedAtOk() (*interface{}, bool)`

GetUpdatedAtOk returns a tuple with the UpdatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUpdatedAt

`func (o *PendingAgentInvite) SetUpdatedAt(v interface{})`

SetUpdatedAt sets UpdatedAt field to given value.

### HasUpdatedAt

`func (o *PendingAgentInvite) HasUpdatedAt() bool`

HasUpdatedAt returns a boolean if a field has been set.

### SetUpdatedAtNil

`func (o *PendingAgentInvite) SetUpdatedAtNil(b bool)`

 SetUpdatedAtNil sets the value for UpdatedAt to be an explicit nil

### UnsetUpdatedAt
`func (o *PendingAgentInvite) UnsetUpdatedAt()`

UnsetUpdatedAt ensures that no value is present for UpdatedAt, not even an explicit nil
### GetChallengeDifficulty

`func (o *PendingAgentInvite) GetChallengeDifficulty() interface{}`

GetChallengeDifficulty returns the ChallengeDifficulty field if non-nil, zero value otherwise.

### GetChallengeDifficultyOk

`func (o *PendingAgentInvite) GetChallengeDifficultyOk() (*interface{}, bool)`

GetChallengeDifficultyOk returns a tuple with the ChallengeDifficulty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallengeDifficulty

`func (o *PendingAgentInvite) SetChallengeDifficulty(v interface{})`

SetChallengeDifficulty sets ChallengeDifficulty field to given value.

### HasChallengeDifficulty

`func (o *PendingAgentInvite) HasChallengeDifficulty() bool`

HasChallengeDifficulty returns a boolean if a field has been set.

### SetChallengeDifficultyNil

`func (o *PendingAgentInvite) SetChallengeDifficultyNil(b bool)`

 SetChallengeDifficultyNil sets the value for ChallengeDifficulty to be an explicit nil

### UnsetChallengeDifficulty
`func (o *PendingAgentInvite) UnsetChallengeDifficulty()`

UnsetChallengeDifficulty ensures that no value is present for ChallengeDifficulty, not even an explicit nil
### GetMetadata

`func (o *PendingAgentInvite) GetMetadata() map[string]interface{}`

GetMetadata returns the Metadata field if non-nil, zero value otherwise.

### GetMetadataOk

`func (o *PendingAgentInvite) GetMetadataOk() (*map[string]interface{}, bool)`

GetMetadataOk returns a tuple with the Metadata field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMetadata

`func (o *PendingAgentInvite) SetMetadata(v map[string]interface{})`

SetMetadata sets Metadata field to given value.

### HasMetadata

`func (o *PendingAgentInvite) HasMetadata() bool`

HasMetadata returns a boolean if a field has been set.

### GetIsExpired

`func (o *PendingAgentInvite) GetIsExpired() bool`

GetIsExpired returns the IsExpired field if non-nil, zero value otherwise.

### GetIsExpiredOk

`func (o *PendingAgentInvite) GetIsExpiredOk() (*bool, bool)`

GetIsExpiredOk returns a tuple with the IsExpired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIsExpired

`func (o *PendingAgentInvite) SetIsExpired(v bool)`

SetIsExpired sets IsExpired field to given value.


### GetResendCount

`func (o *PendingAgentInvite) GetResendCount() int32`

GetResendCount returns the ResendCount field if non-nil, zero value otherwise.

### GetResendCountOk

`func (o *PendingAgentInvite) GetResendCountOk() (*int32, bool)`

GetResendCountOk returns a tuple with the ResendCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResendCount

`func (o *PendingAgentInvite) SetResendCount(v int32)`

SetResendCount sets ResendCount field to given value.


### GetInviteLastSentAt

`func (o *PendingAgentInvite) GetInviteLastSentAt() interface{}`

GetInviteLastSentAt returns the InviteLastSentAt field if non-nil, zero value otherwise.

### GetInviteLastSentAtOk

`func (o *PendingAgentInvite) GetInviteLastSentAtOk() (*interface{}, bool)`

GetInviteLastSentAtOk returns a tuple with the InviteLastSentAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteLastSentAt

`func (o *PendingAgentInvite) SetInviteLastSentAt(v interface{})`

SetInviteLastSentAt sets InviteLastSentAt field to given value.

### HasInviteLastSentAt

`func (o *PendingAgentInvite) HasInviteLastSentAt() bool`

HasInviteLastSentAt returns a boolean if a field has been set.

### SetInviteLastSentAtNil

`func (o *PendingAgentInvite) SetInviteLastSentAtNil(b bool)`

 SetInviteLastSentAtNil sets the value for InviteLastSentAt to be an explicit nil

### UnsetInviteLastSentAt
`func (o *PendingAgentInvite) UnsetInviteLastSentAt()`

UnsetInviteLastSentAt ensures that no value is present for InviteLastSentAt, not even an explicit nil
### GetInviteLastSentBy

`func (o *PendingAgentInvite) GetInviteLastSentBy() PendingAgentInviteInviteLastSentBy`

GetInviteLastSentBy returns the InviteLastSentBy field if non-nil, zero value otherwise.

### GetInviteLastSentByOk

`func (o *PendingAgentInvite) GetInviteLastSentByOk() (*PendingAgentInviteInviteLastSentBy, bool)`

GetInviteLastSentByOk returns a tuple with the InviteLastSentBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteLastSentBy

`func (o *PendingAgentInvite) SetInviteLastSentBy(v PendingAgentInviteInviteLastSentBy)`

SetInviteLastSentBy sets InviteLastSentBy field to given value.

### HasInviteLastSentBy

`func (o *PendingAgentInvite) HasInviteLastSentBy() bool`

HasInviteLastSentBy returns a boolean if a field has been set.

### GetExpiresInSeconds

`func (o *PendingAgentInvite) GetExpiresInSeconds() interface{}`

GetExpiresInSeconds returns the ExpiresInSeconds field if non-nil, zero value otherwise.

### GetExpiresInSecondsOk

`func (o *PendingAgentInvite) GetExpiresInSecondsOk() (*interface{}, bool)`

GetExpiresInSecondsOk returns a tuple with the ExpiresInSeconds field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresInSeconds

`func (o *PendingAgentInvite) SetExpiresInSeconds(v interface{})`

SetExpiresInSeconds sets ExpiresInSeconds field to given value.

### HasExpiresInSeconds

`func (o *PendingAgentInvite) HasExpiresInSeconds() bool`

HasExpiresInSeconds returns a boolean if a field has been set.

### SetExpiresInSecondsNil

`func (o *PendingAgentInvite) SetExpiresInSecondsNil(b bool)`

 SetExpiresInSecondsNil sets the value for ExpiresInSeconds to be an explicit nil

### UnsetExpiresInSeconds
`func (o *PendingAgentInvite) UnsetExpiresInSeconds()`

UnsetExpiresInSeconds ensures that no value is present for ExpiresInSeconds, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


