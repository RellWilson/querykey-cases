# UsageSelf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | 
**plan** | **str** |  | 
**limits** | **Dict[str, object]** |  | 
**usage** | [**List[UsageSelfUsageInner]**](UsageSelfUsageInner.md) |  | 
**reset_at** | **datetime** |  | 

## Example

```python
from querykey_cases_sdk.models.usage_self import UsageSelf

# TODO update the JSON string below
json = "{}"
# create an instance of UsageSelf from a JSON string
usage_self_instance = UsageSelf.from_json(json)
# print the JSON string representation of the object
print(UsageSelf.to_json())

# convert the object into a dict
usage_self_dict = usage_self_instance.to_dict()
# create an instance of UsageSelf from a dict
usage_self_from_dict = UsageSelf.from_dict(usage_self_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


