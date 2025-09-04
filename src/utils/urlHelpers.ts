import { API_URL } from 'astro:env/client'

// This functions is used to generate a random alias hardcoded in the frontend
export function generateRandomAlias(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return result
}

export function isValidUrl(url: string): boolean {
  try {
    new globalThis.URL(url)
    return true
  } catch {
    return false
  }
}

export const API_CONFIG = {
  BASE_URL: API_URL,
  ENDPOINTS: {
    URLS: '/urls', // for GET all URLs
    SHORTEN: '/shorten', // for POST to create a short URL
  },
} as const

export function buildApiUrl(
  endpoint: keyof typeof API_CONFIG.ENDPOINTS,
): string {
  return `${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS[endpoint]}`
}
