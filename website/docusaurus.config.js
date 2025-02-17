module.exports = {
  title: 'Agile4Enterprise Framework',
  url: 'https://Agile4Enterprise.github.io', 
  baseUrl: '/framework/', 
  trailingSlash: false, 
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
          routeBasePath: '/',
        },
      },
    ],
  ],
};
