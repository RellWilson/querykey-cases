# PendingAgentInvitesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pending** | [**List[PendingAgentInvite]**](PendingAgentInvite.md) |  | 

## Example

```python
from querykey_cases_sdk.models.pending_agent_invites_response import PendingAgentInvitesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PendingAgentInvitesResponse from a JSON string
pending_agent_invites_response_instance = PendingAgentInvitesResponse.from_json(json)
# print the JSON string representation of the object
print(PendingAgentInvitesResponse.to_json())

# convert the object into a dict
pending_agent_invites_response_dict = pending_agent_invites_response_instance.to_dict()
# create an instance of PendingAgentInvitesResponse from a dict
pending_agent_invites_response_from_dict = PendingAgentInvitesResponse.from_dict(pending_agent_invites_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


