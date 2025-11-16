# DelegatedTokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires_in** | **object** | Requested TTL in seconds; server enforces configured bounds | [optional] 
**scopes** | **List[str]** | Optional scopes list; only agent:register is currently supported | [optional] 

## Example

```python
from querykey_cases_sdk.models.delegated_token_request import DelegatedTokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedTokenRequest from a JSON string
delegated_token_request_instance = DelegatedTokenRequest.from_json(json)
# print the JSON string representation of the object
print(DelegatedTokenRequest.to_json())

# convert the object into a dict
delegated_token_request_dict = delegated_token_request_instance.to_dict()
# create an instance of DelegatedTokenRequest from a dict
delegated_token_request_from_dict = DelegatedTokenRequest.from_dict(delegated_token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


