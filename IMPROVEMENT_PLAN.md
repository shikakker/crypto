# Completion plan

1. Reconcile the 4.4 KB README with the actual Next.js Pages Router implementation and middleware.
2. Identify whether prices, balances, transactions or wallet data are live, mocked or static and label them unambiguously.
3. Keep private keys, seed phrases and exchange/API credentials completely outside the browser and repository.
4. Treat all addresses, chain IDs, amounts and token metadata as untrusted input and validate before display or action.
5. Use integer/base-unit or decimal-safe arithmetic for asset amounts; never rely on JS floating point for financial calculations.
6. Add explicit network/provider failure, stale-data and retry states and display source/timestamp for market data if present.
7. Review middleware/auth assumptions and ensure protected routes are enforced server-side where needed.
8. Add tests for amount formatting/conversion, address validation and primary data flows with providers mocked.
9. Add CI for lint/type-check, tests and production Next.js build.
10. Rewrite README to state verified functionality and clearly distinguish demonstration UI from any real financial capability.
