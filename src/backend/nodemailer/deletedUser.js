const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const path = require('path');

function deletedUser(email, subject, ID, name, userSurname, relativePath) {
	const filePath = path.join(__dirname, relativePath);
	const source = fs.readFileSync(filePath, 'utf-8').toString();
	const template = handlebars.compile(source);
	const replacements = {
		userID: ID,
		userEmail: email,
		userName: name,
		userSurname: userSurname,
	};
	const htmlToSend = template(replacements);
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASSWORD,
		},
		tls: {
			secureProtocol: 'TLSv1_method',
			rejectUnauthorized: false,
		},
	});
	const mailOptions = {
		from: process.env.EMAIL_USER,
		to: email,
		subject: subject,
		html: htmlToSend,
		context: replacements,
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log(`No se ha podido enviar el correo: ${error.message}`);
			console.log(`Error: ${error.stack}`);
		} else {
			console.log(`Se ha enviado el correo a la dirección: ${email} de forma satisfactoria.`);
		}
	});
}

module.exports = deletedUser;
