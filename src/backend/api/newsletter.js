const express = require('express');
const newsletterModel = require('../models/newsletter');
const db = require('../connectionDB');

/* Nodemailer dependencies. */
const sendEmail = require('./../nodemailer/verification');

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

router.post('/add', cors(corsOptions), (req, res) => {
	db.connect();
	const { email, name, surname } = req.body;
	let creationID;
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
			creationID = result._id;
			//res.json(result);
		})
		.catch(err => console.error(err));
	/* Waits until the variable ID is set on the line 49. */
	function waitForElement() {
		if (typeof creationID !== 'undefined') {
			sendEmail(email, '¡Bienvenido! (correo de verificación)', creationID, name, surname, '../nodemailer/views/verification.html');
		} else {
			setTimeout(waitForElement, 250);
		}
	}
	waitForElement();
});

router.put('/verify/:id', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.findByIdAndUpdate({ id: req.params.id }, { verified: true })
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

router.delete('/delete/:id', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.findByIdAndRemove({ id: req.params.id })
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
