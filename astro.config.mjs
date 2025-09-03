// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import node from '@astrojs/node'

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  env: {
    schema: {
      API_URL: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
  },

  output: 'server',

  adapter: node({
    mode: 'standalone',
  }),
})
