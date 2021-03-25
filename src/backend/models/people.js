const mongoose = require('mongoose');
const PeopleSchema = new mongoose.Schema(
	{
		name: { type: String, required: true },
		description: { type: String, required: false },
		instagram: { type: String, required: false },
		picture: { type: String, required: true },
		surname: { type: String, required: true },
	},
	{
		collection: 'people',
	},
);

/* Sets the ._id of the returned object (NOT the one in the DB) to .id and then deletes that property with the "__v" one too. */
PeopleSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const model = mongoose.model('people', PeopleSchema);

module.exports = model;
