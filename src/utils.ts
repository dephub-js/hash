export type Algorithm = 'SHA-256' | 'SHA-384' | 'SHA-512';

const encoder = new TextEncoder();

export async function hash(
  input: string,
  algorithm: Algorithm = 'SHA-256',
): Promise<string> {
  if (typeof input !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const data = encoder.encode(input);

  const digest = await crypto.subtle.digest(algorithm, data);

  return toHex(digest);
}

function toHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}
