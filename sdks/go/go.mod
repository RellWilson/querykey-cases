// ===========================================================================
// @fileOverview
// Go module for the QueryKey Cases ergonomic wrapper around generated client.
// Includes replace directive to use the local generated SDK.
// @author
// QueryKey SDK Team – Contact@QueryKey.com
// @maintainer
// Developer Platform (Go SDK)
// @timestamp
// 2025-11-05T00:00:00Z
// ===========================================================================

module github.com/querykey/cases-go

go 1.23

require github.com/GIT_USER_ID/GIT_REPO_ID v0.0.0

require gopkg.in/validator.v2 v2.0.1 // indirect

replace github.com/GIT_USER_ID/GIT_REPO_ID => ./generated
