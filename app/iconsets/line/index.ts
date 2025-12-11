import { h } from 'vue'
import type { IconProps, IconSet } from 'vuetify'

import * as Icons from './icons'

function kebabToCamel(str: string): string {
  return str.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

const aliases = {
  add: Icons.Add,
  alertOctagon: Icons.AlertOctagon,
  annotationQuestion: Icons.AnnotationQuestion,
  arrowNarrowDown: Icons.ArrowNarrowDown,
  arrowNarrowRight: Icons.ArrowNarrowRight,
  arrowNarrowUp: Icons.ArrowNarrowUp,
  bank: Icons.Bank,
  bell01: Icons.Bell01,
  bookClosed: Icons.BookClosed,
  bookClosed01: Icons.BookClosed01,
  briefcase02: Icons.Briefcase02,
  building02: Icons.Building02,
  calendar: Icons.Calendar,
  callcenter: Icons.Callcenter,
  check: Icons.Check,
  chevronDown: Icons.ChevronDown,
  chevronRight: Icons.ChevronRight,
  clock: Icons.Clock,
  coins04: Icons.Coins04,
  coinsStacked02: Icons.CoinsStacked02,
  copy07: Icons.Copy07,
  creditCard02: Icons.CreditCard02,
  dashboard: Icons.Dashboard,
  download02: Icons.Download02,
  drop: Icons.Drop,
  drowNarrowLett: Icons.DrowNarrowLett,
  edit03: Icons.Edit03,
  empty: Icons.Empty,
  eye: Icons.Eye,
  eyeOff: Icons.EyeOff,
  file02: Icons.File02,
  filePlus02: Icons.FilePlus02,
  fileShield02: Icons.FileShield02,
  fingerprint01: Icons.Fingerprint01,
  flash: Icons.Flash,
  flashAlt: Icons.FlashAlt,
  flow: Icons.Flow,
  folderCode: Icons.FolderCode,
  gas: Icons.Gas,
  globe01: Icons.Globe01,
  helpCircle: Icons.HelpCircle,
  homeLine: Icons.HomeLine,
  hourglass03: Icons.Hourglass03,
  identity: Icons.Identity,
  image03: Icons.Image03,
  inbox: Icons.Inbox,
  infoCircle: Icons.InfoCircle,
  işlemler: Icons.İşlemler,
  kampanyalar: Icons.Kampanyalar,
  lifeBuoy02: Icons.LifeBuoy02,
  lock01: Icons.Lock01,
  mail01: Icons.Mail01,
  menu03: Icons.Menu03,
  messageSquare01: Icons.MessageSquare01,
  paraGonder: Icons.ParaGonder,
  phone: Icons.Phone,
  phone01: Icons.Phone01,
  pieChart: Icons.PieChart,
  pieChart03: Icons.PieChart03,
  plus: Icons.Plus,
  pos: Icons.Pos,
  qrCode01: Icons.QrCode01,
  refreshCcw05: Icons.RefreshCcw05,
  search: Icons.Search,
  settings: Icons.Settings,
  settings02: Icons.Settings02,
  share01: Icons.Share01,
  shieldTick: Icons.ShieldTick,
  signature: Icons.Signature,
  speedometer03: Icons.Speedometer03,
  switchHorizontal01: Icons.SwitchHorizontal01,
  tahsilat: Icons.Tahsilat,
  tools: Icons.Tools,
  transfer: Icons.Transfer,
  trash03: Icons.Trash03,
  tv02: Icons.Tv02,
  upload01: Icons.Upload01,
  usen: Icons.Usen,
  user01: Icons.User01,
  userCheck01: Icons.UserCheck01,
  userCircle: Icons.UserCircle,
  userPlus01: Icons.UserPlus01,
  wallet03: Icons.Wallet03,
  whatsapp: Icons.Whatsapp,
  xClose: Icons.XClose,
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
