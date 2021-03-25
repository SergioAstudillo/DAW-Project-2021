const express = require('express');
const mongoose = require('mongoose');
const peopleModel = require('../models/people');
const db = require('../connectionDB');

const router = express.Router();

router.get('/get', (req, res) => {
	db.connect();
	peopleModel
		.find({})
		.then(result => {
			console.log(`Personas encontradas en la BD: \n${result}`);
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
