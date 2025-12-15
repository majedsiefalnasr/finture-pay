import SubscriptionsBusinessLogic from '~~/scripts/logic/subscriptions'
import Subscriptions from '~~/scripts/utilities/subscriptions'
export default {
  async demoSubscription(context, payload) {
    try {
      const subObj = new Subscriptions({ apiUrl: useRuntimeConfig().public.API_URL })
      const subBSLogic = new SubscriptionsBusinessLogic()
      subObj.demoSubscription(payload).then((RESPONSE) => {
        if (RESPONSE) {
          if (RESPONSE.data.status === 'success') {
            subBSLogic.setDemoDataBSLogic(RESPONSE.data, payload.name, payload.email)
          }
          context.commit('DEMO_SUBSCRIPTION_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Subscriptions action demoSubscription')
    }
  },

  async enterpriseSubscription(context, payload) {
    try {
      const subObj = new Subscriptions({ apiUrl: useRuntimeConfig().public.API_URL })
      subObj.demoSubscription(payload).then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('ENTERPRISE_SUBSCRIPTION_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Subscriptions action enterpriseSubscription')
    }
  },
}
