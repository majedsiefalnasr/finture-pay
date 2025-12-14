import Requests from '../apis/api'
import DataTypes from '../validations/data_types'

export default class CheckExist extends Requests {
  constructor({ apiUrl }: { apiUrl: string }) {
    super(apiUrl)
  }

  async checkEmailOrPhoneExist(payload: string) {
    try {
      const body = { email: '', phone_number: '' }
      const DataTypesObj = new DataTypes()
      const dataType = await DataTypesObj.returnDataType(payload)
      if (dataType === 'email') {
        body.email = payload
      } else {
        body.phone_number = payload
      }
      const response = await this.api(body, '/check_phone_exist')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }

  async checkAcountCreation(temporaryToken: string) {
    try {
      const response = await this.api({ access_token: temporaryToken }, '/check_account_status')
      if (!response) {
        return null
      }
      return response
    } catch {
      return null
    }
  }
}
