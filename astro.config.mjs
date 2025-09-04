// @ts-check
import { defineConfig, envField } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'

import node from '@astrojs/node'

import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  site: 'https://tab-to-dev.click',

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

  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [],
    }),
  ],
})
