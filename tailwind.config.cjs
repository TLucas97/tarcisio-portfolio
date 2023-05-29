/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			small: '820px',
			tablet: '600px',
			extraSmall: '460px',
			extraSmall2: '320px'
		},
		extend: {
			colors: {
				'white-1': '#E3F4F4'
			}
		}
	},

	plugins: []
};

module.exports = config;
