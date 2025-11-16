# QKeyCase

 QKey JSON representation (application/qkey)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**body** | **object** |  | [optional] 
**version** | **int** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**sources** | **List[object]** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.q_key_case import QKeyCase

# TODO update the JSON string below
json = "{}"
# create an instance of QKeyCase from a JSON string
q_key_case_instance = QKeyCase.from_json(json)
# print the JSON string representation of the object
print(QKeyCase.to_json())

# convert the object into a dict
q_key_case_dict = q_key_case_instance.to_dict()
# create an instance of QKeyCase from a dict
q_key_case_from_dict = QKeyCase.from_dict(q_key_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


