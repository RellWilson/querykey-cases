# BundleManifest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Id** | Pointer to **string** |  | [optional] 
**CaseId** | Pointer to **string** |  | [optional] 
**Version** | Pointer to **int32** |  | [optional] 
**ArchiveFormat** | Pointer to **string** |  | [optional] 
**ChecksumSha256** | Pointer to **string** |  | [optional] 
**Files** | Pointer to [**[]BundleFile**](BundleFile.md) |  | [optional] 

## Methods

### NewBundleManifest

`func NewBundleManifest() *BundleManifest`

NewBundleManifest instantiates a new BundleManifest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBundleManifestWithDefaults

`func NewBundleManifestWithDefaults() *BundleManifest`

NewBundleManifestWithDefaults instantiates a new BundleManifest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetId

`func (o *BundleManifest) GetId() string`

GetId returns the Id field if non-nil, zero value otherwise.

### GetIdOk

`func (o *BundleManifest) GetIdOk() (*string, bool)`

GetIdOk returns a tuple with the Id field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetId

`func (o *BundleManifest) SetId(v string)`

SetId sets Id field to given value.

### HasId

`func (o *BundleManifest) HasId() bool`

HasId returns a boolean if a field has been set.

### GetCaseId

`func (o *BundleManifest) GetCaseId() string`

GetCaseId returns the CaseId field if non-nil, zero value otherwise.

### GetCaseIdOk

`func (o *BundleManifest) GetCaseIdOk() (*string, bool)`

GetCaseIdOk returns a tuple with the CaseId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCaseId

`func (o *BundleManifest) SetCaseId(v string)`

SetCaseId sets CaseId field to given value.

### HasCaseId

`func (o *BundleManifest) HasCaseId() bool`

HasCaseId returns a boolean if a field has been set.

### GetVersion

`func (o *BundleManifest) GetVersion() int32`

GetVersion returns the Version field if non-nil, zero value otherwise.

### GetVersionOk

`func (o *BundleManifest) GetVersionOk() (*int32, bool)`

GetVersionOk returns a tuple with the Version field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetVersion

`func (o *BundleManifest) SetVersion(v int32)`

SetVersion sets Version field to given value.

### HasVersion

`func (o *BundleManifest) HasVersion() bool`

HasVersion returns a boolean if a field has been set.

### GetArchiveFormat

`func (o *BundleManifest) GetArchiveFormat() string`

GetArchiveFormat returns the ArchiveFormat field if non-nil, zero value otherwise.

### GetArchiveFormatOk

`func (o *BundleManifest) GetArchiveFormatOk() (*string, bool)`

GetArchiveFormatOk returns a tuple with the ArchiveFormat field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArchiveFormat

`func (o *BundleManifest) SetArchiveFormat(v string)`

SetArchiveFormat sets ArchiveFormat field to given value.

### HasArchiveFormat

`func (o *BundleManifest) HasArchiveFormat() bool`

HasArchiveFormat returns a boolean if a field has been set.

### GetChecksumSha256

`func (o *BundleManifest) GetChecksumSha256() string`

GetChecksumSha256 returns the ChecksumSha256 field if non-nil, zero value otherwise.

### GetChecksumSha256Ok

`func (o *BundleManifest) GetChecksumSha256Ok() (*string, bool)`

GetChecksumSha256Ok returns a tuple with the ChecksumSha256 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecksumSha256

`func (o *BundleManifest) SetChecksumSha256(v string)`

SetChecksumSha256 sets ChecksumSha256 field to given value.

### HasChecksumSha256

`func (o *BundleManifest) HasChecksumSha256() bool`

HasChecksumSha256 returns a boolean if a field has been set.

### GetFiles

`func (o *BundleManifest) GetFiles() []BundleFile`

GetFiles returns the Files field if non-nil, zero value otherwise.

### GetFilesOk

`func (o *BundleManifest) GetFilesOk() (*[]BundleFile, bool)`

GetFilesOk returns a tuple with the Files field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFiles

`func (o *BundleManifest) SetFiles(v []BundleFile)`

SetFiles sets Files field to given value.

### HasFiles

`func (o *BundleManifest) HasFiles() bool`

HasFiles returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


