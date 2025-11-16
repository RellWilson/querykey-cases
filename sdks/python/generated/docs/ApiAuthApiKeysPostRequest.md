# ApiAuthApiKeysPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**scopes** | **List[str]** | Optional scopes to associate with key | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_auth_api_keys_post_request import ApiAuthApiKeysPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthApiKeysPostRequest from a JSON string
api_auth_api_keys_post_request_instance = ApiAuthApiKeysPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAuthApiKeysPostRequest.to_json())

# convert the object into a dict
api_auth_api_keys_post_request_dict = api_auth_api_keys_post_request_instance.to_dict()
# create an instance of ApiAuthApiKeysPostRequest from a dict
api_auth_api_keys_post_request_from_dict = ApiAuthApiKeysPostRequest.from_dict(api_auth_api_keys_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


