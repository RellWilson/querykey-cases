# CollectionSummary

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**Slug** | Pointer to **string** |  | [optional] 
**Name** | Pointer to **string** |  | [optional] 
**Description** | Pointer to **string** |  | [optional] 
**Ecosystem** | Pointer to **string** |  | [optional] 
**Domain** | Pointer to **interface{}** |  | [optional] 
**Version** | Pointer to **string** |  | [optional] 
**TierRequired** | Pointer to **string** |  | [optional] 
**CaseCount** | Pointer to **int32** |  | [optional] 
**Published** | Pointer to **bool** |  | [optional] 
**PublishedAt** | Pointer to **interface{}** |  | [optional] 
**CreatedAt** | Pointer to **time.Time** |  | [optional] 
**LastUpdated** | Pointer to **time.Time** |  | [optional] 
**Maintainers** | Pointer to [**[]CollectionSummaryMaintainersInner**](CollectionSummaryMaintainersInner.md) |  | [optional] 
**ManifestAvailable** | Pointer to **bool** |  | [optional] 

## Methods

### NewCollectionSummary

`func NewCollectionSummary() *CollectionSummary`

NewCollectionSummary instantiates a new CollectionSummary object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectionSummaryWithDefaults

`func NewCollectionSummaryWithDefaults() *CollectionSummary`

NewCollectionSummaryWithDefaults instantiates a new CollectionSummary object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CollectionSummary) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CollectionSummary) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CollectionSummary) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CollectionSummary) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSlug

`func (o *CollectionSummary) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *CollectionSummary) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *CollectionSummary) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *CollectionSummary) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetName

`func (o *CollectionSummary) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CollectionSummary) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CollectionSummary) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CollectionSummary) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *CollectionSummary) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CollectionSummary) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CollectionSummary) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CollectionSummary) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEcosystem

`func (o *CollectionSummary) GetEcosystem() string`

GetEcosystem returns the Ecosystem field if non-nil, zero value otherwise.

### GetEcosystemOk

`func (o *CollectionSummary) GetEcosystemOk() (*string, bool)`

GetEcosystemOk returns a tuple with the Ecosystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEcosystem

`func (o *CollectionSummary) SetEcosystem(v string)`

SetEcosystem sets Ecosystem field to given value.

### HasEcosystem

`func (o *CollectionSummary) HasEcosystem() bool`

HasEcosystem returns a boolean if a field has been set.

### GetDomain

`func (o *CollectionSummary) GetDomain() interface{}`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CollectionSummary) GetDomainOk() (*interface{}, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CollectionSummary) SetDomain(v interface{})`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *CollectionSummary) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### SetDomainNil

`func (o *CollectionSummary) SetDomainNil(b bool)`

 SetDomainNil sets the value for Domain to be an explicit nil

### UnsetDomain
`func (o *CollectionSummary) UnsetDomain()`

UnsetDomain ensures that no value is present for Domain, not even an explicit nil
### GetVersion

`func (o *CollectionSummary) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *CollectionSummary) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *CollectionSummary) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *CollectionSummary) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTierRequired

`func (o *CollectionSummary) GetTierRequired() string`

GetTierRequired returns the TierRequired field if non-nil, zero value otherwise.

### GetTierRequiredOk

`func (o *CollectionSummary) GetTierRequiredOk() (*string, bool)`

GetTierRequiredOk returns a tuple with the TierRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierRequired

`func (o *CollectionSummary) SetTierRequired(v string)`

SetTierRequired sets TierRequired field to given value.

### HasTierRequired

`func (o *CollectionSummary) HasTierRequired() bool`

HasTierRequired returns a boolean if a field has been set.

### GetCaseCount

`func (o *CollectionSummary) GetCaseCount() int32`

GetCaseCount returns the CaseCount field if non-nil, zero value otherwise.

### GetCaseCountOk

`func (o *CollectionSummary) GetCaseCountOk() (*int32, bool)`

GetCaseCountOk returns a tuple with the CaseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseCount

`func (o *CollectionSummary) SetCaseCount(v int32)`

SetCaseCount sets CaseCount field to given value.

### HasCaseCount

`func (o *CollectionSummary) HasCaseCount() bool`

HasCaseCount returns a boolean if a field has been set.

### GetPublished

`func (o *CollectionSummary) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *CollectionSummary) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *CollectionSummary) SetPublished(v bool)`

SetPublished sets Published field to given value.

### HasPublished

`func (o *CollectionSummary) HasPublished() bool`

HasPublished returns a boolean if a field has been set.

### GetPublishedAt

`func (o *CollectionSummary) GetPublishedAt() interface{}`

GetPublishedAt returns the PublishedAt field if non-nil, zero value otherwise.

### GetPublishedAtOk

`func (o *CollectionSummary) GetPublishedAtOk() (*interface{}, bool)`

GetPublishedAtOk returns a tuple with the PublishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedAt

`func (o *CollectionSummary) SetPublishedAt(v interface{})`

SetPublishedAt sets PublishedAt field to given value.

### HasPublishedAt

`func (o *CollectionSummary) HasPublishedAt() bool`

HasPublishedAt returns a boolean if a field has been set.

### SetPublishedAtNil

`func (o *CollectionSummary) SetPublishedAtNil(b bool)`

 SetPublishedAtNil sets the value for PublishedAt to be an explicit nil

### UnsetPublishedAt
`func (o *CollectionSummary) UnsetPublishedAt()`

UnsetPublishedAt ensures that no value is present for PublishedAt, not even an explicit nil
### GetCreatedAt

`func (o *CollectionSummary) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CollectionSummary) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CollectionSummary) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CollectionSummary) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetLastUpdated

`func (o *CollectionSummary) GetLastUpdated() time.Time`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *CollectionSummary) GetLastUpdatedOk() (*time.Time, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *CollectionSummary) SetLastUpdated(v time.Time)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *CollectionSummary) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetMaintainers

`func (o *CollectionSummary) GetMaintainers() []CollectionSummaryMaintainersInner`

GetMaintainers returns the Maintainers field if non-nil, zero value otherwise.

### GetMaintainersOk

`func (o *CollectionSummary) GetMaintainersOk() (*[]CollectionSummaryMaintainersInner, bool)`

GetMaintainersOk returns a tuple with the Maintainers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainers

`func (o *CollectionSummary) SetMaintainers(v []CollectionSummaryMaintainersInner)`

SetMaintainers sets Maintainers field to given value.

### HasMaintainers

`func (o *CollectionSummary) HasMaintainers() bool`

HasMaintainers returns a boolean if a field has been set.

### GetManifestAvailable

`func (o *CollectionSummary) GetManifestAvailable() bool`

GetManifestAvailable returns the ManifestAvailable field if non-nil, zero value otherwise.

### GetManifestAvailableOk

`func (o *CollectionSummary) GetManifestAvailableOk() (*bool, bool)`

GetManifestAvailableOk returns a tuple with the ManifestAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManifestAvailable

`func (o *CollectionSummary) SetManifestAvailable(v bool)`

SetManifestAvailable sets ManifestAvailable field to given value.

### HasManifestAvailable

`func (o *CollectionSummary) HasManifestAvailable() bool`

HasManifestAvailable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


