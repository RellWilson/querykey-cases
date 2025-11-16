"""
==========================================================================
@fileOverview
Basic import and construction smoke test for Python wrapper.
Does not perform network calls.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Python SDK)
@usage
pytest -q (optional)
@timestamp
2025-11-04T00:00:00Z
==========================================================================
"""
import sys
sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk")
sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk/generated")
from querykey_cases import QueryKeyClient

def test_import_and_construct():
    c = QueryKeyClient(base_url='http://localhost:8080')
    assert c is not None
