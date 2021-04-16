const express = require('express');
const peopleModel = require('../models/people');
const db = require('../connectionDB');

const router = express.Router();

const cors = require('cors');
const { corsOptions } = require('./cors');

router.get('/get', cors(corsOptions), (req, res) => {
	db.connect();
	peopleModel
		.find({})
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
