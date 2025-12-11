import { h } from 'vue'
import type { IconProps, IconSet } from 'vuetify'

import * as Icons from './icons'

function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

const aliases = {
  add: Icons.Add,
  building: Icons.Building,
  business: Icons.Business,
  campaigns: Icons.Campaigns,
  card: Icons.Card,
  dashboard: Icons.Dashboard,
  digitalCodes: Icons.DigitalCodes,
  electric: Icons.Electric,
  error: Icons.Error,
  expense: Icons.Expense,
  faceVerification: Icons.FaceVerification,
  id: Icons.Id,
  idBack: Icons.IdBack,
  imageUser: Icons.ImageUser,
  individual: Icons.Individual,
  internet: Icons.Internet,
  language: Icons.Language,
  mission: Icons.Mission,
  mobile: Icons.Mobile,
  naturalGas: Icons.NaturalGas,
  nfc: Icons.Nfc,
  notification: Icons.Notification,
  payUtility: Icons.PayUtility,
  payWithQr: Icons.PayWithQr,
  pos: Icons.Pos,
  puzzlePiece: Icons.PuzzlePiece,
  remittance: Icons.Remittance,
  safe: Icons.Safe,
  scanId: Icons.ScanId,
  selfie: Icons.Selfie,
  technical: Icons.Technical,
  topupMoney: Icons.TopupMoney,
  transferMoney: Icons.TransferMoney,
  vision: Icons.Vision,
  wallet: Icons.Wallet,
  water: Icons.Water,
  withdrawMoney: Icons.WithdrawMoney,
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
