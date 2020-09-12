import { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  server: {
    port: 8000,
    host: '0.0.0.0',
    timing: false
  },
  serverMiddleware: [
    '~/api/index'
  ],
  buildModules: [
    '@nuxt/typescript-build'
  ]
}

export default config
