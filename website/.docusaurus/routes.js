import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/framework/__docusaurus/debug',
    component: ComponentCreator('/framework/__docusaurus/debug', '921'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/config',
    component: ComponentCreator('/framework/__docusaurus/debug/config', '155'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/content',
    component: ComponentCreator('/framework/__docusaurus/debug/content', 'd80'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/globalData',
    component: ComponentCreator('/framework/__docusaurus/debug/globalData', '5cd'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/metadata',
    component: ComponentCreator('/framework/__docusaurus/debug/metadata', 'cf0'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/registry',
    component: ComponentCreator('/framework/__docusaurus/debug/registry', 'a26'),
    exact: true
  },
  {
    path: '/framework/__docusaurus/debug/routes',
    component: ComponentCreator('/framework/__docusaurus/debug/routes', 'b8b'),
    exact: true
  },
  {
    path: '/framework/markdown-page',
    component: ComponentCreator('/framework/markdown-page', '626'),
    exact: true
  },
  {
    path: '/framework/docs',
    component: ComponentCreator('/framework/docs', '8a6'),
    routes: [
      {
        path: '/framework/docs',
        component: ComponentCreator('/framework/docs', '71c'),
        routes: [
          {
            path: '/framework/docs',
            component: ComponentCreator('/framework/docs', '704'),
            routes: [
              {
                path: '/framework/docs/intro',
                component: ComponentCreator('/framework/docs/intro', '2ad'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/framework/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/framework/docs/tutorial-basics/congratulations', 'c86'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/framework/docs/tutorial-basics/create-a-blog-post', '6bd'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/framework/docs/tutorial-basics/create-a-document', 'd79'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/framework/docs/tutorial-basics/create-a-page', '4d3'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/framework/docs/tutorial-basics/deploy-your-site', 'af1'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/framework/docs/tutorial-basics/markdown-features', '08c'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/framework/docs/tutorial-extras/manage-docs-versions', '339'),
                exact: true
              },
              {
                path: '/framework/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/framework/docs/tutorial-extras/translate-your-site', '5e2'),
                exact: true
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/framework/',
    component: ComponentCreator('/framework/', '934'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
