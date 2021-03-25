const mongoose = require('mongoose');
const ProductSchema = new mongoose.Schema(
	{
		title: { type: String, required: true },
		description: { type: String, required: true },
		flavor: { type: String, required: false },
		price: { type: Number, required: true },
		img: { type: String, required: false },
	},
	{
		collection: 'products',
	},
);

/* Sets the ._id of the returned object (NOT the one in the DB) to .id and then deletes that property with the "__v" one too. */
ProductSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id;
		delete returnedObject._id;
		delete returnedObject.__v;
	},
});

const model = mongoose.model('products', ProductSchema);

module.exports = model;
