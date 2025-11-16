# AgentInviteResendResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Invite** | [**PendingAgentInvite**](PendingAgentInvite.md) |  | 

## Methods

### NewAgentInviteResendResponse

`func NewAgentInviteResendResponse(invite PendingAgentInvite, ) *AgentInviteResendResponse`

NewAgentInviteResendResponse instantiates a new AgentInviteResendResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentInviteResendResponseWithDefaults

`func NewAgentInviteResendResponseWithDefaults() *AgentInviteResendResponse`

NewAgentInviteResendResponseWithDefaults instantiates a new AgentInviteResendResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetInvite

`func (o *AgentInviteResendResponse) GetInvite() PendingAgentInvite`

GetInvite returns the Invite field if non-nil, zero value otherwise.

### GetInviteOk

`func (o *AgentInviteResendResponse) GetInviteOk() (*PendingAgentInvite, bool)`

GetInviteOk returns a tuple with the Invite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInvite

`func (o *AgentInviteResendResponse) SetInvite(v PendingAgentInvite)`

SetInvite sets Invite field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


