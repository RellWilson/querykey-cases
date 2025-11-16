# BundleFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Path** | **string** |  | 
**SizeBytes** | **int32** |  | 
**ChecksumSha256** | **string** |  | 

## Methods

### NewBundleFile

`func NewBundleFile(path string, sizeBytes int32, checksumSha256 string, ) *BundleFile`

NewBundleFile instantiates a new BundleFile object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBundleFileWithDefaults

`func NewBundleFileWithDefaults() *BundleFile`

NewBundleFileWithDefaults instantiates a new BundleFile object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPath

`func (o *BundleFile) GetPath() string`

GetPath returns the Path field if non-nil, zero value otherwise.

### GetPathOk

`func (o *BundleFile) GetPathOk() (*string, bool)`

GetPathOk returns a tuple with the Path field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPath

`func (o *BundleFile) SetPath(v string)`

SetPath sets Path field to given value.


### GetSizeBytes

`func (o *BundleFile) GetSizeBytes() int32`

GetSizeBytes returns the SizeBytes field if non-nil, zero value otherwise.

### GetSizeBytesOk

`func (o *BundleFile) GetSizeBytesOk() (*int32, bool)`

GetSizeBytesOk returns a tuple with the SizeBytes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSizeBytes

`func (o *BundleFile) SetSizeBytes(v int32)`

SetSizeBytes sets SizeBytes field to given value.


### GetChecksumSha256

`func (o *BundleFile) GetChecksumSha256() string`

GetChecksumSha256 returns the ChecksumSha256 field if non-nil, zero value otherwise.

### GetChecksumSha256Ok

`func (o *BundleFile) GetChecksumSha256Ok() (*string, bool)`

GetChecksumSha256Ok returns a tuple with the ChecksumSha256 field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetChecksumSha256

`func (o *BundleFile) SetChecksumSha256(v string)`

SetChecksumSha256 sets ChecksumSha256 field to given value.



[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


