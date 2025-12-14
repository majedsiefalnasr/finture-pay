import CountriesBusinessLogic from '~~/scripts/logic/set_country_data'
import Countries from '~~/scripts/utilities/countries'

export default {
  async GET_COUNTRY_DATA(context) {
    try {
      const countryObj = new Countries({ apiUrl: useRuntimeConfig().public.API_URL })
      const countryBsLogicObj = new CountriesBusinessLogic()
      countryObj.getCountryCodeWithIp().then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('COUNTRY_CODE_MUTAIONS', RESPONSE.data.country_code)
          context.commit('COUNTRY_NAME_MUTATIONS', RESPONSE.data.country_name)
          countryBsLogicObj.addCountryBasicData(RESPONSE)
          countryObj
            .getCountryDataByCountryCode(RESPONSE.data.country_code)
            .then((COUNTRIES_RES) => {
              if (COUNTRIES_RES) {
                context.commit('COUNTRY_DATA_OBJECT', COUNTRIES_RES.data.data[0])
                countryBsLogicObj.addCountryFullData(COUNTRIES_RES)
              }
            })
        }
      })
    } catch (error) {
      console.log(error + 'from store Countries action GET_COUNTRY_DATA')
    }
  },
}
