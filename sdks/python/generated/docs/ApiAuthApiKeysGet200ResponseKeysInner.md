# ApiAuthApiKeysGet200ResponseKeysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**label** | **object** |  | [optional] 
**last_used_at** | **object** |  | [optional] 
**created_at** | **datetime** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_auth_api_keys_get200_response_keys_inner import ApiAuthApiKeysGet200ResponseKeysInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthApiKeysGet200ResponseKeysInner from a JSON string
api_auth_api_keys_get200_response_keys_inner_instance = ApiAuthApiKeysGet200ResponseKeysInner.from_json(json)
# print the JSON string representation of the object
print(ApiAuthApiKeysGet200ResponseKeysInner.to_json())

# convert the object into a dict
api_auth_api_keys_get200_response_keys_inner_dict = api_auth_api_keys_get200_response_keys_inner_instance.to_dict()
# create an instance of ApiAuthApiKeysGet200ResponseKeysInner from a dict
api_auth_api_keys_get200_response_keys_inner_from_dict = ApiAuthApiKeysGet200ResponseKeysInner.from_dict(api_auth_api_keys_get200_response_keys_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


