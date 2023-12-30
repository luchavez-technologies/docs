// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "LuchTech",
  tagline: "Documentations",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.luchtech.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "luchavez-technologies", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "lazybox",
          routeBasePath: "lazybox",
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/luchavez-technologies/docs/tree/develop",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl: "https://github.com/luchavez-technologies/docs/tree/develop",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "api_sdk_kit",
        path: "api-sdk-kit",
        routeBasePath: "api-sdk-kit",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "aws_ses_bounce",
        path: "aws-ses-bounce",
        routeBasePath: "aws-ses-bounce",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "boilerplate_generator",
        path: "boilerplate-generator",
        routeBasePath: "boilerplate-generator",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "simple_files",
        path: "simple-files",
        routeBasePath: "simple-files",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "simple_maintenance",
        path: "simple-maintenance",
        routeBasePath: "simple-maintenance",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "simple_secrets",
        path: "simple-secrets",
        routeBasePath: "simple-secrets",
        sidebarPath: "./sidebars.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "starter_kit",
        path: "starter-kit",
        routeBasePath: "starter-kit",
        sidebarPath: "./sidebars.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "LuchTech",
        logo: {
          alt: "LuchTech Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "lazybox_sidebar",
          //   position: "left",
          //   label: "LazyBox",
          // },
          // {
          //   type: "docSidebar",
          //   docsPluginId: "simple_files",
          //   sidebarId: "simple_files_sidebar",
          //   position: "left",
          //   label: "Simple Files",
          //   activeBaseRegex: `/simple-files/`,
          // },
          // {
          //   type: "docSidebar",
          //   docsPluginId: "boilerplate_generator",
          //   sidebarId: "boilerplate_generator_sidebar",
          //   position: "left",
          //   label: "Boilerplate Generator",
          //   activeBaseRegex: `/boilerplate-generator/`,
          // },
          // {
          //   to: "/aws-ses-bounce/intro",
          //   sidebarId: "aws_ses_bounce_sidebar",
          //   position: "left",
          //   label: "AWS SES Bounce",
          //   activeBaseRegex: `/aws-ses-bounce/`,
          // },
          // {
          //   to: "/boilerplate-generator/intro",
          //   sidebarId: "boilerplate_generator_sidebar",
          //   position: "left",
          //   label: "Boilerplate Generator",
          //   activeBaseRegex: `/boilerplate-generator/`,
          // },
          // {
          //   to: "/simple-files/intro",
          //   sidebarId: "simple_files_sidebar",
          //   position: "left",
          //   label: "Simple Files",
          //   activeBaseRegex: `/simple-files/`,
          // },
          // {
          //   to: "/simple-maintenance/intro",
          //   sidebarId: "simple_maintenance_sidebar",
          //   position: "left",
          //   label: "Simple Maintenance",
          //   activeBaseRegex: `/simple-maintenance/`,
          // },
          // {
          //   to: "/simple-secrets/intro",
          //   sidebarId: "simple_secrets_sidebar",
          //   position: "left",
          //   label: "Simple Files",
          //   activeBaseRegex: `/simple-secrets/`,
          // },
          // {
          //   to: "/starter-kit/intro",
          //   sidebarId: "starter_kit_sidebar",
          //   position: "left",
          //   label: "Starter Kit",
          //   activeBaseRegex: `/starter-kit/`,
          // },

          // { to: "/blog", label: "Blog", position: "left" },

          // Version Dropdowns
          {
            type: "docsVersionDropdown",
            docsPluginId: "api_sdk_kit",
            sidebarId: "api_sdk_kit_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "aws_ses_bounce",
            sidebarId: "aws_ses_bounce_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "boilerplate_generator",
            sidebarId: "boilerplate_generator_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "simple_files",
            sidebarId: "simple_files_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "simple_maintenance",
            sidebarId: "simple_maintenance_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "simple_secrets",
            sidebarId: "simple_secrets_sidebar",
            position: "right",
          },
          {
            type: "docsVersionDropdown",
            docsPluginId: "starter_kit",
            sidebarId: "starter_kit_sidebar",
            position: "right",
          },

          // Others
          {
            href: "https://github.com/luchavez-technologies",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/MBxxAkQAxx",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/luchtechdotdev",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/luchavez-technologies",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LuchTech. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "HFHCLDHCNX",

        // Public API key: it is safe to commit it
        apiKey: "0f81356bfc6bfd0397bd96bd94d16940",

        indexName: "luchtech_docs",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: "search",

        //... other Algolia params
      },
    }),
};

export default config;
