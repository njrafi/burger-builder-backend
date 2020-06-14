const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const mongoDbUri = process.env.MONGO_DB_URI;
const app = express();

app.use(bodyParser.json());

mongoose
	.connect(mongoDbUri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then((result) => {
		console.log("connected to mongoDb Database");
		console.log("server started at port " + process.env.PORT || 3000);
		app.listen(process.env.PORT || 3000);
	})
	.catch((err) => console.log(err));