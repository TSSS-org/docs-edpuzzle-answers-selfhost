// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Edpuzzle Answers Self-Host',
  tagline: 'Better documentation for edpuzzle-answers-selfhost',
  favicon: 'https://thesupersupersigma.com/public/favicon.ico',

  url: 'https://tsss-org.github.io',
  baseUrl: '/docs-edpuzzle-answers-selfhost/',

  organizationName: 'TSSS-org',
  projectName: 'docs-edpuzzle-answers-selfhost',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/TSSS-org/docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Edpuzzle Answers Self-Host',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/TSSS-org/edpuzzle-answers-selfhost',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Installation',
                to: '/docs/',
              },
              {
                label: 'Configuration',
                to: '/docs/configuration',
              },
              {
                label: 'FAQ',
                to: '/docs/faq',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TSSS-org/edpuzzle-answers-selfhost',
              },
              {
                label: 'thesupersupersigma.com',
                href: 'https://thesupersupersigma.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TSSS-org. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;