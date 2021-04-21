const mongoose = require('mongoose');

//Connect to the DB.
function connect() {
	mongoose
		.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
		.then(() => {
			console.log('Connected to DB.');
		})
		.catch(err => console.log(err));
}
//Close the connection with the DB.
function close() {
	mongoose.connection.close();
	console.log('Connection closed.');
}

module.exports = {
	connect: connect,
	close: close,
};
