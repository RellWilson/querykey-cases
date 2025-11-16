# ApiAuthRegisterPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**password** | **str** |  | 

## Example

```python
from querykey_cases_sdk.models.api_auth_register_post_request import ApiAuthRegisterPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiAuthRegisterPostRequest from a JSON string
api_auth_register_post_request_instance = ApiAuthRegisterPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiAuthRegisterPostRequest.to_json())

# convert the object into a dict
api_auth_register_post_request_dict = api_auth_register_post_request_instance.to_dict()
# create an instance of ApiAuthRegisterPostRequest from a dict
api_auth_register_post_request_from_dict = ApiAuthRegisterPostRequest.from_dict(api_auth_register_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


