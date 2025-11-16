# BundleFile


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** |  | 
**size_bytes** | **int** |  | 
**checksum_sha256** | **str** |  | 

## Example

```python
from querykey_cases_sdk.models.bundle_file import BundleFile

# TODO update the JSON string below
json = "{}"
# create an instance of BundleFile from a JSON string
bundle_file_instance = BundleFile.from_json(json)
# print the JSON string representation of the object
print(BundleFile.to_json())

# convert the object into a dict
bundle_file_dict = bundle_file_instance.to_dict()
# create an instance of BundleFile from a dict
bundle_file_from_dict = BundleFile.from_dict(bundle_file_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


