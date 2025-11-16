# QueryKey Cases Go SDK

Official Go client wrapper for QueryKey Cases API v1.0. Idiomatic layer over the generated client with context support and simple auth setup.

## Dev quickstart (local repo)

Run these from the repo root with Go 1.23+ installed:

```bash
# tidy deps and run the network-free tests
cd parallel-sdk-development/go-sdk
go mod tidy
go test ./...
```

Optional: run the example (will try to contact a server; expect a friendly message if offline):

```bash
go run ./examples/basic
```

The module is wired to the local generated client via a replace directive in `go.mod`:

```text
replace github.com/GIT_USER_ID/GIT_REPO_ID => ./generated
```

## Usage (wrapper)

```go
package main

import (
    "context"
    "fmt"
    
    "github.com/querykey/cases-go/qkey"
)

func main() {
    c := qkey.NewClient(qkey.Config{BaseURL: "https://api.querykey.com", APIKey: "qk_live_your_api_key_here"})
    caps, _ := c.Capabilities(context.Background())
    fmt.Println(caps != nil)
}
```

## Notes

- Tests are network-free and validate construction and type signatures only.
- Go version: 1.23+. The module path is `github.com/querykey/cases-go` in this repo.
- See repo root scripts for orchestration: `npm run smoke:go` and `npm run smoke:all`.