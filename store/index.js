import { createStore } from 'vuex'
import Countries from './Countries'
import Otp from './Otp'
import Pricing from './Pricing'
import Subscriptions from './Subscriptions'

const store = createStore({
  modules: {
    Countries,
    Pricing,
    Otp,
    Subscriptions,
  },
})

export default store
