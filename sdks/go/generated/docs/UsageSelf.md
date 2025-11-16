# UsageSelf

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **string** |  | 
**Plan** | **string** |  | 
**Limits** | **map[string]interface{}** |  | 
**Usage** | [**[]UsageSelfUsageInner**](UsageSelfUsageInner.md) |  | 
**ResetAt** | **time.Time** |  | 

## Methods

### NewUsageSelf

`func NewUsageSelf(date string, plan string, limits map[string]interface{}, usage []UsageSelfUsageInner, resetAt time.Time, ) *UsageSelf`

NewUsageSelf instantiates a new UsageSelf object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewUsageSelfWithDefaults

`func NewUsageSelfWithDefaults() *UsageSelf`

NewUsageSelfWithDefaults instantiates a new UsageSelf object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *UsageSelf) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *UsageSelf) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *UsageSelf) SetDate(v string)`

SetDate sets Date field to given value.


### GetPlan

`func (o *UsageSelf) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *UsageSelf) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *UsageSelf) SetPlan(v string)`

SetPlan sets Plan field to given value.


### GetLimits

`func (o *UsageSelf) GetLimits() map[string]interface{}`

GetLimits returns the Limits field if non-nil, zero value otherwise.

### GetLimitsOk

`func (o *UsageSelf) GetLimitsOk() (*map[string]interface{}, bool)`

GetLimitsOk returns a tuple with the Limits field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLimits

`func (o *UsageSelf) SetLimits(v map[string]interface{})`

SetLimits sets Limits field to given value.


### GetUsage

`func (o *UsageSelf) GetUsage() []UsageSelfUsageInner`

GetUsage returns the Usage field if non-nil, zero value otherwise.

### GetUsageOk

`func (o *UsageSelf) GetUsageOk() (*[]UsageSelfUsageInner, bool)`

GetUsageOk returns a tuple with the Usage field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUsage

`func (o *UsageSelf) SetUsage(v []UsageSelfUsageInner)`

SetUsage sets Usage field to given value.


### GetResetAt

`func (o *UsageSelf) GetResetAt() time.Time`

GetResetAt returns the ResetAt field if non-nil, zero value otherwise.

### GetResetAtOk

`func (o *UsageSelf) GetResetAtOk() (*time.Time, bool)`

GetResetAtOk returns a tuple with the ResetAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetResetAt

`func (o *UsageSelf) SetResetAt(v time.Time)`

SetResetAt sets ResetAt field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


