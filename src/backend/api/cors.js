/* Import DOTENV here so it gets imported in the API */
require('dotenv').config();

/* Whitelisted URLs for CORS */
const whitelist = [
	'http://localhost:3000',
	'http://localhost:3000/',
	'http://localhost:3000/personas',
	'http://localhost:3000/productos',
	'http://localhost:3000/newsletter',
	'http://localhost:3000/newsletterVerified',
	'http://localhost:3000/newsletterUnsubscribe',
];

/* Set the origin, methods and optionsSuccessStatus on cors() */
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	optionsSuccessStatus: 200,
};

module.exports = {
	whitelist: whitelist,
	corsOptions: corsOptions,
};
