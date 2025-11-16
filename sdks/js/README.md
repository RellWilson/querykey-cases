QueryKey Cases JS SDK
=====================

Official ESM SDK for QueryKey Cases API v1.0. A thin, ergonomic wrapper around generated clients with auth header handling and sensible timeouts.

Dev quickstart (local repo)
---------------------------

Run these from `parallel-sdk-development/js-sdk` with Node >= 18:

```bash
# install deps and build the ESM dist
npm ci
npm run build

# run network-free smoke to validate shape and imports
npm run smoke
```

You can also run the repo-wide smokes from the project root:

```bash
npm run smoke:all
```

Usage
-----

```js
import { QueryKeyClient } from '@querykey/cases-sdk';

const client = new QueryKeyClient({
  baseUrl: 'https://api.querykey.com',
  apiKey: process.env.QKEY_API_KEY
});

// Search published cases (no network in smoke; this is example usage)
const results = await client.cases.search({ q: 'error:TypeError', limit: 5 });
```

Notes
-----

- ESM only; ensure Node >= 18.
- Wrapper forwards params to generated clients; enum-like params are cast internally to keep the API ergonomic.
- The smoke script imports the built dist and asserts method shapes without making HTTP calls.
