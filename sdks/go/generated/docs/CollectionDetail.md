# CollectionDetail

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
**Cases** | Pointer to [**[]CollectionCase**](CollectionCase.md) |  | [optional] 
**Manifest** | Pointer to [**[]CollectionCase**](CollectionCase.md) |  | [optional] 
**ManifestPath** | Pointer to **interface{}** |  | [optional] 
**ManifestSha256** | Pointer to **interface{}** |  | [optional] 

## Methods

### NewCollectionDetail

`func NewCollectionDetail() *CollectionDetail`

NewCollectionDetail instantiates a new CollectionDetail object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCollectionDetailWithDefaults

`func NewCollectionDetailWithDefaults() *CollectionDetail`

NewCollectionDetailWithDefaults instantiates a new CollectionDetail object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *CollectionDetail) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *CollectionDetail) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *CollectionDetail) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *CollectionDetail) HasId() bool`

HasId returns a boolean if a field has been set.

### GetSlug

`func (o *CollectionDetail) GetSlug() string`

GetSlug returns the Slug field if non-nil, zero value otherwise.

### GetSlugOk

`func (o *CollectionDetail) GetSlugOk() (*string, bool)`

GetSlugOk returns a tuple with the Slug field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSlug

`func (o *CollectionDetail) SetSlug(v string)`

SetSlug sets Slug field to given value.

### HasSlug

`func (o *CollectionDetail) HasSlug() bool`

HasSlug returns a boolean if a field has been set.

### GetName

`func (o *CollectionDetail) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *CollectionDetail) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *CollectionDetail) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *CollectionDetail) HasName() bool`

HasName returns a boolean if a field has been set.

### GetDescription

`func (o *CollectionDetail) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CollectionDetail) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CollectionDetail) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CollectionDetail) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEcosystem

`func (o *CollectionDetail) GetEcosystem() string`

GetEcosystem returns the Ecosystem field if non-nil, zero value otherwise.

### GetEcosystemOk

`func (o *CollectionDetail) GetEcosystemOk() (*string, bool)`

GetEcosystemOk returns a tuple with the Ecosystem field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEcosystem

`func (o *CollectionDetail) SetEcosystem(v string)`

SetEcosystem sets Ecosystem field to given value.

### HasEcosystem

`func (o *CollectionDetail) HasEcosystem() bool`

HasEcosystem returns a boolean if a field has been set.

### GetDomain

`func (o *CollectionDetail) GetDomain() interface{}`

GetDomain returns the Domain field if non-nil, zero value otherwise.

### GetDomainOk

`func (o *CollectionDetail) GetDomainOk() (*interface{}, bool)`

GetDomainOk returns a tuple with the Domain field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDomain

`func (o *CollectionDetail) SetDomain(v interface{})`

SetDomain sets Domain field to given value.

### HasDomain

`func (o *CollectionDetail) HasDomain() bool`

HasDomain returns a boolean if a field has been set.

### SetDomainNil

`func (o *CollectionDetail) SetDomainNil(b bool)`

 SetDomainNil sets the value for Domain to be an explicit nil

### UnsetDomain
`func (o *CollectionDetail) UnsetDomain()`

UnsetDomain ensures that no value is present for Domain, not even an explicit nil
### GetVersion

`func (o *CollectionDetail) GetVersion() string`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *CollectionDetail) GetVersionOk() (*string, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *CollectionDetail) SetVersion(v string)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *CollectionDetail) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetTierRequired

`func (o *CollectionDetail) GetTierRequired() string`

GetTierRequired returns the TierRequired field if non-nil, zero value otherwise.

### GetTierRequiredOk

`func (o *CollectionDetail) GetTierRequiredOk() (*string, bool)`

GetTierRequiredOk returns a tuple with the TierRequired field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTierRequired

`func (o *CollectionDetail) SetTierRequired(v string)`

SetTierRequired sets TierRequired field to given value.

### HasTierRequired

`func (o *CollectionDetail) HasTierRequired() bool`

HasTierRequired returns a boolean if a field has been set.

