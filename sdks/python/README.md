# QueryKey Cases Python SDK

Official Python client library for QueryKey Cases API v1.0. Pythonic wrapper around the generated client with simple auth and timeouts.

## Dev quickstart (local repo)

Run these from the repository root with Python 3.12+ recommended:

```bash
# create and activate a venv (bash)
python3 -m venv .venv
source .venv/bin/activate

# install generated client requirements used by tests
python -m pip install -r parallel-sdk-development/python-sdk/generated/requirements.txt

# run the network-free unit tests for the wrapper and generated imports
python -m unittest discover -s parallel-sdk-development/python-sdk/tests -v
```

## Usage

```python
from querykey_cases import QueryKeyClient

client = QueryKeyClient(base_url='https://api.querykey.com', api_key='qk_live_your_api_key_here')

# Example search (in tests we don't hit the network; this is illustrative)
# results = client.cases.search(q='TypeError', limit=5)
```

## Notes

- Tests are network-free and validate imports and construction only.
- Generated client lives under `python-sdk/generated/`; the wrapper is `python-sdk/querykey_cases/`.
- See repo root scripts for orchestration: `npm run smoke:python` and `npm run smoke:all`.
