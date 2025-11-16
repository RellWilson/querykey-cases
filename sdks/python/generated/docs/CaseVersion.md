# CaseVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **int** |  | [optional] 
**content_hash** | **str** |  | [optional] 
**created_at** | **datetime** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.case_version import CaseVersion

# TODO update the JSON string below
json = "{}"
# create an instance of CaseVersion from a JSON string
case_version_instance = CaseVersion.from_json(json)
# print the JSON string representation of the object
print(CaseVersion.to_json())

# convert the object into a dict
case_version_dict = case_version_instance.to_dict()
# create an instance of CaseVersion from a dict
case_version_from_dict = CaseVersion.from_dict(case_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


