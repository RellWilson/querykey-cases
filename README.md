# QueryKey Cases

QueryKey Cases is a developer and SRE platform to diagnose, remediate, and verify production issues quickly. It offers a REST API, SDKs, and automation workflows.

## Quickstart

1) Exchange your API key for a short-lived token


```bash
curl -X POST https://api.querykey.com/v2/auth \
  -H 'Content-Type: application/json' \
  -d '{"apiKey":"qk_live_your_api_key"}'
```

1) Search for cases


```bash
curl -H 'Authorization: Bearer YOUR_TOKEN' \
  "https://api.querykey.com/v2/cases/search?q=TypeError&limit=5"
```

> YOUR_TOKEN is a short-lived bearer token. Store it in a secret manager or environment variable; never commit it.

## Documentation and Specs

- Docs: <https://querykey.com/docs/>
- OpenAPI: <https://raw.githubusercontent.com/RellWilson/querykey-cases/main/openapi.v1.json>

## SDKs & MCP

Official SDKs and the MCP server now live in this repository:

- JavaScript/TypeScript SDK: ./sdks/js/
- Python SDK: ./sdks/python/
- Go SDK: ./sdks/go/
- PHP SDK: ./sdks/php/
- MCP Server: ./mcp/

You can also browse quick examples:

- cURL: ./examples/curl/search.md
- JavaScript/TypeScript: ./examples/js/fetch.js
- Python: ./examples/python/search.py

## Support

- Email: <mailto:support@querykey.com>
- Security: see SECURITY.md
- Trademarks: see TRADEMARKS.md
