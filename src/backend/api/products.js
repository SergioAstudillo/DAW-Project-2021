const express = require('express');
const mongoose = require('mongoose');
const productsModel = require('../models/products');

const router = express.Router();

router.get('/get', (req, res) => {
	productsModel
		.find({})
		.then(result => {
			console.log(`Productos encontrados en la BD: \n${result}`);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
});

//router.get('/:id', newsletterController.findByID);
router.post('/add', (req, res) => {
	const product = new productsModel({
		title: req.body.title,
		description: req.body.description,
		flavor: req.body.flavor,
		price: req.body.price,
	});
	product
		.save()
		.then(result => {
			console.log(`Producto almacenado en la BD: \n${result}`);
			mongoose.connection.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