### GetCaseCount

`func (o *CollectionDetail) GetCaseCount() int32`

GetCaseCount returns the CaseCount field if non-nil, zero value otherwise.

### GetCaseCountOk

`func (o *CollectionDetail) GetCaseCountOk() (*int32, bool)`

GetCaseCountOk returns a tuple with the CaseCount field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseCount

`func (o *CollectionDetail) SetCaseCount(v int32)`

SetCaseCount sets CaseCount field to given value.

### HasCaseCount

`func (o *CollectionDetail) HasCaseCount() bool`

HasCaseCount returns a boolean if a field has been set.

### GetPublished

`func (o *CollectionDetail) GetPublished() bool`

GetPublished returns the Published field if non-nil, zero value otherwise.

### GetPublishedOk

`func (o *CollectionDetail) GetPublishedOk() (*bool, bool)`

GetPublishedOk returns a tuple with the Published field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublished

`func (o *CollectionDetail) SetPublished(v bool)`

SetPublished sets Published field to given value.

### HasPublished

`func (o *CollectionDetail) HasPublished() bool`

HasPublished returns a boolean if a field has been set.

### GetPublishedAt

`func (o *CollectionDetail) GetPublishedAt() interface{}`

GetPublishedAt returns the PublishedAt field if non-nil, zero value otherwise.

### GetPublishedAtOk

`func (o *CollectionDetail) GetPublishedAtOk() (*interface{}, bool)`

GetPublishedAtOk returns a tuple with the PublishedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPublishedAt

`func (o *CollectionDetail) SetPublishedAt(v interface{})`

SetPublishedAt sets PublishedAt field to given value.

### HasPublishedAt

`func (o *CollectionDetail) HasPublishedAt() bool`

HasPublishedAt returns a boolean if a field has been set.

### SetPublishedAtNil

`func (o *CollectionDetail) SetPublishedAtNil(b bool)`

 SetPublishedAtNil sets the value for PublishedAt to be an explicit nil

### UnsetPublishedAt
`func (o *CollectionDetail) UnsetPublishedAt()`

UnsetPublishedAt ensures that no value is present for PublishedAt, not even an explicit nil
### GetCreatedAt

`func (o *CollectionDetail) GetCreatedAt() time.Time`

GetCreatedAt returns the CreatedAt field if non-nil, zero value otherwise.

### GetCreatedAtOk

`func (o *CollectionDetail) GetCreatedAtOk() (*time.Time, bool)`

GetCreatedAtOk returns a tuple with the CreatedAt field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCreatedAt

`func (o *CollectionDetail) SetCreatedAt(v time.Time)`

SetCreatedAt sets CreatedAt field to given value.

### HasCreatedAt

`func (o *CollectionDetail) HasCreatedAt() bool`

HasCreatedAt returns a boolean if a field has been set.

### GetLastUpdated

`func (o *CollectionDetail) GetLastUpdated() time.Time`

GetLastUpdated returns the LastUpdated field if non-nil, zero value otherwise.

### GetLastUpdatedOk

`func (o *CollectionDetail) GetLastUpdatedOk() (*time.Time, bool)`

GetLastUpdatedOk returns a tuple with the LastUpdated field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLastUpdated

`func (o *CollectionDetail) SetLastUpdated(v time.Time)`

SetLastUpdated sets LastUpdated field to given value.

### HasLastUpdated

`func (o *CollectionDetail) HasLastUpdated() bool`

HasLastUpdated returns a boolean if a field has been set.

### GetMaintainers

`func (o *CollectionDetail) GetMaintainers() []CollectionSummaryMaintainersInner`

GetMaintainers returns the Maintainers field if non-nil, zero value otherwise.

### GetMaintainersOk

`func (o *CollectionDetail) GetMaintainersOk() (*[]CollectionSummaryMaintainersInner, bool)`

GetMaintainersOk returns a tuple with the Maintainers field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMaintainers

`func (o *CollectionDetail) SetMaintainers(v []CollectionSummaryMaintainersInner)`

SetMaintainers sets Maintainers field to given value.

