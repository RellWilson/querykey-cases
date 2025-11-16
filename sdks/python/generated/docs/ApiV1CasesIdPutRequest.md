# ApiV1CasesIdPutRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**title** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**body** | **str** |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**sources** | **List[object]** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_v1_cases_id_put_request import ApiV1CasesIdPutRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1CasesIdPutRequest from a JSON string
api_v1_cases_id_put_request_instance = ApiV1CasesIdPutRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1CasesIdPutRequest.to_json())

# convert the object into a dict
api_v1_cases_id_put_request_dict = api_v1_cases_id_put_request_instance.to_dict()
# create an instance of ApiV1CasesIdPutRequest from a dict
api_v1_cases_id_put_request_from_dict = ApiV1CasesIdPutRequest.from_dict(api_v1_cases_id_put_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


