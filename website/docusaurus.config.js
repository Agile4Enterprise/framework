module.exports = {
  title: 'Agile4Enterprise Framework',
  url: 'https://Agile4Enterprise.github.io', // ✅ Laisse cette URL
  baseUrl: '/framework/', // ⚠️ Mets ici le bon baseUrl selon ton repo
  organizationName: 'Agile4Enterprise',
  projectName: 'framework',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
      },
    ],
  ],
};
