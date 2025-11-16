"""
==========================================================================
@fileOverview
querykey_cases: ergonomic Python wrapper around generated querykey_cases_sdk.
Provides a small, friendly surface mirroring the JS SDK for common calls.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Python SDK)
@usage
from querykey_cases import QueryKeyClient
client = QueryKeyClient(base_url='http://localhost:8080', api_key='qk_live_...')
res = client.cases_search(q='TypeError')
@dependencies
requests (via generated SDK)
@timestamp
2025-11-04T00:00:00Z
==========================================================================
"""
from .client import QueryKeyClient  # noqa: F401
