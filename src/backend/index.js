//Import express and dotenv.
const express = require('express');
const app = express();
require('dotenv').config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
