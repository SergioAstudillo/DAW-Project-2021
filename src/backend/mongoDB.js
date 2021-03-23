//Import mongoose, express and dotenv.
const mongoose = require('mongoose');
const express = require('express');
const app = express();
require('dotenv').config();

//Import the API for each collection.
const peopleAPI = require('./api/people');
const newsletterAPI = require('./api/newsletter');
const productsAPI = require('./api/products');

//Connect to the DB.
mongoose
	.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
	.then(() => {
		console.log('Conectado a la BD satisfactoriamente.');
		app.listen(3000, () => {
			console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
		});
	})
	.catch(err => console.log(err));

//Use the APIs imported previously.
app.use('/api/people', peopleAPI);
app.use('/api/newsletter', newsletterAPI);
app.use('/api/products', productsAPI);
