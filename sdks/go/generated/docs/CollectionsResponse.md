# CollectionsResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]CollectionSummary**](CollectionSummary.md) |  | [optional] 
**Meta** | Pointer to [**CollectionsResponseMeta**](CollectionsResponseMeta.md) |  | [optional] 

## Methods

### NewCollectionsResponse

`func NewCollectionsResponse() *CollectionsResponse`

NewCollectionsResponse instantiates a new CollectionsResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectionsResponseWithDefaults

`func NewCollectionsResponseWithDefaults() *CollectionsResponse`

NewCollectionsResponseWithDefaults instantiates a new CollectionsResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *CollectionsResponse) GetData() []CollectionSummary`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *CollectionsResponse) GetDataOk() (*[]CollectionSummary, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *CollectionsResponse) SetData(v []CollectionSummary)`

SetData sets Data field to given value.

### HasData

`func (o *CollectionsResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetMeta

`func (o *CollectionsResponse) GetMeta() CollectionsResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *CollectionsResponse) GetMetaOk() (*CollectionsResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *CollectionsResponse) SetMeta(v CollectionsResponseMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *CollectionsResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


