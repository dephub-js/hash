# @dephub/hash 🔐

> Simple cryptographic hashing utilities powered by the Web Crypto API.

[![NPM version](https://img.shields.io/npm/v/@dephub/hash.svg?style=flat)](https://npmjs.org/package/@dephub/hash)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

## Features ✨

- 🔐 Generate SHA-256, SHA-384, and SHA-512 hashes.
- ⚡ Uses the native Web Crypto API.
- 🌐 Works in Node.js (18+) and modern browsers.
- 📦 Zero runtime dependencies.
- 🌳 Small, tree-shakeable, and ESM-first.
- 🔄 Consistent API across supported environments.

---

## Installation 📦

- npm: `npm install @dephub/hash`
- pnpm: `pnpm add @dephub/hash`
- yarn: `yarn add @dephub/hash`
- bun: `bun add @dephub/hash`

---

## Usage 🎯

### API 🧩

Generate a SHA-256 hash:

```
import { sha256 } from '@dephub/hash';

const digest = await sha256('Hello World');

console.log(digest);
// a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```

Generate a SHA-384 hash:

```
import { sha384 } from '@dephub/hash';

const digest = await sha384('Hello World');

console.log(digest);
// 99514329186b2f6ae4a1329e7ee6c610a729636335174ac6b740f9028396fcc803d0e93863a7c3d90f86beee782f4f3f
```

Generate a SHA-512 hash:

```
import { sha512 } from '@dephub/hash';

const digest = await sha512('Hello World');

console.log(digest);
// 2c74fd17edafd80e8447b0d46741ee243b7eb74dd2149a0ab1b9246fb30382f27e853d8585719e0e67cbda0daa8f51671064615d645ae27acb15bfb1447f459b
```

### Namespace API

You can also use the namespace export:

```
import { hash } from '@dephub/hash';

const sha256 = await hash.sha256('Hello World');
const sha384 = await hash.sha384('Hello World');
const sha512 = await hash.sha512('Hello World');
```

---

## Output Format

All hashing functions return a hexadecimal string in lowercase.

| Algorithm | Digest Size | Hex Length     |
| --------- | ----------- | -------------- |
| SHA-256   | 256 bits    | 64 characters  |
| SHA-384   | 384 bits    | 96 characters  |
| SHA-512   | 512 bits    | 128 characters |

---

## Security 🔒

SHA-256, SHA-384, and SHA-512 are cryptographic hash algorithms designed to provide data integrity and security.

**Note:** These algorithms are not suitable for password hashing. Use dedicated password-hashing algorithms such as Argon2id, scrypt, or PBKDF2 instead.

---

## License 📄

MIT License – see LICENSE for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
