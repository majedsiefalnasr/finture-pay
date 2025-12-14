import Requests from '../apis/api'

export default class Subscriptions extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async demoSubscription(payload: object) {
    try {
      const response = await this.api(payload, '/demo_subscription_function')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
