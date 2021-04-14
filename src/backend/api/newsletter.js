const express = require('express');
const newsletterModel = require('../models/newsletter');
const db = require('../connectionDB');
const nodemailer = require('nodemailer');

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
			//res.json(result);
		})
		.catch(err => console.error(err));

	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 587,
		secure: false,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: 'Correo de verificación.',
		html: `
		<h1>Esto es una prueba</h1>
		`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			//OPTIONAL:res.status(500).send(error.message);
			console.log(`No se ha podido enviar el correo: ${error.message}`);
		} else {
			//OPTIONAL:res.status(200).jsonp(req.body);
			console.log(`Se ha enviado el correo a la dirección: ${req.body.email} de forma satisfactoria.`);
		}
	});
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
