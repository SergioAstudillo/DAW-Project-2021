module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			scale: {
				25: '.25',
			},
			colors: {
				custom: {
					darkEnf: '#f48ca0',
				},
			},
			fontFamily: {
				nunito: ['Nunito', 'sans-serif'],
				josefin: ['Josefin Sans', 'sans-serif'],
			},
			height: {
				almostFull: '90vh',
			},
			padding: {
				half: '15%',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('./src/tailwindPlugins/hamburgerMenu'), require('./src/tailwindPlugins/text-shadow')],
};
