# ApiV1AgentsIdRevokePostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Optional reason for auditing purposes | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_v1_agents_id_revoke_post_request import ApiV1AgentsIdRevokePostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AgentsIdRevokePostRequest from a JSON string
api_v1_agents_id_revoke_post_request_instance = ApiV1AgentsIdRevokePostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AgentsIdRevokePostRequest.to_json())

# convert the object into a dict
api_v1_agents_id_revoke_post_request_dict = api_v1_agents_id_revoke_post_request_instance.to_dict()
# create an instance of ApiV1AgentsIdRevokePostRequest from a dict
api_v1_agents_id_revoke_post_request_from_dict = ApiV1AgentsIdRevokePostRequest.from_dict(api_v1_agents_id_revoke_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


