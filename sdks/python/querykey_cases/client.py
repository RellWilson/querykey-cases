"""
==========================================================================
@fileOverview
Python ergonomic client wrapping querykey_cases_sdk generated client.
Adds auth header and timeouts, and exposes helper methods consistent with JS.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Python SDK)
@usage
from querykey_cases import QueryKeyClient
client = QueryKeyClient(base_url='http://localhost:8080', api_key='qk_live_...')
res = client.cases_search(q='TypeError')
@dependencies
querykey_cases_sdk
@timestamp
2025-11-04T00:00:00Z
==========================================================================
"""
from __future__ import annotations
from typing import Any, Dict, Generator, Optional
import hashlib
import random
import time

import requests

from generated.querykey_cases_sdk import ApiClient, Configuration
from generated.querykey_cases_sdk.api.default_api import DefaultApi
from generated.querykey_cases_sdk.api.collections_api import CollectionsApi
from generated.querykey_cases_sdk.api.bundles_api import BundlesApi
from generated.querykey_cases_sdk.api.agents_api import AgentsApi


class QueryKeySDKError(Exception):
    """Raised when the SDK encounters an HTTP error."""

    def __init__(self, message: str, status: Optional[int] = None, code: Optional[str] = None):
        super().__init__(message)
        self.status = status
        self.code = code


