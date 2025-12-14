export default {
  GET_CHECKOUT_PRICE_WITH_SERVICES_OBJECT_MUTATIONS(state, data) {
    state.price = data[0]['total_amount']
    state.checkout_amount = data[0]['total_amount']
  },

  GET_PRODUCT_PRICES_MUTATIONS(state, data) {
    state.monthly_price = data.monthly_package_price
    state.annually_price = data.monthly_annually_package_price
    state.currency = data.currency
    state.free_trail_days = data.free_trail_days
    state.service_id = data.service_id
    state.package_id = data.product_package_id
  },
  GET_SERVICES_PRICES_ACTIVATE(state, data) {
    state.services = data['data']
  },
}
