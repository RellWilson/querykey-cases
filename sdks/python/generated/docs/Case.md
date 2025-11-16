# Case


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**body** | **object** |  | [optional] 
**status** | **str** |  | [optional] 
**version** | **int** |  | [optional] 
**needs_review** | **object** |  | [optional] 
**tags_csv** | **object** |  | [optional] 
**sources_json** | **object** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.case import Case

# TODO update the JSON string below
json = "{}"
# create an instance of Case from a JSON string
case_instance = Case.from_json(json)
# print the JSON string representation of the object
print(Case.to_json())

# convert the object into a dict
case_dict = case_instance.to_dict()
# create an instance of Case from a dict
case_from_dict = Case.from_dict(case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


