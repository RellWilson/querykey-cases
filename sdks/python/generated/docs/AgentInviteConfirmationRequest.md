# AgentInviteConfirmationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**token** | **str** | Invite token delivered via email | 
**invite_token** | **object** | Alias for token supported for backward compatibility | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_invite_confirmation_request import AgentInviteConfirmationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AgentInviteConfirmationRequest from a JSON string
agent_invite_confirmation_request_instance = AgentInviteConfirmationRequest.from_json(json)
# print the JSON string representation of the object
print(AgentInviteConfirmationRequest.to_json())

# convert the object into a dict
agent_invite_confirmation_request_dict = agent_invite_confirmation_request_instance.to_dict()
# create an instance of AgentInviteConfirmationRequest from a dict
agent_invite_confirmation_request_from_dict = AgentInviteConfirmationRequest.from_dict(agent_invite_confirmation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


