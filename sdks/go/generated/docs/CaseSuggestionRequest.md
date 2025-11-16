# CaseSuggestionRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Suggestion** | **string** | Short description of the improvement or correction | 
**Fields** | Pointer to **[]string** | Optional list of fields the suggestion relates to | [optional] 
**Contact** | Pointer to **string** | Optional contact preference or note | [optional] 

## Methods

### NewCaseSuggestionRequest

`func NewCaseSuggestionRequest(suggestion string, ) *CaseSuggestionRequest`

NewCaseSuggestionRequest instantiates a new CaseSuggestionRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCaseSuggestionRequestWithDefaults

`func NewCaseSuggestionRequestWithDefaults() *CaseSuggestionRequest`

NewCaseSuggestionRequestWithDefaults instantiates a new CaseSuggestionRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSuggestion

`func (o *CaseSuggestionRequest) GetSuggestion() string`

GetSuggestion returns the Suggestion field if non-nil, zero value otherwise.

### GetSuggestionOk

`func (o *CaseSuggestionRequest) GetSuggestionOk() (*string, bool)`

GetSuggestionOk returns a tuple with the Suggestion field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuggestion

`func (o *CaseSuggestionRequest) SetSuggestion(v string)`

SetSuggestion sets Suggestion field to given value.


### GetFields

`func (o *CaseSuggestionRequest) GetFields() []string`

GetFields returns the Fields field if non-nil, zero value otherwise.

### GetFieldsOk

`func (o *CaseSuggestionRequest) GetFieldsOk() (*[]string, bool)`

GetFieldsOk returns a tuple with the Fields field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFields

`func (o *CaseSuggestionRequest) SetFields(v []string)`

SetFields sets Fields field to given value.

### HasFields

`func (o *CaseSuggestionRequest) HasFields() bool`

HasFields returns a boolean if a field has been set.

### GetContact

`func (o *CaseSuggestionRequest) GetContact() string`

GetContact returns the Contact field if non-nil, zero value otherwise.

### GetContactOk

`func (o *CaseSuggestionRequest) GetContactOk() (*string, bool)`

GetContactOk returns a tuple with the Contact field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetContact

`func (o *CaseSuggestionRequest) SetContact(v string)`

SetContact sets Contact field to given value.

### HasContact

`func (o *CaseSuggestionRequest) HasContact() bool`

HasContact returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


