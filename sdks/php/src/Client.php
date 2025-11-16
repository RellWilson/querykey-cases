<?php
/**
 * ===========================================================================
 * QueryKey Cases – PHP SDK Wrapper
 *
 * @fileOverview
 * Lightweight ergonomic facade over auto-generated API client (see generated/)
 * for interacting with the QueryKey Cases API. Provides simple helper methods
 * for common workflows (search cases, get case, list collections) while
 * delegating low-level operations to generated classes. This wrapper keeps a
 * stable surface even if regenerated artifacts change internal structure.
 *
 * @author
 * Farrel Wilson – Contact@QueryKey.com
 *
 * @maintainer
 * QueryKey SDK Development Team (PHP Package)
 *
 * @usage
 * $client = new \QKeySDK\Client(apiKey: 'qk_live_xxx', baseUrl: 'https://api.querykey.com');
 * $cases = $client->searchCases('TypeError');
 * $case = $client->getCase('abc123');
 *
 * @dependencies
 * - Auto-generated classes in QKeySDK\Generated (OpenAPI Generator output)
 * - Guzzle HTTP client (PSR interfaces)
 *
 * @notes
 * This file is hand-maintained. Do NOT place custom logic inside generated/.
 * Regenerate raw artifacts via scripts/sdk-codegen.mjs.
 *
 * @license
 * QueryKey™ is a trademark of Farrel Wilson. All rights reserved.
 * @timestamp
 * 2025-11-07T00:00:00Z
 * ===========================================================================
 */

namespace QKeySDK;

use GuzzleHttp\Client as GuzzleClient;
use GuzzleHttp\Exception\GuzzleException;
use QKeySDK\Generated\Configuration;
use QKeySDK\Generated\Api\DefaultApi; // Adjust if generator splits APIs

class Client
{
    private Configuration $config;
    private GuzzleClient $http;
    private DefaultApi $api;
    /** @var int[] */
    private array $retryStatuses = [429, 503];
    private int $maxAttempts = 4;
    private int $backoffInitialMs = 250;
    private float $backoffMultiplier = 2.0;
    private int $backoffMaxMs = 4000;

    /**
     * @param string $apiKey Bearer API key (without the 'Bearer ' prefix)
     * @param string $baseUrl Base URL, defaults to production host
     * @param array $guzzleOptions Additional Guzzle client options
     */
    public function __construct(
        string $apiKey,
        string $baseUrl = 'https://api.querykey.com',
        array $guzzleOptions = []
    ) {
        $this->config = new Configuration();
        $this->config->setHost(rtrim($baseUrl, '/'));
        // Bearer format per spec – keep simple; rotation handled upstream
        $this->config->setApiKey('Authorization', 'Bearer ' . $apiKey);

        $this->http = new GuzzleClient($guzzleOptions + [
            'base_uri' => $this->config->getHost(),
            'timeout' => 10,
            'http_errors' => false,
        ]);

        $this->api = new DefaultApi(
            $this->http,
            null,
            $this->config
        );
    }

    /**
     * @throws GuzzleException
     */
    private function request(string $method, string $path, array $options = [], int $attempt = 0): \Psr\Http\Message\ResponseInterface
    {
        try {
            $response = $this->http->request($method, $path, $options);
        } catch (GuzzleException $e) {
            if ($attempt >= $this->maxAttempts - 1) {
                throw $e;
            }
            usleep((int) ($this->backoffDelayMs($attempt) * 1000));
            return $this->request($method, $path, $options, $attempt + 1);
        }

        $status = $response->getStatusCode();
        if (in_array($status, $this->retryStatuses, true) && $attempt < $this->maxAttempts - 1) {
            usleep((int) ($this->backoffDelayMs($attempt) * 1000));
            return $this->request($method, $path, $options, $attempt + 1);
        }

        if ($status >= 400) {
            throw new \RuntimeException(sprintf('HTTP %d error for %s', $status, $path), $status);
        }

        return $response;
    }

    private function backoffDelayMs(int $attempt): float
    {
        $delay = min($this->backoffMaxMs, $this->backoffInitialMs * ($this->backoffMultiplier ** $attempt));
        $jitter = $delay * 0.25 * mt_rand() / mt_getrandmax();
        return $delay + $jitter;
    }

    /**
     * @throws GuzzleException
     */
    private function downloadWithChecksum(string $path, array $query): array
    {
        $response = $this->request('GET', $path, [
            'query' => $query,
            'headers' => ['Accept' => 'application/octet-stream']
        ]);
        $body = (string) $response->getBody();
        $checksum = hash('sha256', $body);
        $headerChecksum = $response->getHeaderLine('X-QKey-Checksum-Sha256') ?: null;
        $matches = null;
        if ($headerChecksum) {
            $matches = strtolower($headerChecksum) === $checksum;
        }
        return [
            'data' => $body,
            'checksum' => $checksum,
            'headerChecksum' => $headerChecksum,
            'checksumMatches' => $matches,
            'contentType' => $response->getHeaderLine('Content-Type') ?: null
        ];
    }

