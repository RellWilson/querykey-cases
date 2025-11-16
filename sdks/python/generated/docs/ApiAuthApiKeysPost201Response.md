# ApiAuthApiKeysPost201Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**api_key** | **str** |  | [optional] 
**label** | **object** |  | [optional] 
**scopes** | **List[str]** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_auth_api_keys_post201_response import ApiAuthApiKeysPost201Response

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthApiKeysPost201Response from a JSON string
api_auth_api_keys_post201_response_instance = ApiAuthApiKeysPost201Response.from_json(json)
# print the JSON string representation of the object
print(ApiAuthApiKeysPost201Response.to_json())

# convert the object into a dict
api_auth_api_keys_post201_response_dict = api_auth_api_keys_post201_response_instance.to_dict()
# create an instance of ApiAuthApiKeysPost201Response from a dict
api_auth_api_keys_post201_response_from_dict = ApiAuthApiKeysPost201Response.from_dict(api_auth_api_keys_post201_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


