/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
		"./node_modules/preline/dist/*.js"],

	theme: {
		extend: {}
	},

	plugins: [
		require('preline/plugin')
	],
	darkMode: 'class',
};

module.exports = config;
