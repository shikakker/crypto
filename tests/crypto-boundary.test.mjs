import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = async (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const pkg = JSON.parse(await read('package.json'))
const api = await read('pages/api/crypto.ts')

test('example uses a stable maintained runtime instead of moving canary/latest tags', () => {
  assert.equal(pkg.dependencies?.next, '15.5.24')
  assert.equal(pkg.dependencies?.react, '18.2.0')
  assert.equal(pkg.dependencies?.['react-dom'], '18.2.0')
  assert.equal(pkg.engines?.node, '22.x')
})

test('demonstration key material is never returned in the API response', () => {
  const responseObject = api.match(/JSON\.stringify\(\{([\s\S]*?)\}\)/)?.[1] ?? ''
  assert.doesNotMatch(responseObject, /\bpassword\s*,/)
  assert.doesNotMatch(responseObject, /password\s*:/)
  assert.doesNotMatch(responseObject, /demoPassphrase/)
  assert.doesNotMatch(responseObject, /encryptKey/)
})

test('AES-GCM demo generates a non-extractable 256-bit key instead of hashing a password into key material', () => {
  assert.match(api, /crypto\.subtle\.generateKey\(/)
  assert.match(api, /name:\s*['"]AES-GCM['"]/)
  assert.match(api, /length:\s*256/)
  assert.match(api, /false,\s*\[['"]encrypt['"],\s*['"]decrypt['"]\]/)
  assert.doesNotMatch(api, /demoPassphrase/)
  assert.doesNotMatch(api, /crypto\.subtle\.digest\(/)
  assert.match(api, /crypto\.getRandomValues\(new Uint8Array\(12\)\)/)
})

test('edge runtime uses the current non-experimental identifier', () => {
  assert.match(api, /runtime:\s*['"]edge['"]/)
  assert.doesNotMatch(api, /experimental-edge/)
})
