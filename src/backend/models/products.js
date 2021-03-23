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

const model = mongoose.model('products', ProductSchema);

module.exports = model;
