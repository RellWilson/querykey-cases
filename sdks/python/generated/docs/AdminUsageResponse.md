# AdminUsageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **date** |  | 
**user_id** | **object** |  | [optional] 
**groups** | [**List[AdminUsageGroup]**](AdminUsageGroup.md) |  | 

## Example

```python
from querykey_cases_sdk.models.admin_usage_response import AdminUsageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdminUsageResponse from a JSON string
admin_usage_response_instance = AdminUsageResponse.from_json(json)
# print the JSON string representation of the object
print(AdminUsageResponse.to_json())

# convert the object into a dict
admin_usage_response_dict = admin_usage_response_instance.to_dict()
# create an instance of AdminUsageResponse from a dict
admin_usage_response_from_dict = AdminUsageResponse.from_dict(admin_usage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


