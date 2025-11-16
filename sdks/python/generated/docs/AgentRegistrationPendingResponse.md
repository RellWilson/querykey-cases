# AgentRegistrationPendingResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** |  | 
**status** | **str** |  | 
**owner_email** | **str** | Owner email awaiting confirmation | 
**invite_expires_at** | **datetime** | ISO timestamp when the invite expires | 
**invite_delivery** | **str** | Primary delivery channel for the invite | 
**invite_token** | **object** | Invite token returned in non-production environments for testing | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_registration_pending_response import AgentRegistrationPendingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationPendingResponse from a JSON string
agent_registration_pending_response_instance = AgentRegistrationPendingResponse.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationPendingResponse.to_json())

# convert the object into a dict
agent_registration_pending_response_dict = agent_registration_pending_response_instance.to_dict()
# create an instance of AgentRegistrationPendingResponse from a dict
agent_registration_pending_response_from_dict = AgentRegistrationPendingResponse.from_dict(agent_registration_pending_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


