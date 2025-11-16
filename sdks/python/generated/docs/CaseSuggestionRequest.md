# CaseSuggestionRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**suggestion** | **str** | Short description of the improvement or correction | 
**fields** | **List[str]** | Optional list of fields the suggestion relates to | [optional] 
**contact** | **str** | Optional contact preference or note | [optional] 

## Example

```python
from querykey_cases_sdk.models.case_suggestion_request import CaseSuggestionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CaseSuggestionRequest from a JSON string
case_suggestion_request_instance = CaseSuggestionRequest.from_json(json)
# print the JSON string representation of the object
print(CaseSuggestionRequest.to_json())

# convert the object into a dict
case_suggestion_request_dict = case_suggestion_request_instance.to_dict()
# create an instance of CaseSuggestionRequest from a dict
case_suggestion_request_from_dict = CaseSuggestionRequest.from_dict(case_suggestion_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


