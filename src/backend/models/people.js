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

const model = mongoose.model('people', PeopleSchema);

module.exports = model;
