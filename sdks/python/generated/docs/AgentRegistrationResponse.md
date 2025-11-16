# AgentRegistrationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** |  | 
**api_key** | **str** | Issued agent-scoped API key secret | 
**scopes** | **List[str]** |  | 
**verified** | **bool** | Indicates whether the agent is auto-verified on creation | 
**status** | **str** |  | 
**owner_user_id** | **str** | Account that owns the agent | 
**seat_usage** | **object** | Latest recorded seat usage for the owner | [optional] 
**seat_limit** | **object** | Seat limit in effect for the owner | [optional] 
**invite_email** | **object** | Invite email that claimed the agent (invite flow only) | [optional] 
**invite_name** | **object** | Owner name associated with the invite flow | [optional] 
**owner_email** | **str** | Owner email awaiting confirmation | 
**invite_expires_at** | **datetime** | ISO timestamp when the invite expires | 
**invite_delivery** | **str** | Primary delivery channel for the invite | 
**invite_token** | **object** | Invite token returned in non-production environments for testing | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_registration_response import AgentRegistrationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationResponse from a JSON string
agent_registration_response_instance = AgentRegistrationResponse.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationResponse.to_json())

# convert the object into a dict
agent_registration_response_dict = agent_registration_response_instance.to_dict()
# create an instance of AgentRegistrationResponse from a dict
agent_registration_response_from_dict = AgentRegistrationResponse.from_dict(agent_registration_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


