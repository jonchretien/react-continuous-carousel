import { defineConfig } from 'vitepress'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  title: 'react-continuous-carousel',
  description: 'React wrapper for the continuous-carousel library',
  base: '/react-continuous-carousel/',

  themeConfig: {
    nav: [
      { text: 'Guide',     link: '/guide/getting-started', activeMatch: '/guide/' },
      { text: 'Examples',  link: '/examples/horizontal',   activeMatch: '/examples/' },
      { text: 'Changelog', link: '/changelog' },
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Getting Started', link: '/guide/getting-started' },
          { text: 'Configuration',   link: '/guide/configuration' },
          { text: 'API Methods',     link: '/guide/api' },
          { text: 'Styling',         link: '/guide/styling' },
        ],
      },
      {
        text: 'Examples',
        items: [
          { text: 'Horizontal',    link: '/examples/horizontal' },
          { text: 'Vertical',      link: '/examples/vertical' },
          { text: 'Reverse',       link: '/examples/reverse' },
          { text: 'With Controls', link: '/examples/controls' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/jonchretien/react-continuous-carousel' },
    ],
    footer: {
      message: 'Released under the MIT License.',
    },
    search: { provider: 'local' },
  },

  vite: {
    plugins: [react({ include: /\.(jsx|tsx)$/ })],
    resolve: {
      alias: {
        'react-continuous-carousel': resolve(__dirname, '../../src/index.ts'),
      },
    },
  },
})
