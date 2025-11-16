# ResearchAsset


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**tier_required** | **str** |  | [optional] 
**file_path** | **str** |  | [optional] 
**file_size_bytes** | **int** |  | [optional] 
**checksum_sha256** | **str** |  | [optional] 
**metadata** | **object** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.research_asset import ResearchAsset

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchAsset from a JSON string
research_asset_instance = ResearchAsset.from_json(json)
# print the JSON string representation of the object
print(ResearchAsset.to_json())

# convert the object into a dict
research_asset_dict = research_asset_instance.to_dict()
# create an instance of ResearchAsset from a dict
research_asset_from_dict = ResearchAsset.from_dict(research_asset_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


