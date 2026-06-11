import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Tomhmagic Creations',
  description: 'Wiki for Tomhmagic Creations Minecraft Bedrock Add-Ons.',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/assets/logo.png',
    siteTitle: 'Tomhmagic Creations',
    nav: [
      { text: 'Troubleshooting', link: '/guides/troubleshooting' },
      { text: 'Changelog', link: '/changelog' }
    ],
    sidebar: {
      '/guides/': [
        {
          text: 'Guides',
          items: [
            { text: 'Troubleshooting', link: '/guides/troubleshooting' }
          ]
        }
      ],
      '/project/': [
        {
          text: 'Project Notes',
          items: [
            { text: 'Page Standards', link: '/project/page-standards' },
            { text: 'Release Checklist', link: '/project/release-checklist' }
          ]
        }
      ],
      '/economy-plus/': [
        {
          text: 'Economy+',
          items: [
            { text: 'Overview', link: '/economy-plus/' },
            { text: 'Features', link: '/economy-plus/features' }
          ]
        }
      ],
      '/realight-reimagined/': [
        {
          text: 'Realight Reimagined',
          items: [
            { text: 'Overview', link: '/realight-reimagined/' },
            { text: 'Features', link: '/realight-reimagined/features' }
          ]
        }
      ]
    },
    socialLinks: [],
    search: {
      provider: 'local'
    },
    footer: {
      message: 'Minecraft is a trademark of Mojang Studios. This wiki is not affiliated with Mojang or Microsoft.',
      copyright: 'Copyright (c) Tomhmagic Creations'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/logo.png' }],
    ['meta', { name: 'theme-color', content: '#4bb7dc' }]
  ]
})
