# crypto — Modernization Roadmap

The repository contains a compact Next.js/TypeScript application with middleware. Any cryptocurrency-related data should be framed as informational unless transaction/custody functionality is actually verified.

## 10 tasks

1. Trace pages and middleware and document exactly which crypto data or routing behavior is implemented.
2. Identify all external market/data providers and document rate limits, freshness and failure assumptions.
3. Validate provider responses and numeric values before rendering prices, changes or asset metadata.
4. Display data timestamps/freshness where the application presents market-like information.
5. Add loading, empty, stale-data and provider-failure states.
6. Add tests for data transformation, numeric formatting and middleware behavior.
7. Add CI for lint, type-check, tests and production build.
8. Review `.npmrc` and dependency configuration for obsolete registry/tooling assumptions before upgrades.
9. Add clear product copy that avoids investment-performance guarantees or implying custody/trading functionality not present in code.
10. Build a portfolio case around verified data integration, edge behavior and UI decisions rather than generic 'crypto platform' claims.

## Portfolio value

Useful as a small API/data-interface experiment if data correctness, freshness and claim boundaries are explicit.