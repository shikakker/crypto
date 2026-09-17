# Product Completion Status — Web Crypto example

Canonical repository: `shikakker/crypto`  
Completion branch: `portfolio-improvements-2026-08`  
Draft PR: #2

Classification: imported/adapted Vercel Web Crypto Edge example. This is not a cryptocurrency market/trading/wallet product.

## T01–T10 — Core tasks

| ID | Status | Task |
| --- | --- | --- |
| T01 | DONE | Correct product classification to Web Crypto / Edge reference. |
| T02 | DONE | Remove moving canary/latest runtime tags. |
| T03 | DONE | Pin Node 22, Next 15.5.24 and React 18.2 with committed npm lockfile. |
| T04 | DONE | Never return demonstration key material in API JSON. |
| T05 | DONE | Use current `edge` runtime identifier. |
| T06 | DONE | Make JSON responses non-cacheable. |
| T07 | DONE | Add runtime/security regression contracts. |
| T08 | DONE | Replace password-hash-derived AES key with a generated non-extractable AES-GCM 256-bit key. |
| T09 | DONE | Permanent exact-head Quality verifies install/audit/tests/typecheck/lint/build. |
| T10 | BLOCKED | Exact-current Vercel preview/browser verification is rate-limited. |

## I01–I10 — Improvements

| ID | Status | Improvement |
| --- | --- | --- |
| I01 | DONE | Stable framework/runtime pins. |
| I02 | DONE | Deterministic `package-lock.json`. |
| I03 | DONE | Production high-severity dependency audit. |
| I04 | DONE | TypeScript gate. |
| I05 | DONE | Zero-warning ESLint gate. |
| I06 | DONE | Edge response `no-store`. |
| I07 | DONE | Random typed arrays serialized explicitly. |
| I08 | DONE | AES-GCM uses random 96-bit IV and Web Crypto generated key material. |
| I09 | DONE | Generated AES key is `extractable: false` and scoped to `encrypt`/`decrypt`. |
| I10 | DEFERRED WITH REASON | This remains an educational capability example, not a password vault or production key-management architecture. |

## F01–F10 — Product features

| ID | Status | Feature |
| --- | --- | --- |
| F01 | DONE | Web Crypto AES-GCM round-trip. |
| F02 | DONE | Cryptographically random UUID example. |
| F03 | DONE | Cryptographically random typed-array example. |
| F04 | DONE | Edge runtime delivery. |
| F05 | DONE | Middleware crypto demonstration retained. |
| F06 | DONE | Explicit IV output for educational inspection without key disclosure. |
| F07 | DEFERRED WITH REASON | No password vault behavior. |
| F08 | DEFERRED WITH REASON | No cryptocurrency market/wallet behavior. |
| F09 | DEFERRED WITH REASON | No production key persistence/KMS without a real product need. |
| F10 | DEFERRED WITH REASON | Production promotion requires explicit approval. |

## Verification evidence

The inherited repository used moving framework tags, legacy Edge runtime naming and returned demonstration passphrase material. Earlier hardening pinned the maintained runtime, committed a verified lockfile, removed response key disclosure and established permanent Quality.

### Latest cryptographic-correctness slice

The demo still derived its AES key as `SHA-256('web-crypto-demo-only')`. Even with an educational disclaimer, that demonstrates password-to-key derivation without a password KDF.

- `a04a87db5163ba426ea277812d452c22d90b41c7` — regression first: require Web Crypto `generateKey`, AES-GCM 256, non-extractable key, encrypt/decrypt usages, random 12-byte IV, and no `subtle.digest` / demo passphrase.
- `3855462db5fafe3f8bd8e80c57f8a0b38628f94d` — generates an in-memory non-extractable 256-bit AES-GCM key and uses it for the single-request encrypt/decrypt round trip; no key material is exported or returned.
- Exact-head Quality run `35283043163`, job `105409118396`: **PASS**:
  - `npm ci`: PASS;
  - production high-severity audit: PASS;
  - tests including generated-key regression: PASS;
  - TypeScript: PASS;
  - zero-warning lint: PASS;
  - production build: PASS.

## Hosted state

Canonical Vercel project remains connected. Exact runtime-head commit status for `3855462d...` is still **Deployment rate limited** before application build. Earlier READY preview proves the previous runtime boundary but does not replace exact-current hosted evidence.

## BLOCKED ONLY BY

1. Vercel Hobby capacity for exact-head preview creation.
2. Hosted HTTP/browser smoke on that exact preview.

## Project checkpoint

**PROJECT:** `crypto` / Web Crypto Edge example  
**Fixed this pass:** removed unsafe password-hash key derivation from the educational AES-GCM example.  
**Verification:** exact-head install/audit/tests/typecheck/lint/build **PASS**; Vercel exact head = RATE-LIMITED.  
**Git:** `portfolio-improvements-2026-08`, Draft PR #2; verified runtime head `3855462d...`.  
**Status:** **PARTIAL**.

No merge, production promotion, credential mutation, billing action or external data mutation has been performed automatically.
