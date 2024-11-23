/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts,md,svx}'],
	theme: {
		extend: {}
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		themes: [
			{
				tokio: {
					primary: '#003566',
					secondary: '#ffd60a',
					accent: '#00cdb8',
					neutral: '#001d3d',
					'base-100': '#ffffff'
				}
			}
		]
	},
	darkMode: 'class'
}
