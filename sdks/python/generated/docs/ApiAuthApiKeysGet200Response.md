# ApiAuthApiKeysGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**keys** | [**List[ApiAuthApiKeysGet200ResponseKeysInner]**](ApiAuthApiKeysGet200ResponseKeysInner.md) |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_auth_api_keys_get200_response import ApiAuthApiKeysGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthApiKeysGet200Response from a JSON string
api_auth_api_keys_get200_response_instance = ApiAuthApiKeysGet200Response.from_json(json)
# print the JSON string representation of the object
print(ApiAuthApiKeysGet200Response.to_json())

# convert the object into a dict
api_auth_api_keys_get200_response_dict = api_auth_api_keys_get200_response_instance.to_dict()
# create an instance of ApiAuthApiKeysGet200Response from a dict
api_auth_api_keys_get200_response_from_dict = ApiAuthApiKeysGet200Response.from_dict(api_auth_api_keys_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


