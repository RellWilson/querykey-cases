# UsageSelfUsageInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | **str** |  | [optional] 
**used** | **int** |  | [optional] 
**limit** | **object** |  | [optional] 
**remaining** | **object** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.usage_self_usage_inner import UsageSelfUsageInner

# TODO update the JSON string below
json = "{}"
# create an instance of UsageSelfUsageInner from a JSON string
usage_self_usage_inner_instance = UsageSelfUsageInner.from_json(json)
# print the JSON string representation of the object
print(UsageSelfUsageInner.to_json())

# convert the object into a dict
usage_self_usage_inner_dict = usage_self_usage_inner_instance.to_dict()
# create an instance of UsageSelfUsageInner from a dict
usage_self_usage_inner_from_dict = UsageSelfUsageInner.from_dict(usage_self_usage_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


