import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Modern Docs",
  description: "A modern documentation website built with VitePress",
  lang: 'en-US',
  
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'API', link: '/api/' },
      { text: 'Deploy', link: '/deployment/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Getting Started', link: '/guide/getting-started' },
            { text: 'Installation', link: '/guide/installation' },
            { text: 'Configuration', link: '/guide/configuration' }
          ]
        },
        {
          text: 'Features',
          items: [
            { text: 'Key Features', link: '/guide/features/' },
            { text: 'Performance', link: '/guide/features/performance' },
            { text: 'Security', link: '/guide/features/security' }
          ]
        },
        {
          text: 'Components',
          items: [
            { text: 'Overview', link: '/guide/components/' },
            { text: 'UI Components', link: '/guide/components/ui-components' },
            { text: 'Layout Components', link: '/guide/components/layout-components' }
          ]
        }
      ],
      '/api/': [
        {
          text: 'API Reference',
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Core APIs', link: '/api/core' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourusername/project' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present'
    },

    search: {
      provider: 'local'
    }
  }
})