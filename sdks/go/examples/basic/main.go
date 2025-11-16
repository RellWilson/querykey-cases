package main

/*
===============================================================================
@fileOverview
Basic example: construct the Go wrapper client and call Capabilities.
@author
QueryKey SDK Team – Contact@QueryKey.com
@maintainer
Developer Platform (Go SDK)
@timestamp
2025-11-05T00:00:00Z
===============================================================================*/

import (
    "context"
    "fmt"
    "os"
    "time"

    "github.com/querykey/cases-go/qkey"
)

func main() {
    baseURL := getenv("QKEY_BASE_URL", "http://localhost:8080")
    apiKey := os.Getenv("QKEY_API_KEY")

    cli := qkey.NewClient(qkey.Config{
        BaseURL:   baseURL,
        APIKey:    apiKey,
        Timeout:   10 * time.Second,
        UserAgent: "qkey-go-example/0.1",
    })

    resp, err := cli.Capabilities(context.Background())
    if err != nil {
        fmt.Println("We couldn't connect right now. Please try again.")
        os.Exit(1)
    }
    fmt.Printf("Capabilities status: %s\n", resp.Status)
}

func getenv(k, def string) string {
    if v := os.Getenv(k); v != "" {
        return v
    }
    return def
}
