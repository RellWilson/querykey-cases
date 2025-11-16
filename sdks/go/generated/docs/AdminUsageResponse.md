# AdminUsageResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Date** | **string** |  | 
**UserId** | Pointer to **interface{}** |  | [optional] 
**Groups** | [**[]AdminUsageGroup**](AdminUsageGroup.md) |  | 

## Methods

### NewAdminUsageResponse

`func NewAdminUsageResponse(date string, groups []AdminUsageGroup, ) *AdminUsageResponse`

NewAdminUsageResponse instantiates a new AdminUsageResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAdminUsageResponseWithDefaults

`func NewAdminUsageResponseWithDefaults() *AdminUsageResponse`

NewAdminUsageResponseWithDefaults instantiates a new AdminUsageResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDate

`func (o *AdminUsageResponse) GetDate() string`

GetDate returns the Date field if non-nil, zero value otherwise.

### GetDateOk

`func (o *AdminUsageResponse) GetDateOk() (*string, bool)`

GetDateOk returns a tuple with the Date field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDate

`func (o *AdminUsageResponse) SetDate(v string)`

SetDate sets Date field to given value.


### GetUserId

`func (o *AdminUsageResponse) GetUserId() interface{}`

GetUserId returns the UserId field if non-nil, zero value otherwise.

### GetUserIdOk

`func (o *AdminUsageResponse) GetUserIdOk() (*interface{}, bool)`

GetUserIdOk returns a tuple with the UserId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetUserId

`func (o *AdminUsageResponse) SetUserId(v interface{})`

SetUserId sets UserId field to given value.

### HasUserId

`func (o *AdminUsageResponse) HasUserId() bool`

HasUserId returns a boolean if a field has been set.

### SetUserIdNil

`func (o *AdminUsageResponse) SetUserIdNil(b bool)`

 SetUserIdNil sets the value for UserId to be an explicit nil

### UnsetUserId
`func (o *AdminUsageResponse) UnsetUserId()`

UnsetUserId ensures that no value is present for UserId, not even an explicit nil
### GetGroups

`func (o *AdminUsageResponse) GetGroups() []AdminUsageGroup`

GetGroups returns the Groups field if non-nil, zero value otherwise.

### GetGroupsOk

`func (o *AdminUsageResponse) GetGroupsOk() (*[]AdminUsageGroup, bool)`

GetGroupsOk returns a tuple with the Groups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroups

`func (o *AdminUsageResponse) SetGroups(v []AdminUsageGroup)`

SetGroups sets Groups field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


