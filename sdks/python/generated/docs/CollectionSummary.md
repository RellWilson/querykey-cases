# CollectionSummary


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

## Example

```python
from querykey_cases_sdk.models.collection_summary import CollectionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CollectionSummary from a JSON string
collection_summary_instance = CollectionSummary.from_json(json)
# print the JSON string representation of the object
print(CollectionSummary.to_json())

# convert the object into a dict
collection_summary_dict = collection_summary_instance.to_dict()
# create an instance of CollectionSummary from a dict
collection_summary_from_dict = CollectionSummary.from_dict(collection_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


