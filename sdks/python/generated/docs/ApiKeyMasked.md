# ApiKeyMasked


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**label** | **object** |  | [optional] 
**last_used_at** | **object** |  | [optional] 
**created_at** | **datetime** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.api_key_masked import ApiKeyMasked

# TODO update the JSON string below
json = "{}"
# create an instance of ApiKeyMasked from a JSON string
api_key_masked_instance = ApiKeyMasked.from_json(json)
# print the JSON string representation of the object
print(ApiKeyMasked.to_json())

# convert the object into a dict
api_key_masked_dict = api_key_masked_instance.to_dict()
# create an instance of ApiKeyMasked from a dict
api_key_masked_from_dict = ApiKeyMasked.from_dict(api_key_masked_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


