// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Nic Lehman",
	tagline: "Software Enigineer",
	favicon: "img/favicon.ico",

	// production url
	url: "https://wisconic-git.vercel.com",
	baseUrl: "/",

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	//   organizationName: 'wisconic',
	//   projectName: 'wisconic',

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

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
					sidebarPath: "./sidebars.js",
					editUrl: "https://github.com/wisconic/wisconic/tree/main/",
				},
				blog: {
					showReadingTime: true,
					editUrl: "https://github.com/wisconic/wisconic/tree/main/",
				},
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: "img/docusaurus-social-card.jpg",
			navbar: {
				title: "Nic Lehman",
				logo: {
					alt: "Docusaurus site logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "docSidebar",
						sidebarId: "tutorialSidebar",
						position: "left",
						label: "Projects",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/wisconic",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						label: "Projects",
						to: "/docs/hello",
					},
					{
						label: "Blog",
						to: "/blog",
					},
					{
						label: "GitHub",
						href: "https://github.com/wisconic",
					},
					{
						label: "LinkedIn",
						href: "https://linkedin.com/in/niclehman",
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Nic Lehman. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.oneLight,
				darkTheme: prismThemes.oneDark,
			},
		}),
};

export default config;
