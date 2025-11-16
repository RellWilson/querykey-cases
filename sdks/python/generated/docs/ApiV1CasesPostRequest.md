# ApiV1CasesPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | 
**slug** | **str** |  | 
**summary** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**sources** | **List[object]** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_v1_cases_post_request import ApiV1CasesPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CasesPostRequest from a JSON string
api_v1_cases_post_request_instance = ApiV1CasesPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CasesPostRequest.to_json())

# convert the object into a dict
api_v1_cases_post_request_dict = api_v1_cases_post_request_instance.to_dict()
# create an instance of ApiV1CasesPostRequest from a dict
api_v1_cases_post_request_from_dict = ApiV1CasesPostRequest.from_dict(api_v1_cases_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


