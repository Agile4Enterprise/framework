// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Agile4Enterprise',
  tagline: 'Transformer durablement votre manière de faire du business',
  favicon: 'img/logo.svg',

  // URL de production (remplacez par votre domaine final si applicable)
  url: 'https://framework.agile4enterprise.com',
  // Base URL pour GitHub Pages
  baseUrl: '/',

  // Configuration pour GitHub Pages
  organizationName: 'Agile4Enterprise', // Nom de l'organisation GitHub
  projectName: 'framework', // Nom du repo GitHub
  deploymentBranch: 'gh-pages', // Branche où le site sera déployé
  trailingSlash: false, // Empêche les redirections SEO problématiques sur GitHub Pages
  onBrokenLinks: 'throw', //onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/Agile4Enterprise/framework/edit/main/docs/',
        },
        
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Agile4Enterprise/framework/edit/main/blog/',
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/agile4enterprise-social-card.png',
      navbar: {
        title: 'Agile4Enterprise',
        logo: {
          alt: 'Logo Agile4Enterprise',
          src: 'img/logo.svg',
        },
        items: [
          {
            href: 'https://agile4enterprise.github.io/guide/',
            label: 'Guide',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Framework',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/Agile4Enterprise/framework',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Framework',
                to: '/docs/',
              },
              {
                label: 'Guide',
                href: 'https://agile4enterprise.github.io/guide/',
              },
            ],
          },
          {
            title: 'Communauté',
            items: [
              {
                label: 'Site officiel',
                href: 'https://agile4enterprise.com/',
              },
              {
                label: 'Circle',
                href: 'https://community.readaptative.com/',
              },
              {
                label: 'Meetup',
                href: 'https://meetup.readaptative.com/',
              },
            ],
          },
          {
            title: 'Plus',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub Framework',
                href: 'https://github.com/Agile4Enterprise/framework',
              },
              {
                label: 'GitHub Guide',
                href: 'https://github.com/Agile4Enterprise/guide',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Agile4Enterprise`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
