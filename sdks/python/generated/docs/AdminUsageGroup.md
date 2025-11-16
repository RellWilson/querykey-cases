# AdminUsageGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint_group** | **str** |  | [optional] 
**count** | **int** |  | [optional] 
**user_id** | **object** |  | [optional] 
**total** | **object** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.admin_usage_group import AdminUsageGroup

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUsageGroup from a JSON string
admin_usage_group_instance = AdminUsageGroup.from_json(json)
# print the JSON string representation of the object
print(AdminUsageGroup.to_json())

# convert the object into a dict
admin_usage_group_dict = admin_usage_group_instance.to_dict()
# create an instance of AdminUsageGroup from a dict
admin_usage_group_from_dict = AdminUsageGroup.from_dict(admin_usage_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


