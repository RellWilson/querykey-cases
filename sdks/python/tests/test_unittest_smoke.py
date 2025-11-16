"""
========================================================================
@fileOverview
unittest harness mirroring Go smoke: construct-only, no network.
Ensures QueryKeyClient is importable and instantiable.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Python SDK)
@timestamp
2025-11-05T00:00:00Z
========================================================================
"""
import sys
import unittest


class TestUnitSmoke(unittest.TestCase):
    def setUp(self):
        # Ensure local package is importable when run from repo root
        sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk")
        sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk/generated")

    def test_construct(self):
        from querykey_cases import QueryKeyClient

        c = QueryKeyClient(base_url="http://localhost:8080")
        self.assertIsNotNone(c)


if __name__ == "__main__":
    unittest.main()
