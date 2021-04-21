//Import express, dotenv and cors.
const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');

//Use the integrated bodyParser to retrieve info from req.body in POST requests.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Use CORS to restrict the requests to the API to a single domain (localhost:3000).
app.use(cors());

/* Starts the server and listen for changes. */
app.listen(process.env.BACKEND_PORT, () => {
	console.log(`Server running on port: ${process.env.BACKEND_PORT}`);
});

//Import the API for each collection.
const peopleAPI = require('./api/people');
const newsletterAPI = require('./api/newsletter');
const productsAPI = require('./api/products');

//Use the APIs imported previously.
app.use('/api/people', peopleAPI);
app.use('/api/newsletter', newsletterAPI);
app.use('/api/products', productsAPI);
