module.exports = {
  title: 'Agile4Enterprise Framework',
  tagline: 'Un framework agile conçu pour les entreprises',
  url: 'https://Agile4Enterprise.github.io',
  baseUrl: '/framework/',  // ⚠️ Change selon le nom du repo GitHub
  organizationName: 'Agile4Enterprise',
  projectName: 'framework',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  themeConfig: {
    navbar: {
      title: 'Agile4Enterprise',
      items: [
        { to: '/docs/intro', label: 'Documentation', position: 'left' },
        { href: 'https://github.com/Agile4Enterprise/framework', label: 'GitHub', position: 'right' },
      ],
    },
  },
};
