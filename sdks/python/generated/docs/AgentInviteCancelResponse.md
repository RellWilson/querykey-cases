# AgentInviteCancelResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** |  | 
**registration_id** | **object** |  | [optional] 
**status** | **str** |  | 
**invite_email** | **str** |  | 
**invite_name** | **object** |  | [optional] 
**invite_label** | **object** |  | [optional] 
**invite_cancelled** | **bool** |  | 
**reason** | **object** | Operator provided cancellation reason | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_invite_cancel_response import AgentInviteCancelResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentInviteCancelResponse from a JSON string
agent_invite_cancel_response_instance = AgentInviteCancelResponse.from_json(json)
# print the JSON string representation of the object
print(AgentInviteCancelResponse.to_json())

# convert the object into a dict
agent_invite_cancel_response_dict = agent_invite_cancel_response_instance.to_dict()
# create an instance of AgentInviteCancelResponse from a dict
agent_invite_cancel_response_from_dict = AgentInviteCancelResponse.from_dict(agent_invite_cancel_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


