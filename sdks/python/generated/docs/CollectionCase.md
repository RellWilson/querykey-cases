# CollectionCase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**case_id** | **str** |  | 
**title** | **object** |  | [optional] 
**order_index** | **int** |  | 

## Example

```python
from querykey_cases_sdk.models.collection_case import CollectionCase

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionCase from a JSON string
collection_case_instance = CollectionCase.from_json(json)
# print the JSON string representation of the object
print(CollectionCase.to_json())

# convert the object into a dict
collection_case_dict = collection_case_instance.to_dict()
# create an instance of CollectionCase from a dict
collection_case_from_dict = CollectionCase.from_dict(collection_case_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


