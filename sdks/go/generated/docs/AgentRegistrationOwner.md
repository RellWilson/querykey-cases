# AgentRegistrationOwner

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | Pointer to **interface{}** | Owner display name used in invite email | [optional] 
**Email** | **string** | Owner email address that will receive the invite | 

## Methods

### NewAgentRegistrationOwner

`func NewAgentRegistrationOwner(email string, ) *AgentRegistrationOwner`

NewAgentRegistrationOwner instantiates a new AgentRegistrationOwner object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAgentRegistrationOwnerWithDefaults

`func NewAgentRegistrationOwnerWithDefaults() *AgentRegistrationOwner`

NewAgentRegistrationOwnerWithDefaults instantiates a new AgentRegistrationOwner object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetName

`func (o *AgentRegistrationOwner) GetName() interface{}`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *AgentRegistrationOwner) GetNameOk() (*interface{}, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *AgentRegistrationOwner) SetName(v interface{})`

SetName sets Name field to given value.

### HasName

`func (o *AgentRegistrationOwner) HasName() bool`

HasName returns a boolean if a field has been set.

### SetNameNil

`func (o *AgentRegistrationOwner) SetNameNil(b bool)`

 SetNameNil sets the value for Name to be an explicit nil

### UnsetName
`func (o *AgentRegistrationOwner) UnsetName()`

UnsetName ensures that no value is present for Name, not even an explicit nil
### GetEmail

`func (o *AgentRegistrationOwner) GetEmail() string`

GetEmail returns the Email field if non-nil, zero value otherwise.

### GetEmailOk

`func (o *AgentRegistrationOwner) GetEmailOk() (*string, bool)`

GetEmailOk returns a tuple with the Email field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEmail

`func (o *AgentRegistrationOwner) SetEmail(v string)`

SetEmail sets Email field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


