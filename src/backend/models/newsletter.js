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

const model = mongoose.model('newsletter', NewsletterSchema);

module.exports = model;
