# QuotaExceeded


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**message** | **str** |  | [optional] 
**group** | **str** |  | 
**plan** | **str** |  | 
**limit** | **int** |  | 
**remaining** | **int** |  | 
**reset_at** | **datetime** |  | 

## Example

```python
from querykey_cases_sdk.models.quota_exceeded import QuotaExceeded

# TODO update the JSON string below
json = "{}"
# create an instance of QuotaExceeded from a JSON string
quota_exceeded_instance = QuotaExceeded.from_json(json)
# print the JSON string representation of the object
print(QuotaExceeded.to_json())

# convert the object into a dict
quota_exceeded_dict = quota_exceeded_instance.to_dict()
# create an instance of QuotaExceeded from a dict
quota_exceeded_from_dict = QuotaExceeded.from_dict(quota_exceeded_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


