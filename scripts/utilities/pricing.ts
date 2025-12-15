import Requests from '../apis/api'

export interface ServicesObject {
  duration: ''
  package_name: 'Finture'
  coupon: ''
  services: [
    {
      service_code: 1
      service_count: 0
      service_hour: 0
      service_name: ''
      service_currency: ''
    },
  ]
}

export default class Pricing extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async getProductPrice() {
    try {
      const response = await this.api({}, '/product_price')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }

  async getActiveServicesPrices() {
    try {
      const response = await this.api({ package_name: 'Finture' }, '/services')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }

  async getCheckoutPriceWithServicesObject(payload: object) {
    try {
      const response = await this.api(payload, '/services_pricing')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
