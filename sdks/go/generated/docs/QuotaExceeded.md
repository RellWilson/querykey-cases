# QuotaExceeded

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Error** | **string** |  | 
**Message** | Pointer to **string** |  | [optional] 
**Group** | **string** |  | 
**Plan** | **string** |  | 
**Limit** | **int32** |  | 
**Remaining** | **int32** |  | 
**ResetAt** | **time.Time** |  | 

## Methods

### NewQuotaExceeded

`func NewQuotaExceeded(error_ string, group string, plan string, limit int32, remaining int32, resetAt time.Time, ) *QuotaExceeded`

NewQuotaExceeded instantiates a new QuotaExceeded object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewQuotaExceededWithDefaults

`func NewQuotaExceededWithDefaults() *QuotaExceeded`

NewQuotaExceededWithDefaults instantiates a new QuotaExceeded object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetError

`func (o *QuotaExceeded) GetError() string`

GetError returns the Error field if non-nil, zero value otherwise.

### GetErrorOk

`func (o *QuotaExceeded) GetErrorOk() (*string, bool)`

GetErrorOk returns a tuple with the Error field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetError

`func (o *QuotaExceeded) SetError(v string)`

SetError sets Error field to given value.


### GetMessage

`func (o *QuotaExceeded) GetMessage() string`

GetMessage returns the Message field if non-nil, zero value otherwise.

### GetMessageOk

`func (o *QuotaExceeded) GetMessageOk() (*string, bool)`

GetMessageOk returns a tuple with the Message field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMessage

`func (o *QuotaExceeded) SetMessage(v string)`

SetMessage sets Message field to given value.

### HasMessage

`func (o *QuotaExceeded) HasMessage() bool`

HasMessage returns a boolean if a field has been set.

### GetGroup

`func (o *QuotaExceeded) GetGroup() string`

GetGroup returns the Group field if non-nil, zero value otherwise.

### GetGroupOk

`func (o *QuotaExceeded) GetGroupOk() (*string, bool)`

GetGroupOk returns a tuple with the Group field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroup

`func (o *QuotaExceeded) SetGroup(v string)`

SetGroup sets Group field to given value.


### GetPlan

`func (o *QuotaExceeded) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *QuotaExceeded) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *QuotaExceeded) SetPlan(v string)`

SetPlan sets Plan field to given value.


### GetLimit

`func (o *QuotaExceeded) GetLimit() int32`

GetLimit returns the Limit field if non-nil, zero value otherwise.

### GetLimitOk

`func (o *QuotaExceeded) GetLimitOk() (*int32, bool)`

GetLimitOk returns a tuple with the Limit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimit

`func (o *QuotaExceeded) SetLimit(v int32)`

SetLimit sets Limit field to given value.


### GetRemaining

`func (o *QuotaExceeded) GetRemaining() int32`

GetRemaining returns the Remaining field if non-nil, zero value otherwise.

### GetRemainingOk

`func (o *QuotaExceeded) GetRemainingOk() (*int32, bool)`

GetRemainingOk returns a tuple with the Remaining field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRemaining

`func (o *QuotaExceeded) SetRemaining(v int32)`

SetRemaining sets Remaining field to given value.


### GetResetAt

`func (o *QuotaExceeded) GetResetAt() time.Time`

GetResetAt returns the ResetAt field if non-nil, zero value otherwise.

### GetResetAtOk

`func (o *QuotaExceeded) GetResetAtOk() (*time.Time, bool)`

GetResetAtOk returns a tuple with the ResetAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResetAt

`func (o *QuotaExceeded) SetResetAt(v time.Time)`

SetResetAt sets ResetAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


