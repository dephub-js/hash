import { hash } from '#/utils.ts';

/**
 * Generates a SHA-384 hash from a string.
 *
 * @param input - The input string to hash.
 * @returns A promise that resolves to the hexadecimal hash.
 * @example
 * await sha384('Hello World');
 */
export function sha384(input: string): Promise<string> {
  return hash(input, 'SHA-384');
}
