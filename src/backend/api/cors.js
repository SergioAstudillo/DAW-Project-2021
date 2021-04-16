require('dotenv').config();

const whitelist = [
	'http://localhost:3000',
	'http://localhost:3000/',
	'http://localhost:3000/personas',
	'http://localhost:3000/productos',
	'http://localhost:3000/newsletter',
	'http://localhost:3000/newsletterVerified',
	'http://localhost:3000/newsletterUnsubscribe',
];

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
