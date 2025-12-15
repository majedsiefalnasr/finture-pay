import { h } from 'vue'
import type { IconProps, IconSet } from 'vuetify'

import * as Icons from './icons'

function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

const aliases = {
  transparent: Icons.Transparent,
  security: Icons.Security,
  lightningFast: Icons.LightningFast,
  support: Icons.Support,
  ai: Icons.Ai,
  regulatory: Icons.Regulatory,
  global: Icons.Global,
  control: Icons.Control,
  currency: Icons.Currency,
  refer: Icons.Refer,
  merchant: Icons.Merchant,
  seasonal: Icons.Seasonal,
  spendWin: Icons.SpendWin,
  loyalty: Icons.Loyalty,
  multiUsers: Icons.MultiUsers,
  subWallet: Icons.SubWallet,
  realtime: Icons.Realtime,
  sync: Icons.Sync,
  card: Icons.Card,
  nfc: Icons.Nfc,
  nocost: Icons.Nocost,
  portability: Icons.Portability,
  banksecurity: Icons.Banksecurity,
  settlement: Icons.Settlement,
  routing: Icons.Routing,
  billing: Icons.Billing,
}

const icons: IconSet = {
  component: (props: IconProps) => {
    const { icon, ...rest } = props
    if (typeof icon === 'string') {
      let iconName = icon
      if (icon.includes(':')) {
        const parts = icon.split(':')
        if (parts.length > 1) {
          iconName = parts[1]!
        }
      }
      const camelIconName = kebabToCamel(iconName)
      const IconComponent = aliases[camelIconName as keyof typeof aliases]
      return IconComponent ? h(IconComponent, rest) : h('span', rest)
    }
    return h('span', rest)
  },
}

export { aliases, icons }
