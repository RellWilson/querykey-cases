# AgentChallenge

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Challenge** | **string** | Hex-encoded PoW challenge token | 
**Difficulty** | **int32** | Difficulty target expressed in leading zero bits | 
**ExpiresAt** | **time.Time** |  | 
**InviteSupported** | **bool** | Indicates whether the invite flow is available | 

## Methods

### NewAgentChallenge

`func NewAgentChallenge(challenge string, difficulty int32, expiresAt time.Time, inviteSupported bool, ) *AgentChallenge`

NewAgentChallenge instantiates a new AgentChallenge object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentChallengeWithDefaults

`func NewAgentChallengeWithDefaults() *AgentChallenge`

NewAgentChallengeWithDefaults instantiates a new AgentChallenge object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetChallenge

`func (o *AgentChallenge) GetChallenge() string`

GetChallenge returns the Challenge field if non-nil, zero value otherwise.

### GetChallengeOk

`func (o *AgentChallenge) GetChallengeOk() (*string, bool)`

GetChallengeOk returns a tuple with the Challenge field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChallenge

`func (o *AgentChallenge) SetChallenge(v string)`

SetChallenge sets Challenge field to given value.


### GetDifficulty

`func (o *AgentChallenge) GetDifficulty() int32`

GetDifficulty returns the Difficulty field if non-nil, zero value otherwise.

### GetDifficultyOk

`func (o *AgentChallenge) GetDifficultyOk() (*int32, bool)`

GetDifficultyOk returns a tuple with the Difficulty field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDifficulty

`func (o *AgentChallenge) SetDifficulty(v int32)`

SetDifficulty sets Difficulty field to given value.


### GetExpiresAt

`func (o *AgentChallenge) GetExpiresAt() time.Time`

GetExpiresAt returns the ExpiresAt field if non-nil, zero value otherwise.

### GetExpiresAtOk

`func (o *AgentChallenge) GetExpiresAtOk() (*time.Time, bool)`

GetExpiresAtOk returns a tuple with the ExpiresAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpiresAt

`func (o *AgentChallenge) SetExpiresAt(v time.Time)`

SetExpiresAt sets ExpiresAt field to given value.


### GetInviteSupported

`func (o *AgentChallenge) GetInviteSupported() bool`

GetInviteSupported returns the InviteSupported field if non-nil, zero value otherwise.

### GetInviteSupportedOk

`func (o *AgentChallenge) GetInviteSupportedOk() (*bool, bool)`

GetInviteSupportedOk returns a tuple with the InviteSupported field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInviteSupported

`func (o *AgentChallenge) SetInviteSupported(v bool)`

SetInviteSupported sets InviteSupported field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


