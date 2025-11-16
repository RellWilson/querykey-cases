# ApiV1AgentsIdInviteCancelPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | Optional cancellation reason captured for audit trails | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_v1_agents_id_invite_cancel_post_request import ApiV1AgentsIdInviteCancelPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AgentsIdInviteCancelPostRequest from a JSON string
api_v1_agents_id_invite_cancel_post_request_instance = ApiV1AgentsIdInviteCancelPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AgentsIdInviteCancelPostRequest.to_json())

# convert the object into a dict
api_v1_agents_id_invite_cancel_post_request_dict = api_v1_agents_id_invite_cancel_post_request_instance.to_dict()
# create an instance of ApiV1AgentsIdInviteCancelPostRequest from a dict
api_v1_agents_id_invite_cancel_post_request_from_dict = ApiV1AgentsIdInviteCancelPostRequest.from_dict(api_v1_agents_id_invite_cancel_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


