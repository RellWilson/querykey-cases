# ResearchPapersResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Data** | Pointer to [**[]ResearchPaperSummary**](ResearchPaperSummary.md) |  | [optional] 
**Meta** | Pointer to [**CollectionsResponseMeta**](CollectionsResponseMeta.md) |  | [optional] 

## Methods

### NewResearchPapersResponse

`func NewResearchPapersResponse() *ResearchPapersResponse`

NewResearchPapersResponse instantiates a new ResearchPapersResponse object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewResearchPapersResponseWithDefaults

`func NewResearchPapersResponseWithDefaults() *ResearchPapersResponse`

NewResearchPapersResponseWithDefaults instantiates a new ResearchPapersResponse object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetData

`func (o *ResearchPapersResponse) GetData() []ResearchPaperSummary`

GetData returns the Data field if non-nil, zero value otherwise.

### GetDataOk

`func (o *ResearchPapersResponse) GetDataOk() (*[]ResearchPaperSummary, bool)`

GetDataOk returns a tuple with the Data field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetData

`func (o *ResearchPapersResponse) SetData(v []ResearchPaperSummary)`

SetData sets Data field to given value.

### HasData

`func (o *ResearchPapersResponse) HasData() bool`

HasData returns a boolean if a field has been set.

### GetMeta

`func (o *ResearchPapersResponse) GetMeta() CollectionsResponseMeta`

GetMeta returns the Meta field if non-nil, zero value otherwise.

### GetMetaOk

`func (o *ResearchPapersResponse) GetMetaOk() (*CollectionsResponseMeta, bool)`

GetMetaOk returns a tuple with the Meta field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeta

`func (o *ResearchPapersResponse) SetMeta(v CollectionsResponseMeta)`

SetMeta sets Meta field to given value.

### HasMeta

`func (o *ResearchPapersResponse) HasMeta() bool`

HasMeta returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


