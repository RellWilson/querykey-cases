# ApiAdminAgentIdExemptPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Exempt** | **bool** |  | 
**Reason** | Pointer to **string** |  | [optional] 

## Methods

### NewApiAdminAgentIdExemptPostRequest

`func NewApiAdminAgentIdExemptPostRequest(exempt bool, ) *ApiAdminAgentIdExemptPostRequest`

NewApiAdminAgentIdExemptPostRequest instantiates a new ApiAdminAgentIdExemptPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiAdminAgentIdExemptPostRequestWithDefaults

`func NewApiAdminAgentIdExemptPostRequestWithDefaults() *ApiAdminAgentIdExemptPostRequest`

NewApiAdminAgentIdExemptPostRequestWithDefaults instantiates a new ApiAdminAgentIdExemptPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExempt

`func (o *ApiAdminAgentIdExemptPostRequest) GetExempt() bool`

GetExempt returns the Exempt field if non-nil, zero value otherwise.

### GetExemptOk

`func (o *ApiAdminAgentIdExemptPostRequest) GetExemptOk() (*bool, bool)`

GetExemptOk returns a tuple with the Exempt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExempt

`func (o *ApiAdminAgentIdExemptPostRequest) SetExempt(v bool)`

SetExempt sets Exempt field to given value.


### GetReason

`func (o *ApiAdminAgentIdExemptPostRequest) GetReason() string`

GetReason returns the Reason field if non-nil, zero value otherwise.

### GetReasonOk

`func (o *ApiAdminAgentIdExemptPostRequest) GetReasonOk() (*string, bool)`

GetReasonOk returns a tuple with the Reason field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetReason

`func (o *ApiAdminAgentIdExemptPostRequest) SetReason(v string)`

SetReason sets Reason field to given value.

### HasReason

`func (o *ApiAdminAgentIdExemptPostRequest) HasReason() bool`

HasReason returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


