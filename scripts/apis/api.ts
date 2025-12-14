import axios from 'axios'

export interface ApiResponse<T = unknown> {
  data: T
  status: number
}

export default class Requests {
  apiUrl: string

  constructor(apiUrl: string) {
    this.apiUrl = apiUrl
  }

  async api<T = any>(body: unknown, endpoint: string): Promise<ApiResponse<T> | null> {
    let token: string | null = null
    let product: number | null = null
    let country: string | null = null

    if (typeof window !== 'undefined') {
      token = localStorage.getItem('ACT')
      product = 1
      country = localStorage.getItem('COUNTRY_NUMBER')
    }
    const headers: Record<string, string> = {
      'content-type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(product ? { product } : {}),
      ...(country ? { country } : {}),
    }

    try {
      const response = await axios.post(`${this.apiUrl}${endpoint}`, body, { headers })

      return {
        data: response.data,
        status: response.status,
      }
    } catch (error: any) {
      const status = error?.response?.status

      if (typeof window !== 'undefined') {
        if (status === 403) {
          window.location.href = '/'
        } else if (status === 401) {
          localStorage.removeItem('ACT')
          window.location.href = '/login'
        }
      }

      return null
    }
  }
}
