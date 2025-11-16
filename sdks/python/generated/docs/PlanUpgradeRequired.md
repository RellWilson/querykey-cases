# PlanUpgradeRequired


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | 
**required_feature** | **str** |  | 
**current_plan** | **str** |  | 

## Example

```python
from querykey_cases_sdk.models.plan_upgrade_required import PlanUpgradeRequired

# TODO update the JSON string below
json = "{}"
# create an instance of PlanUpgradeRequired from a JSON string
plan_upgrade_required_instance = PlanUpgradeRequired.from_json(json)
# print the JSON string representation of the object
print(PlanUpgradeRequired.to_json())

# convert the object into a dict
plan_upgrade_required_dict = plan_upgrade_required_instance.to_dict()
# create an instance of PlanUpgradeRequired from a dict
plan_upgrade_required_from_dict = PlanUpgradeRequired.from_dict(plan_upgrade_required_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


