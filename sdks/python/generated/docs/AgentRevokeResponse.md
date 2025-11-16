# AgentRevokeResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** |  | 
**status** | **str** |  | 
**owner_user_id** | **object** |  | [optional] 
**seat_usage** | **object** | Current seat usage for the owner after revocation | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_revoke_response import AgentRevokeResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRevokeResponse from a JSON string
agent_revoke_response_instance = AgentRevokeResponse.from_json(json)
# print the JSON string representation of the object
print(AgentRevokeResponse.to_json())

# convert the object into a dict
agent_revoke_response_dict = agent_revoke_response_instance.to_dict()
# create an instance of AgentRevokeResponse from a dict
agent_revoke_response_from_dict = AgentRevokeResponse.from_dict(agent_revoke_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


