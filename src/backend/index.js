//Import express and dotenv.
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

//Use the integrated bodyParser to retrieve info from req.body in POST requests.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const { corsOptions, whitelist } = require('./api/cors');

/* app.use(function (req, res, next) {
	let origin = req.headers.origin;
	if (whitelist.includes(origin)) {
		console.log(res.header('Access-Control-Allow-Origin', origin));
		res.header('Access-Control-Allow-Origin', origin);
	}
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
}); */
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});

/* Starts the server and listen for changes. */
app.listen(process.env.BACKEND_PORT, () => {
	console.log(`Servidor corriendo en el puerto ${process.env.BACKEND_PORT}`);
});

//Import the API for each collection.
const peopleAPI = require('./api/people');
const newsletterAPI = require('./api/newsletter');
const productsAPI = require('./api/products');

//Use the APIs imported previously.
app.use('/api/people', peopleAPI);
app.use('/api/newsletter', newsletterAPI);
app.use('/api/products', productsAPI);
