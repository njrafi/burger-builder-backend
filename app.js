const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
var cors = require('cors')

require("dotenv").config();

const mongoDbUri = process.env.MONGO_DB_URI;
const app = express();
app.use(bodyParser.json());
app.use(cors())
const burgerRoutes = require("./routes/burger");

app.use("/", burgerRoutes);

app.use("/", (req, res, next) => {
	res.status(200).json({
		message: "Home page. Please Check documentation"
	})
});

app.use((error, req, res, next) => {
	console.log(error);
	const status = error.statusCode || 500;
	const message = error.message || "Bad Request";
	const errorData = error.data || "Bad Request";
	res.status(status).json({
		message: message,
		errorData: errorData,
	});
});

mongoose
	.connect(mongoDbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		const port = parseInt(process.env.PORT) || 4000;
		console.log("connected to mongoDb Database");
		console.log(`Server started at port ${port}`);
		app.listen(port);
	})
	.catch((err) => console.log(err));
