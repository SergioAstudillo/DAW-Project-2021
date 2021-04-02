const express = require('express');
const mongoose = require('mongoose');
const newsletterModel = require('../models/newsletter');
const db = require('../connectionDB');

const router = express.Router();

const cors = require('cors');
const { corsOptions } = require('./cors');

router.get('/get', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.find({})
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

router.post('/add', cors(corsOptions), (req, res) => {
	db.connect();
	const newsletter = new newsletterModel({
		email: req.body.email,
		subscribed: true,
	});
	newsletter
		.save()
		.then(result => {
			console.log(`Suscriptor almacenado en la BD: \n${result}`);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
