# AgentInviteResendResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invite** | [**PendingAgentInvite**](PendingAgentInvite.md) |  | 

## Example

```python
from querykey_cases_sdk.models.agent_invite_resend_response import AgentInviteResendResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AgentInviteResendResponse from a JSON string
agent_invite_resend_response_instance = AgentInviteResendResponse.from_json(json)
# print the JSON string representation of the object
print(AgentInviteResendResponse.to_json())

# convert the object into a dict
agent_invite_resend_response_dict = agent_invite_resend_response_instance.to_dict()
# create an instance of AgentInviteResendResponse from a dict
agent_invite_resend_response_from_dict = AgentInviteResendResponse.from_dict(agent_invite_resend_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


