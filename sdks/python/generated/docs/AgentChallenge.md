# AgentChallenge


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**challenge** | **str** | Hex-encoded PoW challenge token | 
**difficulty** | **int** | Difficulty target expressed in leading zero bits | 
**expires_at** | **datetime** |  | 
**invite_supported** | **bool** | Indicates whether the invite flow is available | 

## Example

```python
from querykey_cases_sdk.models.agent_challenge import AgentChallenge

# TODO update the JSON string below
json = "{}"
# create an instance of AgentChallenge from a JSON string
agent_challenge_instance = AgentChallenge.from_json(json)
# print the JSON string representation of the object
print(AgentChallenge.to_json())

# convert the object into a dict
agent_challenge_dict = agent_challenge_instance.to_dict()
# create an instance of AgentChallenge from a dict
agent_challenge_from_dict = AgentChallenge.from_dict(agent_challenge_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


