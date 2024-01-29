// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const socials = require("./socials");

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: "icons/my_favicon.ico",
  title: "bjtn",

  // Set the production url of your site here
  url: 'https://notes.bjtnoguera.com',

  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // Remove this line to disable docs-only mode
          routeBasePath: "/",

          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/bjtn1/notes.bjtnoguera.com/tree/main',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // This is for KaTeX
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
      'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  ({
    announcementBar: {
      id: 'announcement',
      content: "Search bar is now fully functional! 🥳",
      backgroundColor: '#C8D3F5',
      textColor: "#1616e",
      isCloseable: true,
    },

    algolia: {
      // contextualSearch: false,
      appId: 'VJTD881357',
      apiKey: "2e2800fb7badb8129ddf9f7b6b009953",
      indexName: 'bjtnogueranotes',
      insights: true,
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },

    docs: {
      sidebar: {
        hideable: true,
      },
    },

    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Brandon J. T. Noguera',
      logo: {
        src: 'none',
        href: "https://notes.bjtnoguera.com/",
        target: "_self",
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notes_sidebar',
          position: 'left',
          label: 'Notes',
        },
        ...socials,
      ],
    },

    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.oneDark,
    },
  }),
};

export default config;
