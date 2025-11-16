# CollectionDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**ecosystem** | **str** |  | [optional] 
**domain** | **object** |  | [optional] 
**version** | **str** |  | [optional] 
**tier_required** | **str** |  | [optional] 
**case_count** | **int** |  | [optional] 
**published** | **bool** |  | [optional] 
**published_at** | **object** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**last_updated** | **datetime** |  | [optional] 
**maintainers** | [**List[CollectionSummaryMaintainersInner]**](CollectionSummaryMaintainersInner.md) |  | [optional] 
**manifest_available** | **bool** |  | [optional] 
**cases** | [**List[CollectionCase]**](CollectionCase.md) |  | [optional] 
**manifest** | [**List[CollectionCase]**](CollectionCase.md) |  | [optional] 
**manifest_path** | **object** |  | [optional] 
**manifest_sha256** | **object** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.collection_detail import CollectionDetail

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionDetail from a JSON string
collection_detail_instance = CollectionDetail.from_json(json)
# print the JSON string representation of the object
print(CollectionDetail.to_json())

# convert the object into a dict
collection_detail_dict = collection_detail_instance.to_dict()
# create an instance of CollectionDetail from a dict
collection_detail_from_dict = CollectionDetail.from_dict(collection_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


