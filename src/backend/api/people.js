const express = require('express');
const mongoose = require('mongoose');
const peopleModel = require('../models/people');

const router = express.Router();

router.get('/get', (req, res) => {
	peopleModel
		.find({})
		.then(result => {
			console.log(`Personas encontradas en la BD: \n${result}`);
			res.json(result);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
});

//router.get('/:id', newsletterController.findByID);
/* router.post('/add', (req, res) => {
	const people = new peopleModel({
		name: req.body.name,
		description: req.body.description,
		instagram: req.body.instagram,
		picture: req.body.picture,
		surname: req.body.surname,
	});
	people
		.save()
		.then(result => {
			console.log(`Persona almacenada en la BD: \n  ${result}`);
            res.json(result);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
}); */

module.exports = router;
