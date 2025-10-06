import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const inDevMode = process.env.NODE_ENV === 'development';

const title = 'socktainer';
const config: Config = {
  title,
  tagline: 'Connect existing docker tooling on top of apple container using REST API',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: inDevMode ? 'http://localhost:3000' : 'https://socktainer.github.io',
  baseUrl: '/',

  organizationName: 'socktainer',
  projectName: 'socktainer',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownImages: 'warn',
      onBrokenMarkdownLinks: 'warn',
    },
  },

  themes: ['@docusaurus/theme-mermaid'],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/socktainer/socktainer.github.io/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title,
      logo: {
        alt: 'Socktainer Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mySidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          type: 'docSidebar',
          docsPluginId: 'tutorial',
          sidebarId: 'mySidebar',
          position: 'left',
          label: 'Tutorial',
        },
        { to: '/download', label: 'Download', position: 'left' },

        {
          type: 'custom-downloadButton',
          position: 'right',
        },
        {
          href: 'https://github.com/socktainer/socktainer',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: '/docs/intro',
            },
            {
              label: 'Download',
              to: '/download',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/Pw9VWKcUEt',
            },
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/socktainer/socktainer/discussions',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/socktainer/socktainer/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/socktainer/socktainer',
            },
            {
              label: 'Releases',
              href: 'https://github.com/socktainer/socktainer/releases',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Socktainer`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    goatcounter: {
      code: 'socktainer',
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    async () => {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require('@tailwindcss/postcss'));
          return postcssOptions;
        },
      };
    },
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: './sidebars.ts',
        editUrl: 'https://github.com/socktainer/socktainer.github.io/tree/main/',
      },
    ],
  ],
};

export default config;
