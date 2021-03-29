const express = require('express');
const mongoose = require('mongoose');
const productsModel = require('../models/products');
const db = require('../connectionDB');

const router = express.Router();

router.get('/get', (req, res) => {
	db.connect();
	productsModel
		.find({})
		.then(result => {
			console.log(`Productos encontrados en la BD: \n${result}`);
			db.close();
		})
		.catch(err => console.error(err));
});

router.post('/add', (req, res) => {
	db.connect();
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
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;