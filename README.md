# Web Crypto on Next.js Edge Runtime

Small imported/adapted Vercel example demonstrating the browser-standard **Web Crypto API** in Next.js Middleware and an Edge API route. Despite the repository name, this is **not** a cryptocurrency market, wallet, trading, or finance application.

## What it demonstrates

`middleware.ts` runs for `/`, generates a random UUID with `crypto.randomUUID()`, redirects to `/api/crypto`, and passes that request-scoped demonstration token as a query parameter.

`pages/api/crypto.ts` demonstrates:

- `crypto.randomUUID()`;
- `crypto.getRandomValues()`;
- SHA-256 with `crypto.subtle.digest()`;
- AES-GCM key import, encryption and decryption.

The AES passphrase is demonstration-only and remains inside the server/Edge route. It is **not returned** in the JSON response. Responses are marked `Cache-Control: no-store`.

## Runtime

- Node.js 22.x
- Next.js 15.5.24
- React / ReactDOM 18.2.0
- TypeScript 5.9
- Web Crypto API
- Next.js Pages Router / Middleware / Edge runtime

The dependency graph is pinned and `package-lock.json` is committed. The previous `next: canary`, React `latest`, and `experimental-edge` configuration have been removed.

## Setup

```bash
npm ci
npm run dev
```

Verification:

```bash
npm test
npm run typecheck
npm run lint
npm run build
npm audit --omit=dev --audit-level=high
```

CI runs the same read-only release gate on Node 22.

## Cryptography boundary

This is an **API demonstration**, not production cryptographic design. The example derives an AES key by hashing a fixed demo passphrase with SHA-256. Real password-derived encryption needs a purpose-built KDF, random salt, appropriate work factor, key lifecycle/rotation/recovery design, and a defined threat model.

The response still returns sample plaintext, decrypted text, IV and random values because those are the concepts being demonstrated. It does not return the demonstration passphrase or derived key material.

Do not treat this repository as a password vault, authentication system, custody product, wallet, or security library.

## Provenance

`package.json` points to `vercel/examples`. Preserve upstream attribution and licensing requirements when redistributing or adapting the example.

## Status

Maintained Web Crypto / Edge reference. Runtime, dependency lock, regression contracts, production audit, TypeScript, lint and build are verified on the completion branch. Hosted exact-head verification is tracked separately from repository code readiness.