    /**
     * Search published cases (simple wrapper).
     * @param string $query Free-text query
     * @param int $page Page number (1-based)
     * @param int $limit Page size (1..100)
     * @return array Decoded JSON response (raw) – consider typed models later
     * @throws GuzzleException
     */
    public function searchCases(string $query, int $page = 1, int $limit = 25): array
    {
        $response = $this->request('GET', '/api/v1/cases', [
            'query' => [
                'q' => $query,
                'page' => $page,
                'limit' => $limit,
            ]
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    /**
     * Retrieve a single case by ID.
     * @param string $id Case identifier
     * @return array|null Case object or null if 404
     * @throws GuzzleException
     */
    public function getCase(string $id): ?array
    {
        try {
            $response = $this->request('GET', '/api/v1/cases/' . rawurlencode($id));
            return json_decode($response->getBody()->getContents(), true);
        } catch (GuzzleException $e) {
            if (method_exists($e, 'getResponse') && $e->getResponse() && $e->getResponse()->getStatusCode() === 404) {
                return null; // friendly null for not found
            }
            throw $e; // bubble other errors
        }
    }

    /**
     * List curated collections.
     * @param array $filters Optional filters: ecosystem, domain, tier, page, limit
     * @return array Raw collections response
     * @throws GuzzleException
     */
    public function listCollections(array $filters = []): array
    {
        $response = $this->request('GET', '/api/v1/collections', [
            'query' => $filters
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    /**
     * Download a collection archive with checksum verification.
     *
     * @return array{data:string,checksum:string,headerChecksum:?string,checksumMatches:?bool,contentType:?string}
     * @throws GuzzleException
     */
    public function downloadCollectionVerified(string $collectionId, string $downloadIntent, string $format = 'zip'): array
    {
        if (!in_array($downloadIntent, ['application', 'research'], true)) {
            throw new \InvalidArgumentException('downloadIntent must be application or research');
        }
        $path = '/api/v1/collections/' . rawurlencode($collectionId) . '/download';
        return $this->downloadWithChecksum($path, [
            'download_intent' => $downloadIntent,
            'format' => $format
        ]);
    }

    /**
     * Download a case bundle archive with checksum verification.
     *
     * @return array{data:string,checksum:string,headerChecksum:?string,checksumMatches:?bool,contentType:?string}
     * @throws GuzzleException
     */
    public function downloadCaseBundleVerified(string $caseId, string $downloadIntent, string $format = 'zip'): array
    {
        if (!in_array($downloadIntent, ['application', 'research'], true)) {
            throw new \InvalidArgumentException('downloadIntent must be application or research');
        }
        $path = '/api/v1/cases/' . rawurlencode($caseId) . '/bundle';
        return $this->downloadWithChecksum($path, [
            'download_intent' => $downloadIntent,
            'format' => $format
        ]);
    }

    /**
     * Submit a suggestion for a case.
     *
     * @throws GuzzleException
     */
    public function submitSuggestion(string $caseId, string $suggestion, array $fields = [], ?string $contact = null): array
    {
        if (strlen(trim($suggestion)) < 10) {
            throw new \InvalidArgumentException('Suggestion must be at least 10 characters.');
        }
        $response = $this->request('POST', '/api/v1/cases/' . rawurlencode($caseId) . '/suggest', [
            'json' => [
                'suggestion' => $suggestion,
                'fields' => $fields ?: null,
                'contact' => $contact
            ]
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    /**
     * Verify case provenance and integrity.
     *
     * @throws GuzzleException
     */
    public function verifyCase(?string $caseId = null, ?string $slug = null, string $detail = 'recent', int $windowDays = 30): array
    {
        if (!$caseId && !$slug) {
            throw new \InvalidArgumentException('Provide caseId or slug');
        }
        $path = $caseId
            ? '/api/v1/cases/' . rawurlencode($caseId) . '/verify'
            : '/api/v1/cases/slug/' . rawurlencode($slug) . '/verify';
        $response = $this->request('GET', $path, [
            'query' => ['detail' => $detail, 'window_days' => $windowDays]
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }

    /**
     * Diff two case versions by id or slug.
     *
     * @throws GuzzleException
     */
    public function diffCaseVersions(?string $caseId, ?string $slug, int $fromVersion, int $toVersion): array
    {
        if (!$caseId && !$slug) {
            throw new \InvalidArgumentException('Provide caseId or slug');
        }
        $path = $caseId
            ? '/api/v1/cases/' . rawurlencode($caseId) . '/versions/diff'
            : '/api/v1/cases/slug/' . rawurlencode($slug) . '/versions/diff';
        $response = $this->request('GET', $path, [
            'query' => ['from' => $fromVersion, 'to' => $toVersion]
        ]);
        return json_decode($response->getBody()->getContents(), true);
    }
}
