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
				tokioNight: {
					primary: '#003566',
					secondary: '#ffd60a',
					accent: '#00cdb8',
					neutral: '#001d3d',
					'base-100': '#001d3d'
				},
				tokio: {
					primary: '#003566',
					secondary: '#ffd60a',
					accent: '#00cdb8',
					neutral: '#001d3d',
					'base-100': '#eceff4'
				}
			}
		]
	},
	darkMode: 'class'
}
