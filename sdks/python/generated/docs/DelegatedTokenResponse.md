# DelegatedTokenResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delegated_token** | **str** | Secret token value (single use) | 
**expires_at** | **datetime** | Expiration timestamp in ISO-8601 | 
**scopes** | **List[str]** | Granted scopes (always agent:register for v1.0) | 

## Example

```python
from querykey_cases_sdk.models.delegated_token_response import DelegatedTokenResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DelegatedTokenResponse from a JSON string
delegated_token_response_instance = DelegatedTokenResponse.from_json(json)
# print the JSON string representation of the object
print(DelegatedTokenResponse.to_json())

# convert the object into a dict
delegated_token_response_dict = delegated_token_response_instance.to_dict()
# create an instance of DelegatedTokenResponse from a dict
delegated_token_response_from_dict = DelegatedTokenResponse.from_dict(delegated_token_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


