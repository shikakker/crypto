# Product Completion Status — Web Crypto example

Canonical repository: `shikakker/crypto`  
Completion branch: `portfolio-improvements-2026-08`  
Draft PR: #2

Classification: imported/adapted Vercel Web Crypto Edge example. This is not a cryptocurrency market/trading/wallet product.

## T01–T10 — Core tasks

| ID | Status | Task |
| --- | --- | --- |
| T01 | DONE | Correct product classification from crypto-data app to Web Crypto / Edge reference. |
| T02 | DONE | Remove moving `next: canary` / React `latest` runtime tags. |
| T03 | DONE | Pin Node 22, Next 15.5.24 and React 18.2 with committed npm lockfile. |
| T04 | DONE | Stop returning demonstration passphrase/key material in API JSON. |
| T05 | DONE | Replace deprecated `experimental-edge` runtime identifier with `edge`. |
| T06 | DONE | Make JSON responses non-cacheable. |
| T07 | DONE | Add source/runtime regression contracts. |
| T08 | DONE | Guarded migration verifies audit/tests/typecheck/lint/build before committing dependency state. |
| T09 | IN PROGRESS | Permanent read-only Quality verifies the committed lock/runtime. |
| T10 | BLOCKED | Exact-head hosted/browser verification requires current Vercel delivery evidence. |

## I01–I10 — Improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Stable framework/runtime pins. |
| I02 | DONE | Deterministic `package-lock.json`. |
| I03 | DONE | Production high-severity dependency audit. |
| I04 | DONE | TypeScript gate. |
| I05 | DONE | Zero-warning ESLint gate. |
| I06 | DONE | Edge response no-store policy. |
| I07 | DONE | Random typed arrays serialized explicitly as JSON arrays. |
| I08 | DONE | README corrected to actual Web Crypto scope and current runtime. |
| I09 | DEFERRED WITH REASON | Middleware→Proxy migration is unnecessary while intentionally staying on the maintained Next 15 line. |
| I10 | DEFERRED WITH REASON | Real cryptographic key-management/KDF architecture is outside this demonstration's scope. |

## F01–F10 — Product features

All product expansion is deferred: the repository is intentionally a small Web Crypto capability reference rather than a user-facing financial/security product.

## Verification evidence

The inherited branch used `next: canary`, React `latest`, TypeScript 4.7 and `runtime: experimental-edge`, with no lockfile or blocking CI. The API also returned its demonstration password in the response.

A test-first contract was added for stable runtime pins, non-disclosure of the demo passphrase and the current Edge runtime identifier. The API was then changed so passphrase/key material remains internal and the response is `no-store`.

Guarded security migration run `35099366216`, job `104804582861`, completed successfully:

- stable runtime manifest + npm lock generation — PASS;
- regression contracts — PASS;
- production high-severity audit — PASS;
- TypeScript — PASS;
- zero-warning lint — PASS;
- production build — PASS;
- verified package/lock commit — PASS.

Verified dependency commit: `e89cdcbb68cda1b2b9d9cba395b44c75560312bb` (`fix: pin Web Crypto example runtime`).

Permanent read-only Quality is now present and should remain the normal release gate; the write-capable migration workflow is only for this verified bootstrap and should be retired after independent frozen-lock verification succeeds.

Status: **PARTIAL** until exact hosted verification exists.

No merge, production promotion, credential mutation, billing action or external data mutation has been performed automatically.
