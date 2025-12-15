export default class DataTypes {
  async returnDataType(value: any) {
    if (typeof value === 'number' && !Number.isNaN(value)) {
      return 'number'
    }
    if (typeof value === 'string') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (emailRegex.test(value)) {
        return 'email'
      }

      return 'string'
    }

    return 'string'
  }
}
