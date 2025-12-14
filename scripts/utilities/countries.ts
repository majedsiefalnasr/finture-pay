import Requests from '../apis/api'

export default class Countries extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async getCurrentIpAccess() {
    try {
      const req = await fetch('https://api.ipify.org?format=json')
      const data = await req.json()
      return data.ip ?? null
    } catch {
      return null
    }
  }

  async getCountryCodeWithIp() {
    try {
      const currentIp = await this.getCurrentIpAccess()
      if (!currentIp) {
        return null
      }
      const response = await this.api({ ip: currentIp }, '/get_country_code_with_ip')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }

  async getCountryDataByCountryCode(countryCode: string) {
    try {
      const response = await this.api(
        { field_name: 'country_code_2d', value: countryCode },
        '/cashierme_get_country_with_filter'
      )
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
