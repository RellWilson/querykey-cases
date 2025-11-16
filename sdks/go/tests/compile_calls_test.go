package tests

/*
===============================================================================
@fileOverview
Compile-only calls against the Go wrapper to ensure signatures stay stable.
The calls are placed under `if false` so they are type-checked but never run
at test time, keeping this strictly network-free.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Go SDK)
@timestamp
2025-11-05T00:00:00Z
===============================================================================*/

import (
    "context"
    "testing"

    "github.com/querykey/cases-go/qkey"
)

func TestCompileOnly_MethodCalls(t *testing.T) {
    c := qkey.NewClient(qkey.Config{BaseURL: "http://localhost:8080", APIKey: "compile_only"})
    ctx := context.Background()

    if false { // not executed; compile/type-check only
        _, _ = c.Capabilities(ctx)
    _, _, _ = c.UsageSelf(ctx)

        _, _, _ = c.CollectionsList(ctx, qkey.CollectionsListParams{Ecosystem: "ai", Domain: "security", Tier: "free", Page: 1, Limit: 10})

        _, _ = c.CasesSearch(ctx, "test", 1, 10)
        _, _ = c.CaseGetByID(ctx, "case-id")
        _, _ = c.CaseGetBySlug(ctx, "case-slug", true)
        _, _ = c.CaseVersionsByID(ctx, "case-id")
        _, _ = c.CaseVersionsBySlug(ctx, "case-slug")

        _, _ = c.BundleDownloadByCaseID(ctx, "case-id", "sample", "zip")
        _, _, _ = c.BundleManifest(ctx, "bundle-id")
        _, _, _ = c.BundleFiles(ctx, "bundle-id")
    }

    // Sanity: wrapper should be non-nil
    if c == nil || c.Raw() == nil {
        t.Fatal("expected wrapper and underlying client to be non-nil")
    }
}
