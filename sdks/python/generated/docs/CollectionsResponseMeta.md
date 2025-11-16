# CollectionsResponseMeta


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page** | **int** |  | [optional] 
**limit** | **int** |  | [optional] 
**total** | **int** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.collections_response_meta import CollectionsResponseMeta

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionsResponseMeta from a JSON string
collections_response_meta_instance = CollectionsResponseMeta.from_json(json)
# print the JSON string representation of the object
print(CollectionsResponseMeta.to_json())

# convert the object into a dict
collections_response_meta_dict = collections_response_meta_instance.to_dict()
# create an instance of CollectionsResponseMeta from a dict
collections_response_meta_from_dict = CollectionsResponseMeta.from_dict(collections_response_meta_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


