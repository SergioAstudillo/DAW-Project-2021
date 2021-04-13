const express = require('express');
const newsletterModel = require('../models/newsletter');
const db = require('../connectionDB');

const router = express.Router();

const cors = require('cors');
const { corsOptions, whitelist } = require('./cors');

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

router.get('/get/:email', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.findOne({ email: req.params.email })
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

router.post('/add', cors(corsOptions), (req, res) => {
	db.connect();
	const { email, name, surname } = req.body;
	const newsletter = new newsletterModel({
		email: email,
		name: name,
		surname: surname,
		subscribed: true,
		verified: false,
	});
	newsletter
		.save()
		.then(result => {
			db.close();
			//res.json(result);
		})
		.catch(err => console.error(err));
});

router.delete('/delete/:id', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.deleteOne({ id: req.params.id })
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