### HasMaintainers

`func (o *CollectionDetail) HasMaintainers() bool`

HasMaintainers returns a boolean if a field has been set.

### GetManifestAvailable

`func (o *CollectionDetail) GetManifestAvailable() bool`

GetManifestAvailable returns the ManifestAvailable field if non-nil, zero value otherwise.

### GetManifestAvailableOk

`func (o *CollectionDetail) GetManifestAvailableOk() (*bool, bool)`

GetManifestAvailableOk returns a tuple with the ManifestAvailable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManifestAvailable

`func (o *CollectionDetail) SetManifestAvailable(v bool)`

SetManifestAvailable sets ManifestAvailable field to given value.

### HasManifestAvailable

`func (o *CollectionDetail) HasManifestAvailable() bool`

HasManifestAvailable returns a boolean if a field has been set.

### GetCases

`func (o *CollectionDetail) GetCases() []CollectionCase`

GetCases returns the Cases field if non-nil, zero value otherwise.

### GetCasesOk

`func (o *CollectionDetail) GetCasesOk() (*[]CollectionCase, bool)`

GetCasesOk returns a tuple with the Cases field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCases

`func (o *CollectionDetail) SetCases(v []CollectionCase)`

SetCases sets Cases field to given value.

### HasCases

`func (o *CollectionDetail) HasCases() bool`

HasCases returns a boolean if a field has been set.

### GetManifest

`func (o *CollectionDetail) GetManifest() []CollectionCase`

GetManifest returns the Manifest field if non-nil, zero value otherwise.

### GetManifestOk

`func (o *CollectionDetail) GetManifestOk() (*[]CollectionCase, bool)`

GetManifestOk returns a tuple with the Manifest field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManifest

`func (o *CollectionDetail) SetManifest(v []CollectionCase)`

SetManifest sets Manifest field to given value.

### HasManifest

`func (o *CollectionDetail) HasManifest() bool`

HasManifest returns a boolean if a field has been set.

### GetManifestPath

`func (o *CollectionDetail) GetManifestPath() interface{}`

GetManifestPath returns the ManifestPath field if non-nil, zero value otherwise.

### GetManifestPathOk

`func (o *CollectionDetail) GetManifestPathOk() (*interface{}, bool)`

GetManifestPathOk returns a tuple with the ManifestPath field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManifestPath

`func (o *CollectionDetail) SetManifestPath(v interface{})`

SetManifestPath sets ManifestPath field to given value.

### HasManifestPath

`func (o *CollectionDetail) HasManifestPath() bool`

HasManifestPath returns a boolean if a field has been set.

### SetManifestPathNil

`func (o *CollectionDetail) SetManifestPathNil(b bool)`

 SetManifestPathNil sets the value for ManifestPath to be an explicit nil

### UnsetManifestPath
`func (o *CollectionDetail) UnsetManifestPath()`

UnsetManifestPath ensures that no value is present for ManifestPath, not even an explicit nil
### GetManifestSha256

`func (o *CollectionDetail) GetManifestSha256() interface{}`

GetManifestSha256 returns the ManifestSha256 field if non-nil, zero value otherwise.

### GetManifestSha256Ok

`func (o *CollectionDetail) GetManifestSha256Ok() (*interface{}, bool)`

GetManifestSha256Ok returns a tuple with the ManifestSha256 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManifestSha256

`func (o *CollectionDetail) SetManifestSha256(v interface{})`

SetManifestSha256 sets ManifestSha256 field to given value.

### HasManifestSha256

`func (o *CollectionDetail) HasManifestSha256() bool`

HasManifestSha256 returns a boolean if a field has been set.

### SetManifestSha256Nil

`func (o *CollectionDetail) SetManifestSha256Nil(b bool)`

 SetManifestSha256Nil sets the value for ManifestSha256 to be an explicit nil

### UnsetManifestSha256
`func (o *CollectionDetail) UnsetManifestSha256()`

UnsetManifestSha256 ensures that no value is present for ManifestSha256, not even an explicit nil

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


