import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: "#1C274C",
				primary2: "#FF6F61",
				foreground: "#2C3A4B",
				accent: "#D8B26E",
				instate: "#2249A7",
				page: "var(--page-color, #FF6F61)"
			},
			boxShadow: {
				button: "10px 12px 45px 7px color-mix(in srgb, currentColor 50%, transparent)"
			},
			fontFamily: {
				sans: ['DM Sans Variable', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
