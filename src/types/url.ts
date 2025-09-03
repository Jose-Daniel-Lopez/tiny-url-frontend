export interface UrlData {
  id: string | number
  originalUrl: string
  shortUrl: string
  alias?: string
  createdAt?: string
}

export interface CreateUrlRequest {
  originalUrl: string
  alias?: string
}

export interface CreateUrlResponse {
  id: string | number
  originalUrl: string
  shortUrl: string
  alias: string
  createdAt: string
}
