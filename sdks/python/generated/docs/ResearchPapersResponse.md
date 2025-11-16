# ResearchPapersResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[ResearchPaperSummary]**](ResearchPaperSummary.md) |  | [optional] 
**meta** | [**CollectionsResponseMeta**](CollectionsResponseMeta.md) |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.research_papers_response import ResearchPapersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchPapersResponse from a JSON string
research_papers_response_instance = ResearchPapersResponse.from_json(json)
# print the JSON string representation of the object
print(ResearchPapersResponse.to_json())

# convert the object into a dict
research_papers_response_dict = research_papers_response_instance.to_dict()
# create an instance of ResearchPapersResponse from a dict
research_papers_response_from_dict = ResearchPapersResponse.from_dict(research_papers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


