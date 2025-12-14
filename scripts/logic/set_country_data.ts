export default class CountriesBusinessLogic {
  async addCountryBasicData(countryData: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('COUNTRY_CODE', countryData.data.country_code)
      localStorage.setItem('COUNTRY_NAME', countryData.data.country_name)
      if (!localStorage.getItem('FIRST_LOAD')) {
        localStorage.setItem('FIRST_LOAD', '')
      }
    }
  }

  async addCountryFullData(countryData: any) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('DEFAULT_LANG', countryData.data.data[0].default_language)
      localStorage.setItem('COUNTRY_PHONE_CODE', countryData.data.data[0].phone_key)
      localStorage.setItem('COUNTRY_NUMBER', countryData.data.data[0].id)
      localStorage.setItem('CURRENCY', countryData.data.data[0].currency)
      localStorage.setItem('VERIFY_WITH_OTP', countryData.data.data[0].verify_with_otp)
      if (!localStorage.getItem('CURRENT_LANG')) {
        localStorage.setItem('CURRENT_LANG', countryData.data.data[0].default_language)
      }
    }
  }
}
