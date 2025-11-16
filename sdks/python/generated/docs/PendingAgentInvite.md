# PendingAgentInvite


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**agent_id** | **str** |  | 
**registration_id** | **object** |  | [optional] 
**label** | **object** | Agent label recorded during invite creation | [optional] 
**invite_email** | **str** |  | 
**invite_name** | **object** |  | [optional] 
**status** | **str** |  | 
**invite_expires_at** | **object** |  | [optional] 
**created_at** | **object** |  | [optional] 
**updated_at** | **object** |  | [optional] 
**challenge_difficulty** | **object** | Proof-of-work difficulty tied to the invite challenge | [optional] 
**metadata** | **Dict[str, object]** | Opaque metadata captured for invite lifecycle | [optional] 
**is_expired** | **bool** |  | 
**resend_count** | **int** |  | 
**invite_last_sent_at** | **object** |  | [optional] 
**invite_last_sent_by** | [**PendingAgentInviteInviteLastSentBy**](PendingAgentInviteInviteLastSentBy.md) |  | [optional] 
**expires_in_seconds** | **object** | Remaining seconds until expiry (negative when expired) | [optional] 

## Example

```python
from querykey_cases_sdk.models.pending_agent_invite import PendingAgentInvite

# TODO update the JSON string below
json = "{}"
# create an instance of PendingAgentInvite from a JSON string
pending_agent_invite_instance = PendingAgentInvite.from_json(json)
# print the JSON string representation of the object
print(PendingAgentInvite.to_json())

# convert the object into a dict
pending_agent_invite_dict = pending_agent_invite_instance.to_dict()
# create an instance of PendingAgentInvite from a dict
pending_agent_invite_from_dict = PendingAgentInvite.from_dict(pending_agent_invite_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


