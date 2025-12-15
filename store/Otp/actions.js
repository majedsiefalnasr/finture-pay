import Otp from '~~/scripts/utilities/otp'
export default {

  async sendOtp(context, payload) {
    try {
      const otpObj = new Otp({ apiUrl: useRuntimeConfig().public.API_URL })
      otpObj.sendOtp(payload).then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('SEND_OTP_RESPONSE_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Otp action sendOtp')
    }
  },

  async checkOtp(context, payload) {
    try {
      const otpObj = new Otp({ apiUrl: useRuntimeConfig().public.API_URL })
      otpObj.checkOtp(payload).then((RESPONSE) => {
        if (RESPONSE) {
          context.commit('CHECK_OTP_RESPONSE_MUTATIONS', RESPONSE.data)
        }
      })
    } catch (error) {
      console.log(error + 'from store Otp action checkOtp')
    }
  },
}
