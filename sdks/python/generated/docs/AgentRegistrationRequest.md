# AgentRegistrationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge** | **str** | Challenge value returned by GET /api/v1/registration/challenge | 
**public_key** | **str** | Hex-encoded 32-byte public key | 
**nonce** | [**AgentRegistrationRequestNonce**](AgentRegistrationRequestNonce.md) |  | 
**label** | **object** | Optional human-friendly label for the agent | [optional] 
**delegated_token** | **object** | Single-use delegated token issued by the owner. Not permitted for invite flow. | [optional] 
**owner** | [**AgentRegistrationOwner**](AgentRegistrationOwner.md) |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.agent_registration_request import AgentRegistrationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationRequest from a JSON string
agent_registration_request_instance = AgentRegistrationRequest.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationRequest.to_json())

# convert the object into a dict
agent_registration_request_dict = agent_registration_request_instance.to_dict()
# create an instance of AgentRegistrationRequest from a dict
agent_registration_request_from_dict = AgentRegistrationRequest.from_dict(agent_registration_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


