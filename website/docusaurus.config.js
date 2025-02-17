module.exports = {
  title: 'Agile4Enterprise Framework',
  url: 'https://Agile4Enterprise.github.io', 
  baseUrl: '/framework/', 
  trailingSlash: false, 
  organizationName: 'Agile4Enterprise',
  projectName: 'framework',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  scripts: [
    {
      src: '/framework/assets/js/main.js?v=' + new Date().getTime(), // 🚀 Ajoute un cache-buster
      async: true,
    },
  ],
  presets: [
    [
      'classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
      },
    ],
  ],
};
