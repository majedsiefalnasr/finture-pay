export default {
  SEND_OTP_RESPONSE_MUTATIONS(state, data) {
    state.OTP_OBJ = data
  },
  CHECK_OTP_RESPONSE_MUTATIONS(state, data) {
    state.CHECK_OTP_OBJ = data
  },
}
