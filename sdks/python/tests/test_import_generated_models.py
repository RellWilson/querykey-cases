"""
========================================================================
@fileOverview
Ensure generated Python SDK models are importable; primes environment early.
This is import-only (no HTTP). Fails fast if dependencies are missing.
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


class TestImportGeneratedModels(unittest.TestCase):
    def setUp(self):
        # Ensure local package and generated modules are importable
        sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk")
        sys.path.insert(0, "/Volumes/Code AI/Platforms/Okey Cases/parallel-sdk-development/python-sdk/generated")

    def test_import_core_models(self):
        from querykey_cases_sdk import ApiClient, Configuration  # noqa: F401
        from querykey_cases_sdk.models import (  # noqa: F401
            case, case_version, collections_response, bundle_manifest,
        )
        # Access an attribute to ensure the module objects are real
        self.assertTrue(hasattr(case, "Case"))
        self.assertTrue(hasattr(case_version, "CaseVersion"))
        self.assertTrue(hasattr(collections_response, "CollectionsResponse"))
        self.assertTrue(hasattr(bundle_manifest, "BundleManifest"))


if __name__ == "__main__":
    unittest.main()