class QueryKeyClient:
    def __init__(self, base_url: str, api_key: Optional[str] = None, timeout: float = 10.0):
        cfg = Configuration()
        cfg.host = base_url.rstrip('/')
        # timeout is used by the underlying requests Session via ApiClient
        self._client = ApiClient(configuration=cfg)
        self._client.set_default_header('User-Agent', 'QueryKey-PythonSDK/0.1')
        if api_key:
            self._client.set_default_header('Authorization', f'Bearer {api_key}')
        # basic timeout; generated client uses urllib3/requests timeouts per call
        self._timeout = timeout
        self._base_url = cfg.host
        self._session = requests.Session()
        self._session.headers.update({'User-Agent': 'QueryKey-PythonSDK/0.1'})
        if api_key:
            self._session.headers.update({'Authorization': f'Bearer {api_key}'})
        self._retry_statuses = {429, 503}
        self._max_attempts = 4
        self._backoff_initial = 0.25
        self._backoff_multiplier = 2.0
        self._backoff_max = 4.0

        self.default = DefaultApi(self._client)
        self.collections = CollectionsApi(self._client)
        self.bundles = BundlesApi(self._client)
        self.agents = AgentsApi(self._client)

    def _sleep_backoff(self, attempt: int) -> None:
        delay = min(self._backoff_max, self._backoff_initial * (self._backoff_multiplier ** attempt))
        jitter = delay * 0.25 * random.random()
        time.sleep(delay + jitter)

    def _request(
        self,
        method: str,
        path: str,
        *,
        params: Optional[Dict[str, Any]] = None,
        json_body: Optional[Dict[str, Any]] = None,
        stream: bool = False
    ) -> requests.Response:
        url = f'{self._base_url}{path}'
        attempt = 0
        while True:
            try:
                resp = self._session.request(method, url, params=params, json=json_body, timeout=self._timeout, stream=stream)
            except requests.RequestException as exc:  # pragma: no cover - network exceptions not triggered in unit tests
                if attempt >= self._max_attempts - 1:
                    raise QueryKeySDKError(str(exc)) from exc
                self._sleep_backoff(attempt)
                attempt += 1
                continue
            if resp.status_code in self._retry_statuses and attempt < self._max_attempts - 1:
                self._sleep_backoff(attempt)
                attempt += 1
                continue
            if resp.status_code >= 400:
                raise QueryKeySDKError(
                    f'{method} {path} failed (HTTP {resp.status_code})',
                    status=resp.status_code
                )
            return resp

    def _download_with_checksum(self, path: str, params: Dict[str, Any]) -> Dict[str, Any]:
        resp = self._request('GET', path, params=params)
        content = resp.content
        checksum = hashlib.sha256(content).hexdigest()
        header_checksum = resp.headers.get('x-qkey-checksum-sha256')
        matches = None
        if header_checksum:
            matches = header_checksum.lower() == checksum
        return {
            'data': content,
            'checksum': checksum,
            'header_checksum': header_checksum,
            'checksum_matches': matches,
            'content_type': resp.headers.get('content-type')
        }

    # Capabilities
    def get_capabilities(self) -> Any:
        return self.default.api_get()

    # Usage (may require cookie auth)
    def get_usage_self(self) -> Any:
        return self.default.api_usage_me_get()

    # Cases
    def cases_search(self, q: Optional[str] = None, page: Optional[int] = None, limit: Optional[int] = None) -> Any:
        return self.default.api_v1_cases_search_get(q=q, page=page, limit=limit)

    def case_by_id(self, id: str) -> Any:
        return self.default.api_v1_cases_id_get(id=id)

    def case_by_slug(self, slug: str) -> Any:
        return self.default.api_v1_cases_slug_slug_get(slug=slug)

    def versions_by_id(self, id: str) -> Any:
        return self.default.api_v1_cases_id_versions_get(id=id)

    def versions_by_slug(self, slug: str) -> Any:
        return self.default.api_v1_cases_slug_slug_versions_get(slug=slug)

    # Collections
    def collections_list(self, ecosystem: Optional[str] = None, domain: Optional[str] = None, tier: Optional[str] = None, page: Optional[int] = None, limit: Optional[int] = None) -> Any:
        return self.collections.api_v1_collections_get(ecosystem=ecosystem, domain=domain, tier=tier, page=page, limit=limit)

    def collection_get(self, id: str) -> Any:
        return self.collections.api_v1_collections_id_get(id=id)

    def collection_download(self, id: str, format: Optional[str] = None, download_intent: Optional[str] = None) -> Any:
        # The generated client may return raw Response-like; we forward as-is
        return self.collections.api_v1_collections_id_download_get(id=id, format=format, download_intent=download_intent)

    # Bundles
    def case_bundle_download(self, case_id: str, format: Optional[str] = None, download_intent: Optional[str] = None) -> Any:
        return self.bundles.api_v1_cases_case_id_bundle_get(case_id=case_id, format=format, download_intent=download_intent)

    def bundle_manifest(self, id: str) -> Any:
        return self.bundles.api_v1_bundles_id_manifest_get(id=id)

    def bundle_files(self, id: str) -> Any:
        return self.bundles.api_v1_bundles_id_files_get(id=id)

    # Enhanced ergonomic helpers ------------------------------------------------
    def download_collection_verified(self, collection_id: str, download_intent: str, format: str = 'zip') -> Dict[str, Any]:
        if not collection_id:
            raise QueryKeySDKError('collection_id is required')
        if download_intent not in {'application', 'research'}:
            raise QueryKeySDKError('download_intent must be application or research')
        return self._download_with_checksum(
            f'/api/v1/collections/{collection_id}/download',
            {'download_intent': download_intent, 'format': format}
        )

    def download_case_bundle_verified(self, case_id: str, download_intent: str, format: str = 'zip') -> Dict[str, Any]:
        if not case_id:
            raise QueryKeySDKError('case_id is required')
        if download_intent not in {'application', 'research'}:
            raise QueryKeySDKError('download_intent must be application or research')
        return self._download_with_checksum(
            f'/api/v1/cases/{case_id}/bundle',
            {'download_intent': download_intent, 'format': format}
        )

    def verify_case(
        self,
        *,
        case_id: Optional[str] = None,
        slug: Optional[str] = None,
        detail: str = 'recent',
        window_days: int = 30
    ) -> Any:
        if not case_id and not slug:
            raise QueryKeySDKError('case_id or slug is required')
        params = {'detail': detail, 'window_days': window_days}
        path = f'/api/v1/cases/{case_id}/verify' if case_id else f'/api/v1/cases/slug/{slug}/verify'
        return self._request('GET', path, params=params).json()

    def diff_versions(
        self,
        *,
        case_id: Optional[str] = None,
        slug: Optional[str] = None,
        from_version: int,
        to_version: int
    ) -> Any:
        if not case_id and not slug:
            raise QueryKeySDKError('case_id or slug is required')
        params = {'from': from_version, 'to': to_version}
        path = f'/api/v1/cases/{case_id}/versions/diff' if case_id else f'/api/v1/cases/slug/{slug}/versions/diff'
        return self._request('GET', path, params=params).json()

    def submit_case_suggestion(
        self,
        case_id: str,
        suggestion: str,
        *,
        fields: Optional[list[str]] = None,
        contact: Optional[str] = None
    ) -> Any:
        if not case_id:
            raise QueryKeySDKError('case_id is required')
        if not suggestion or len(suggestion.strip()) < 10:
            raise QueryKeySDKError('suggestion must be at least 10 characters')
        return self._request(
            'POST',
            f'/api/v1/cases/{case_id}/suggest',
            json_body={'suggestion': suggestion, 'fields': fields, 'contact': contact}
        ).json()

    def iterate_cases(self, q: Optional[str] = None, limit: int = 25) -> Generator[Dict[str, Any], None, None]:
        page = 1
        while True:
            payload = self.cases_search(q=q, page=page, limit=limit)
            entries = payload.get('data') or payload.get('items') or []
            if not entries:
                break
            for entry in entries:
                yield entry
            if len(entries) < limit:
                break
            page += 1
