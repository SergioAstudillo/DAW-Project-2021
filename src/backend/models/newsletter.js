const mongoose = require('mongoose');
const NewsletterSchema = new mongoose.Schema(
	{
		email: { type: String, required: true },
		subscribed: { type: Boolean, required: false },
	},
	{
		collection: 'newsletter',
	},
);

/* Sets the ._id of the returned object (NOT the one in the DB) to .id and then deletes that property with the "__v" one too. */
NewsletterSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const model = mongoose.model('newsletter', NewsletterSchema);

module.exports = model;
