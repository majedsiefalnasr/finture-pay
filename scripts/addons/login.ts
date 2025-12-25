import Requests from '../apis/api'

export default class Login extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async loginWithEmailOrrRegCode(payload: object) {
    try {
      const response = await this.api(payload, '/backoffice/login_with_email_or_registration_code')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
