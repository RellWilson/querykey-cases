package qkey

/*
===============================================================================
@fileOverview
Ergonomic Go wrapper for the QueryKey Cases generated client. Provides a small
constructor and a few friendly methods with sane defaults (timeout, user-agent,
and API key header). This avoids callers having to wire the raw configuration.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Go SDK)
@usage
cfg := qkey.Config{BaseURL: "http://localhost:8080", APIKey: os.Getenv("QKEY_API_KEY")}
cli := qkey.NewClient(cfg)
resp, _ := cli.Capabilities(context.Background())
@notes
This wrapper intentionally keeps a narrow surface area; add methods as needed
to maintain parity with CLI/JS SDK.
@timestamp
2025-11-05T00:00:00Z
===============================================================================*/

import (
    "context"
    "net/http"
    "time"

    generated "github.com/GIT_USER_ID/GIT_REPO_ID"
)

// Config defines minimal client configuration.
type Config struct {
    BaseURL   string        // e.g. https://api.staging.querykey.com or http://localhost:8080
    APIKey    string        // raw token; will be sent as "Bearer <token>" if non-empty
    Timeout   time.Duration // optional HTTP client timeout
    UserAgent string        // optional custom UA
}

// Client is a thin ergonomic wrapper around the generated API client.
type Client struct {
    api *generated.APIClient
}

// NewClient builds a Client with reasonable defaults.
func NewClient(cfg Config) *Client {
    c := generated.NewConfiguration()

    // Set base URL into server config
    if cfg.BaseURL != "" {
        c.Servers = generated.ServerConfigurations{{URL: cfg.BaseURL}}
    }

    // Apply default headers (Authorization and UA)
    if cfg.APIKey != "" {
        c.AddDefaultHeader("Authorization", "Bearer "+cfg.APIKey)
    }
    if cfg.UserAgent != "" {
        c.UserAgent = cfg.UserAgent
    } else {
        c.UserAgent = "querykey-cases-go/1.0"
    }

    // Optional timeout
    if cfg.Timeout > 0 {
        c.HTTPClient = &http.Client{Timeout: cfg.Timeout}
    }

    return &Client{api: generated.NewAPIClient(c)}
}

// Capabilities fetches the capability descriptor (GET /api).
// Returns the raw HTTP response; callers typically only need StatusCode.
func (c *Client) Capabilities(ctx context.Context) (*http.Response, error) {
    return c.api.DefaultAPI.ApiGet(ctx).Execute()
}

// UsageSelf returns today's usage summary for the authenticated user.
func (c *Client) UsageSelf(ctx context.Context) (*generated.UsageSelf, *http.Response, error) {
    return c.api.DefaultAPI.ApiUsageMeGet(ctx).Execute()
}

// CollectionsList lists curated collections with optional filters.
type CollectionsListParams struct {
    Ecosystem string
    Domain    string
    Tier      string // free|professional|enterprise
    Page      int32
    Limit     int32
}

// CollectionsList lists collections (GET /api/v1/collections).
func (c *Client) CollectionsList(ctx context.Context, p CollectionsListParams) (*generated.CollectionsResponse, *http.Response, error) {
    req := c.api.CollectionsAPI.ApiV1CollectionsGet(ctx)
    if p.Ecosystem != "" {
        req = req.Ecosystem(p.Ecosystem)
    }
    if p.Domain != "" {
        req = req.Domain(p.Domain)
    }
    if p.Tier != "" {
        req = req.Tier(p.Tier)
    }
    if p.Page > 0 {
        req = req.Page(p.Page)
    }
    if p.Limit > 0 {
        req = req.Limit(p.Limit)
    }
    return c.api.CollectionsAPI.ApiV1CollectionsGetExecute(req)
}

// Raw exposes the underlying generated client for advanced scenarios and testing.
// Note: public for internal use; avoid depending on this in application code.
func (c *Client) Raw() *generated.APIClient { return c.api }

// CasesSearch searches published cases (alias of list with q).
// Mirrors GET /api/v1/cases/search. Returns raw *http.Response.
func (c *Client) CasesSearch(ctx context.Context, q string, page, limit int32) (*http.Response, error) {
    req := c.api.DefaultAPI.ApiV1CasesSearchGet(ctx)
    if q != "" {
        req = req.Q(q)
    }
    if page > 0 {
        req = req.Page(page)
    }
    if limit > 0 {
        req = req.Limit(limit)
    }
    return c.api.DefaultAPI.ApiV1CasesSearchGetExecute(req)
}

// CaseGetByID fetches a case by id.
func (c *Client) CaseGetByID(ctx context.Context, id string) (*http.Response, error) {
    req := c.api.DefaultAPI.ApiV1CasesIdGet(ctx, id)
    return c.api.DefaultAPI.ApiV1CasesIdGetExecute(req)
}

// CaseGetBySlug fetches a case by slug. If acceptQKey is true, requests application/qkey.
func (c *Client) CaseGetBySlug(ctx context.Context, slug string, acceptQKey bool) (*http.Response, error) {
    req := c.api.DefaultAPI.ApiV1CasesSlugSlugGet(ctx, slug)
    if acceptQKey {
        req = req.Accept("application/qkey")
    }
    return c.api.DefaultAPI.ApiV1CasesSlugSlugGetExecute(req)
}

// CaseVersionsByID lists versions by case id.
func (c *Client) CaseVersionsByID(ctx context.Context, id string) (*http.Response, error) {
    req := c.api.DefaultAPI.ApiV1CasesIdVersionsGet(ctx, id)
    return c.api.DefaultAPI.ApiV1CasesIdVersionsGetExecute(req)
}

// CaseVersionsBySlug lists versions by case slug.
func (c *Client) CaseVersionsBySlug(ctx context.Context, slug string) (*http.Response, error) {
    req := c.api.DefaultAPI.ApiV1CasesSlugSlugVersionsGet(ctx, slug)
    return c.api.DefaultAPI.ApiV1CasesSlugSlugVersionsGetExecute(req)
}

// BundleDownloadByCaseID downloads a bundle archive for a case.
// format defaults to "zip" when empty; downloadIntent is required by API.
func (c *Client) BundleDownloadByCaseID(ctx context.Context, caseID, downloadIntent, format string) (*http.Response, error) {
    if format == "" {
        format = "zip"
    }
    req := c.api.BundlesAPI.ApiV1CasesCaseIdBundleGet(ctx, caseID).DownloadIntent(downloadIntent).Format(format)
    return c.api.BundlesAPI.ApiV1CasesCaseIdBundleGetExecute(req)
}

// BundleManifest retrieves a bundle's manifest by id.
func (c *Client) BundleManifest(ctx context.Context, bundleID string) (*generated.BundleManifest, *http.Response, error) {
    req := c.api.BundlesAPI.ApiV1BundlesIdManifestGet(ctx, bundleID)
    return c.api.BundlesAPI.ApiV1BundlesIdManifestGetExecute(req)
}

// BundleFiles lists files in a bundle by id.
func (c *Client) BundleFiles(ctx context.Context, bundleID string) (*generated.BundleManifest, *http.Response, error) {
    req := c.api.BundlesAPI.ApiV1BundlesIdFilesGet(ctx, bundleID)
    return c.api.BundlesAPI.ApiV1BundlesIdFilesGetExecute(req)
}
