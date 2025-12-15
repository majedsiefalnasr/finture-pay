import Pricing from '~~/scripts/utilities/pricing'

export default {
  async GET_PRODUCT_PRICE(context) {
    try {
      const priceObj = new Pricing({ apiUrl: useRuntimeConfig().public.API_URL })
      priceObj.getProductPrice().then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('GET_PRODUCT_PRICES_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Pricing action  GET_PRODUCT_PRICE')
    }
  },

  async GET_ACTIVE_SERVIVES_PRICES(context) {
    try {
      const priceObj = new Pricing({ apiUrl: useRuntimeConfig().public.API_URL })
      priceObj.getActiveServicesPrices().then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('GET_SERVICES_PRICES_ACTIVATE', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Pricing action  GET_ACTIVE_SERVIVES_PRICES')
    }
  },

  async GET_CHECKOUT_PRICE_WITH_SERVICES_OBJECT(context, payload) {
    try {
      const priceObj = new Pricing({ apiUrl: useRuntimeConfig().public.API_URL })
      priceObj.getCheckoutPriceWithServicesObject(payload).then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('GET_CHECKOUT_PRICE_WITH_SERVICES_OBJECT_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Pricing action  GET_CHECKOUT_PRICE_WITH_SERVICES_OBJECT')
    }
  },
}
