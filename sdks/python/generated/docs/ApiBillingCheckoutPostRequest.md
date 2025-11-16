# ApiBillingCheckoutPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plan** | **str** |  | 
**billing_cycle** | **str** |  | [optional] [default to 'monthly']

## Example

```python
from querykey_cases_sdk.models.api_billing_checkout_post_request import ApiBillingCheckoutPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiBillingCheckoutPostRequest from a JSON string
api_billing_checkout_post_request_instance = ApiBillingCheckoutPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiBillingCheckoutPostRequest.to_json())

# convert the object into a dict
api_billing_checkout_post_request_dict = api_billing_checkout_post_request_instance.to_dict()
# create an instance of ApiBillingCheckoutPostRequest from a dict
api_billing_checkout_post_request_from_dict = ApiBillingCheckoutPostRequest.from_dict(api_billing_checkout_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


