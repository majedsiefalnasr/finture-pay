import type { ModuleOptions } from 'nuxt-schema-org'
import { identity } from '../constants'

export const schemaOrg: ModuleOptions = {
  enabled: true,
  minify: true,
  reactive: true,
  debug: false,
  identity: {
    name: identity.name,
    logo: identity.image,
    url: identity.url,
    sameAs: identity.sameAs,
  },
}
