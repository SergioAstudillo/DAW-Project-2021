const express = require('express');
const mongoose = require('mongoose');
const newsletterModel = require('../models/newsletter');

const router = express.Router();

router.get('/get', (req, res) => {
	newsletterModel
		.find({})
		.then(result => {
			console.log(`Suscriptores encontrados en la BD: \n${result}`);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
});

//router.get('/:id', newsletterController.findByID);
router.post('/add', (req, res) => {
	const newsletter = new newsletterModel({
		email: req.body.email,
		subscribed: true,
	});
	newsletter
		.save()
		.then(result => {
			console.log(`Suscriptor almacenado en la BD: \n${result}`);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
