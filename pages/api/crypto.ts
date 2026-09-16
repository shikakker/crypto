import type { NextRequest } from 'next/server'

// ------------------
// Using Web Crypto with an Edge Function
// ------------------

export const config = {
  runtime: 'edge',
}

export default async function CryptoEdgeAPIRoute(request: NextRequest) {
  const url = request.nextUrl
  const fromMiddleware = url.searchParams.get('token') ?? 'unset'

  const plainText = 'Hello from the Edge!'
  const demoPassphrase = 'web-crypto-demo-only'
  const ptUtf8 = new TextEncoder().encode(plainText)
  const pwUtf8 = new TextEncoder().encode(demoPassphrase)

  const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8)

  const iv = crypto.getRandomValues(new Uint8Array(12))
  const alg = { name: 'AES-GCM', iv }
  const encryptKey = await crypto.subtle.importKey('raw', pwHash, alg, false, [
    'encrypt',
  ])
  const encrypted = await crypto.subtle.encrypt(alg, encryptKey, ptUtf8)

  const decryptKey = await crypto.subtle.importKey('raw', pwHash, alg, false, [
    'decrypt',
  ])
  const ptBuffer = await crypto.subtle.decrypt(alg, decryptKey, encrypted)
  const decryptedText = new TextDecoder().decode(ptBuffer)

  return new Response(
    JSON.stringify({
      uuid: crypto.randomUUID(),
      randomValues: Array.from(crypto.getRandomValues(new Uint32Array(10))),
      plainText,
      decryptedText,
      iv: Array.from(iv),
      fromMiddleware,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store',
      },
    }
  )
}
