# BundleManifest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**case_id** | **str** |  | [optional] 
**version** | **int** |  | [optional] 
**archive_format** | **str** |  | [optional] 
**checksum_sha256** | **str** |  | [optional] 
**files** | [**List[BundleFile]**](BundleFile.md) |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.bundle_manifest import BundleManifest

# TODO update the JSON string below
json = "{}"
# create an instance of BundleManifest from a JSON string
bundle_manifest_instance = BundleManifest.from_json(json)
# print the JSON string representation of the object
print(BundleManifest.to_json())

# convert the object into a dict
bundle_manifest_dict = bundle_manifest_instance.to_dict()
# create an instance of BundleManifest from a dict
bundle_manifest_from_dict = BundleManifest.from_dict(bundle_manifest_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


