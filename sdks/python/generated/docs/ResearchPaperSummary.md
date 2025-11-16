# ResearchPaperSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**slug** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 
**category** | **str** |  | [optional] 
**tier_required** | **str** |  | [optional] 
**file_size_bytes** | **int** |  | [optional] 
**published** | **bool** |  | [optional] 
**published_at** | **object** |  | [optional] 
**release_date** | **object** |  | [optional] 
**checksum_sha256** | **str** |  | [optional] 
**asset_available** | **bool** |  | [optional] 

## Example

```python
from querykey_cases_sdk.models.research_paper_summary import ResearchPaperSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ResearchPaperSummary from a JSON string
research_paper_summary_instance = ResearchPaperSummary.from_json(json)
# print the JSON string representation of the object
print(ResearchPaperSummary.to_json())

# convert the object into a dict
research_paper_summary_dict = research_paper_summary_instance.to_dict()
# create an instance of ResearchPaperSummary from a dict
research_paper_summary_from_dict = ResearchPaperSummary.from_dict(research_paper_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


