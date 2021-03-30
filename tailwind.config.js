module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			scale: {
				25: '.25',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('./src/tailwindPlugins/hamburgerMenu')],
};
