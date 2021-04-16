const express = require('express');
const productsModel = require('../models/products');
const db = require('../connectionDB');

const router = express.Router();

const cors = require('cors');
const { corsOptions } = require('./cors');

router.get('/get', cors(corsOptions), (req, res) => {
	db.connect();
	productsModel
		.find({})
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
