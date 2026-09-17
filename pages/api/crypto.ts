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
  const ptUtf8 = new TextEncoder().encode(plainText)

  const encryptionKey = await crypto.subtle.generateKey(
    { name: 'AES-GCM', length: 256 },
    false,
    ['encrypt', 'decrypt']
  )

  const iv = crypto.getRandomValues(new Uint8Array(12))
  const alg = { name: 'AES-GCM', iv }
  const encrypted = await crypto.subtle.encrypt(alg, encryptionKey, ptUtf8)
  const ptBuffer = await crypto.subtle.decrypt(alg, encryptionKey, encrypted)
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
