# ApiAdminAgentIdExemptPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exempt** | **bool** |  | 
**reason** | **str** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_admin_agent_id_exempt_post_request import ApiAdminAgentIdExemptPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAdminAgentIdExemptPostRequest from a JSON string
api_admin_agent_id_exempt_post_request_instance = ApiAdminAgentIdExemptPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAdminAgentIdExemptPostRequest.to_json())

# convert the object into a dict
api_admin_agent_id_exempt_post_request_dict = api_admin_agent_id_exempt_post_request_instance.to_dict()
# create an instance of ApiAdminAgentIdExemptPostRequest from a dict
api_admin_agent_id_exempt_post_request_from_dict = ApiAdminAgentIdExemptPostRequest.from_dict(api_admin_agent_id_exempt_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


