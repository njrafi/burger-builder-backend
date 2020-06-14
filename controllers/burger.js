const Ingredient = require("../models/ingredient");
const Order = require("../models/order");

exports.getIngredients = async (req, res, next) => {
	console.log("Getting Ingredients");
	try {
		const ingredients = await Ingredient.find();
		const responseJson = {};
		for (let ingredient of ingredients)
			responseJson[ingredient.name] = ingredient.quantity;
		res.status(200).json(responseJson);
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
		return err;
	}
};

exports.getOrders = async (req, res, next) => {
	console.log("Getting Orders");
	try {
		const orders = await Order.find();
		res.status(200).json(orders);
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
		return err;
	}
};

exports.postOrder = async (req, res, next) => {
	console.log("Posting Order");
	const order = new Order({
		ingredients: req.body.ingredients,
		price: req.body.price,
		customer: req.body.customer,
	});
	try {
		await order.save();
		res.status(200).json(order);
	} catch (err) {
		if (!err.statusCode) {
			err.statusCode = 500;
		}
		next(err);
		return err;
	}
};
