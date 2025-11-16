# AgentRegistrationOwner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **object** | Owner display name used in invite email | [optional] 
**email** | **str** | Owner email address that will receive the invite | 

## Example

```python
from querykey_cases_sdk.models.agent_registration_owner import AgentRegistrationOwner

# TODO update the JSON string below
json = "{}"
# create an instance of AgentRegistrationOwner from a JSON string
agent_registration_owner_instance = AgentRegistrationOwner.from_json(json)
# print the JSON string representation of the object
print(AgentRegistrationOwner.to_json())

# convert the object into a dict
agent_registration_owner_dict = agent_registration_owner_instance.to_dict()
# create an instance of AgentRegistrationOwner from a dict
agent_registration_owner_from_dict = AgentRegistrationOwner.from_dict(agent_registration_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


