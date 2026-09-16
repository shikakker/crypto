import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const read = async (path) => readFile(new URL(`../${path}`, import.meta.url), 'utf8')
const pkg = JSON.parse(await read('package.json'))
const api = await read('pages/api/crypto.ts')

test('example uses a stable maintained runtime instead of moving canary/latest tags', () => {
  assert.equal(pkg.dependencies?.next, '16.3.5')
  assert.equal(pkg.dependencies?.react, '19.3.0')
  assert.equal(pkg.dependencies?.['react-dom'], '19.3.0')
  assert.equal(pkg.engines?.node, '22.x')
})

test('demonstration key material is never returned in the API response', () => {
  const responseObject = api.match(/JSON\.stringify\(\{([\s\S]*?)\}\)/)?.[1] ?? ''
  assert.doesNotMatch(responseObject, /\bpassword\s*,/)
  assert.doesNotMatch(responseObject, /password\s*:/)
})

test('edge runtime uses the current non-experimental identifier', () => {
  assert.match(api, /runtime:\s*['"]edge['"]/)
  assert.doesNotMatch(api, /experimental-edge/)
})
