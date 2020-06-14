const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	ingredients: {
		type: Schema.Types.Mixed,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	customer: {
		type: Schema.Types.Mixed,
		required: true,
	}
});

module.exports = mongoose.model("Order", orderSchema);