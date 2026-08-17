# Completion plan

1. Correct the project positioning completely: the current repository is not a cryptocurrency/wallet application. It is a small Next.js Edge/Web Crypto API experiment using `crypto.subtle`, `randomUUID`, `getRandomValues` and middleware query propagation.
2. Rewrite the 4.4 KB README so every claim maps to `pages/api/crypto.ts` and `middleware.ts`; remove prices, balances, transactions, wallets, tokens, exchanges or other financial/cryptocurrency language not supported by the tree.
3. Remove the hard-coded demo password (`hunter2`) from the API response and do not return passwords, key material or other secret inputs to clients even in demonstration code.
4. Separate educational AES-GCM encrypt/decrypt helpers from the HTTP handler and use explicit byte/base64 serialization for IV/ciphertext instead of relying on JSON serialization of typed arrays.
5. Document that SHA-256(password) is a demonstration shortcut, not a password-based key derivation scheme; for password-derived encryption use an appropriate KDF such as PBKDF2 with random salt/iterations when demonstrating realistic practice.
6. Validate and bound middleware/query input (`token`) before echoing it, and define whether the endpoint should accept only GET; return structured errors for unsupported methods or cryptographic failures.
7. Pin a supported Next.js/runtime version and replace the historical `experimental-edge` assumptions with the currently supported Edge/runtime configuration for the selected framework version.
8. Add deterministic tests for encode/decode helpers, AES-GCM round-trip, wrong-key/tampered-ciphertext failure and middleware propagation without asserting random UUID/value contents.
9. Add CI for lint/typecheck/tests/Next production build and a smoke test for the Edge route; ensure logs/responses never expose secret material.
10. Rename or clearly subtitle the repository as a Web Crypto / Edge Functions experiment so portfolio readers cannot confuse JavaScript cryptography APIs with a cryptocurrency product.
