# Web Crypto on Next.js Edge Runtime

Small Next.js / Vercel Edge example demonstrating the browser-standard **Web Crypto API** inside Edge Middleware and an Edge API route.

This repository is **not a cryptocurrency price / market-news application** despite the old README and the repository name `crypto`. The actual code demonstrates cryptographic primitives such as `crypto.randomUUID()`, `crypto.getRandomValues()`, SHA-256 hashing, AES-GCM encryption, and AES-GCM decryption in the Edge runtime.

The package metadata also points back to `vercel/examples`, so this repository should be treated as an imported / adapted Vercel example rather than an original crypto-market product.

## What it does

### Edge Middleware

`middleware.ts` runs for `/` and:

1. creates a random UUID with `crypto.randomUUID()`;
2. rewrites the request target to `/api/crypto` through a redirect;
3. passes the generated UUID as a `token` query parameter.

Conceptually:

```text
GET /
  |
  v
Edge Middleware
  |
  +-- crypto.randomUUID()
  |
  v
redirect -> /api/crypto?token=<uuid>
```

### Edge API route

`pages/api/crypto.ts` demonstrates several Web Crypto primitives:

```text
crypto.subtle.digest('SHA-256', ...)
crypto.getRandomValues(...)
crypto.subtle.importKey(...)
crypto.subtle.encrypt(...)
crypto.subtle.decrypt(...)
crypto.randomUUID()
```

The route hashes a demo password, derives raw AES key material from that hash, encrypts a sample message with AES-GCM, decrypts it again, and returns a JSON response showing the result.

## Tech stack

- Next.js canary / historical Edge runtime API
- React
- TypeScript
- Web Crypto API
- Next.js Middleware
- Vercel Edge Functions / Edge Runtime concepts

There is no Redux, Chart.js, Express backend, cryptocurrency-market API, price alert system, or news service in the current codebase.

## Local development

### Requirements

- Node.js version compatible with the repository's historical Next.js canary dependencies
- npm

### Install this repository

```bash
git clone https://github.com/shikakker/crypto.git
cd crypto
npm install
```

Run:

```bash
npm run dev
```

Build and start:

```bash
npm run build
npm start
```

## Historical dependency caveat

The package currently uses values such as:

```text
next: canary
react: latest
react-dom: latest
typescript: 4.7.4
```

and the API route declares:

```text
runtime: experimental-edge
```

This reflects an older Next.js Edge example. Modern Next.js versions have changed Edge / route-handler APIs and package compatibility over time.

If reviving the project, pin known-compatible dependency versions or migrate the example to the current Next.js runtime conventions before treating the old configuration as production guidance.

## Cryptography caveats

This repository is an **API demonstration**, not a recommended password-encryption design.

The sample route uses a hard-coded demonstration password:

```text
hunter2
```

and directly hashes it with SHA-256 to produce AES key material.

For real password-derived encryption, use a purpose-built password-based key derivation function such as a suitable PBKDF / KDF with a random salt and an appropriate work factor rather than a single SHA-256 hash.

Likewise, keys, nonces / IVs, authentication tags, key rotation, storage, recovery, and threat model need explicit design in a real cryptographic product.

## Sensitive-output caveat

The demonstration JSON response intentionally returns values including the sample plaintext, sample password, IV, decrypted text, and random values so a developer can inspect the example.

Do not copy that behavior into a real secret-handling endpoint. Production systems should never return credentials or sensitive key material merely for debugging convenience.

## Current status

**Small imported Web Crypto / Edge Runtime demonstration.** The code is useful for showing cryptographic API availability in a Next.js Edge environment. It is not a cryptocurrency application, security product, password vault, or production cryptographic design.

## Upstream provenance

`package.json` declares:

```text
https://github.com/vercel/examples.git
```

as the repository origin. Preserve upstream attribution and licensing requirements if redistributing or adapting the example.

## License

The package declares MIT. Verify the upstream Vercel example license / notices for the exact source version when redistributing derived code.