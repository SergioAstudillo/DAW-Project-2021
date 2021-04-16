require('dotenv').config();

const whitelist = ['http://localhost:3000/', 'http://localhost:3000/personas', 'http://localhost:3000/productos', 'http://localhost:3000/newsletter', 'http://localhost:3000/newsletterVerified', 'http://localhost:3000/newsletterUnsubscribe'];

const corsOptions = {
	origin: 'http://localhost:3000',
	methods: ['GET', 'POST', 'PUT', 'DELETE'],
	optionsSuccessStatus: 200,
};

module.exports = {
	whitelist: whitelist,
	corsOptions: corsOptions,
};
