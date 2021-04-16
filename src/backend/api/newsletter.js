const express = require('express');
const newsletterModel = require('../models/newsletter');
const db = require('../connectionDB');

/* Nodemailer dependencies. */
const firstEmail = require('./../nodemailer/verification');
const verifiedUser = require('./../nodemailer/verifiedUser');

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
	let newUserID;
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
			newUserID = result._id;
			db.close();
			//res.json(result);
		})
		.catch(err => console.error(err));
	function waitForNewUserID() {
		if (typeof newUserID !== 'undefined' && newUserID !== '') {
			firstEmail(email, '¡Bienvenido! (correo de verificación)', newUserID, name, surname, '../nodemailer/views/verification.html');
		} else {
			setTimeout(waitForNewUserID, 250);
		}
	}
	waitForNewUserID();
});

router.put('/verify/:id', cors(corsOptions), (req, res) => {
	db.connect();
	let updatedUser;
	newsletterModel
		.findByIdAndUpdate({ _id: req.params.id }, { verified: true })
		.then(result => {
			res.json(result);
			updatedUser = result;
			db.close();
		})
		.catch(err => console.error(err));

	function waitForUpdatedUser() {
		if (updatedUser) {
			verifiedUser(updatedUser.email, '¡Su correo ha sido verificado!', updatedUser.id, updatedUser.name, updatedUser.surname, '../nodemailer/views/verifiedUser.html');
		} else {
			setTimeout(waitForUpdatedUser, 250);
		}
	}
	waitForUpdatedUser();
});

router.delete('/delete/:id', cors(corsOptions), (req, res) => {
	db.connect();
	newsletterModel
		.findByIdAndRemove({ _id: req.params.id })
		.then(result => {
			res.json(result);
			db.close();
		})
		.catch(err => console.error(err));
});

module.exports = router;
