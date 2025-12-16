import { Icon } from '@iconify/vue'
import { h } from 'vue'
import type { IconProps, IconSet } from 'vuetify'

const faBrandsSet: IconSet = {
  component: (props: IconProps) => h(Icon, { icon: `fa-brands:${props.icon}` }),
}

export { faBrandsSet }
