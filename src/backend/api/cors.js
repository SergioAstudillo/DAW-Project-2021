require('dotenv').config();

const whitelist = [process.env.MAIN_URL_FRONT, process.env.PEOPLE_URL_FRONT, process.env.NEWSLETTER_URL_FRONT, process.env.PRODUCTS_URL_FRONT];
const corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1) {
			callback(null, true);
		} else {
			callback(new Error('Not allowed by CORS'));
		}
	},
	methods: 'GET, POST, PUT, DELETE',
	optionsSuccessStatus: 200,
};

module.exports = {
	whitelist: whitelist,
	corsOptions: corsOptions,
};
