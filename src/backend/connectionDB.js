const mongoose = require('mongoose');

//Connect to the DB.
function connect() {
	mongoose
		.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
		.then(() => {
			console.log('Conectado a la BD satisfactoriamente.');
		})
		.catch(err => console.log(err));
}
function close() {
	mongoose.connection.close();
}

module.exports = {
	connect: connect,
	close: close,
};
