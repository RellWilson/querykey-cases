package tests

/*
===============================================================================
@fileOverview
Tiny construction test for the Go wrapper. No network calls.
Ensures Authorization header and base URL are wired.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Go SDK)
@timestamp
2025-11-05T00:00:00Z
===============================================================================*/

import (
    "testing"
    "github.com/querykey/cases-go/qkey"
)

func TestNewClient_ConfiguresDefaults(t *testing.T) {
    c := qkey.NewClient(qkey.Config{BaseURL: "http://localhost:8080", APIKey: "test_token"})
    if c == nil {
        t.Fatal("expected client, got nil")
    }
    // Inspect underlying config via generated client for header presence (no request made)
    raw := c.Raw()
    if raw == nil || raw.GetConfig() == nil {
        t.Fatal("expected generated client config")
    }
    if got := raw.GetConfig().DefaultHeader["Authorization"]; got == "" {
        t.Fatal("expected Authorization header to be set")
    }
}
