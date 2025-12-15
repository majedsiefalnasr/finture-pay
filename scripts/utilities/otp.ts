import Requests from '../apis/api'

export default class Otp extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async sendOtp(payload: string) {
    try {
      const response = await this.api({ mobile_or_email: payload }, '/otp')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }

  async checkOtp(payload: object) {
    try {
      const response = await this.api(payload, '/check_otp')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
