# ApiBillingCheckoutPostRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Plan** | **string** |  | 
**BillingCycle** | Pointer to **string** |  | [optional] [default to "monthly"]

## Methods

### NewApiBillingCheckoutPostRequest

`func NewApiBillingCheckoutPostRequest(plan string, ) *ApiBillingCheckoutPostRequest`

NewApiBillingCheckoutPostRequest instantiates a new ApiBillingCheckoutPostRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewApiBillingCheckoutPostRequestWithDefaults

`func NewApiBillingCheckoutPostRequestWithDefaults() *ApiBillingCheckoutPostRequest`

NewApiBillingCheckoutPostRequestWithDefaults instantiates a new ApiBillingCheckoutPostRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPlan

`func (o *ApiBillingCheckoutPostRequest) GetPlan() string`

GetPlan returns the Plan field if non-nil, zero value otherwise.

### GetPlanOk

`func (o *ApiBillingCheckoutPostRequest) GetPlanOk() (*string, bool)`

GetPlanOk returns a tuple with the Plan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPlan

`func (o *ApiBillingCheckoutPostRequest) SetPlan(v string)`

SetPlan sets Plan field to given value.


### GetBillingCycle

`func (o *ApiBillingCheckoutPostRequest) GetBillingCycle() string`

GetBillingCycle returns the BillingCycle field if non-nil, zero value otherwise.

### GetBillingCycleOk

`func (o *ApiBillingCheckoutPostRequest) GetBillingCycleOk() (*string, bool)`

GetBillingCycleOk returns a tuple with the BillingCycle field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBillingCycle

`func (o *ApiBillingCheckoutPostRequest) SetBillingCycle(v string)`

SetBillingCycle sets BillingCycle field to given value.

### HasBillingCycle

`func (o *ApiBillingCheckoutPostRequest) HasBillingCycle() bool`

HasBillingCycle returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


