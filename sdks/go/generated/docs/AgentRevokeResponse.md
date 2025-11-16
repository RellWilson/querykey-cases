# AgentRevokeResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AgentId** | **string** |  | 
**Status** | **string** |  | 
**OwnerUserId** | Pointer to **interface{}** |  | [optional] 
**SeatUsage** | Pointer to **interface{}** | Current seat usage for the owner after revocation | [optional] 

## Methods

### NewAgentRevokeResponse

`func NewAgentRevokeResponse(agentId string, status string, ) *AgentRevokeResponse`

NewAgentRevokeResponse instantiates a new AgentRevokeResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRevokeResponseWithDefaults

`func NewAgentRevokeResponseWithDefaults() *AgentRevokeResponse`

NewAgentRevokeResponseWithDefaults instantiates a new AgentRevokeResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAgentId

`func (o *AgentRevokeResponse) GetAgentId() string`

GetAgentId returns the AgentId field if non-nil, zero value otherwise.

### GetAgentIdOk

`func (o *AgentRevokeResponse) GetAgentIdOk() (*string, bool)`

GetAgentIdOk returns a tuple with the AgentId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAgentId

`func (o *AgentRevokeResponse) SetAgentId(v string)`

SetAgentId sets AgentId field to given value.


### GetStatus

`func (o *AgentRevokeResponse) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *AgentRevokeResponse) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *AgentRevokeResponse) SetStatus(v string)`

SetStatus sets Status field to given value.


### GetOwnerUserId

`func (o *AgentRevokeResponse) GetOwnerUserId() interface{}`

GetOwnerUserId returns the OwnerUserId field if non-nil, zero value otherwise.

### GetOwnerUserIdOk

`func (o *AgentRevokeResponse) GetOwnerUserIdOk() (*interface{}, bool)`

GetOwnerUserIdOk returns a tuple with the OwnerUserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOwnerUserId

`func (o *AgentRevokeResponse) SetOwnerUserId(v interface{})`

SetOwnerUserId sets OwnerUserId field to given value.

### HasOwnerUserId

`func (o *AgentRevokeResponse) HasOwnerUserId() bool`

HasOwnerUserId returns a boolean if a field has been set.

### SetOwnerUserIdNil

`func (o *AgentRevokeResponse) SetOwnerUserIdNil(b bool)`

 SetOwnerUserIdNil sets the value for OwnerUserId to be an explicit nil

### UnsetOwnerUserId
`func (o *AgentRevokeResponse) UnsetOwnerUserId()`

UnsetOwnerUserId ensures that no value is present for OwnerUserId, not even an explicit nil
### GetSeatUsage

`func (o *AgentRevokeResponse) GetSeatUsage() interface{}`

GetSeatUsage returns the SeatUsage field if non-nil, zero value otherwise.

### GetSeatUsageOk

`func (o *AgentRevokeResponse) GetSeatUsageOk() (*interface{}, bool)`

GetSeatUsageOk returns a tuple with the SeatUsage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSeatUsage

`func (o *AgentRevokeResponse) SetSeatUsage(v interface{})`

SetSeatUsage sets SeatUsage field to given value.

### HasSeatUsage

`func (o *AgentRevokeResponse) HasSeatUsage() bool`

HasSeatUsage returns a boolean if a field has been set.

### SetSeatUsageNil

`func (o *AgentRevokeResponse) SetSeatUsageNil(b bool)`

 SetSeatUsageNil sets the value for SeatUsage to be an explicit nil

### UnsetSeatUsage
`func (o *AgentRevokeResponse) UnsetSeatUsage()`

UnsetSeatUsage ensures that no value is present for SeatUsage, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


