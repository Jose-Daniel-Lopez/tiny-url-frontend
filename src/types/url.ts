export interface UrlData {
  id: string | number
  originalUrl: string
  shortUrl: string
  alias?: string
  authCode?: string
  createdDate?: string
}

export interface CreateUrlRequest {
  originalUrl: string
  alias?: string
  authCode?: string
}

export interface CreateUrlResponse {
  id: string | number
  originalUrl: string
  shortUrl: string
  alias: string
  createdAt: string
}
