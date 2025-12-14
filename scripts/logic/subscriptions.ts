export default class SubscriptionsBusinessLogic {
  setDemoDataBSLogic(response: any, name: string, email: string) {
    localStorage.setItem('NAME', name)
    localStorage.setItem('EMAIL', email)
    localStorage.setItem('TEMPORARY_TOKEN', response['access_token'])
    localStorage.setItem('POS_COUNT', '2')
    localStorage.setItem('REG_CODE', response['reg_code'])
  }
}
