const express = require("express");
//const { body } = require("express-validator");
const router = express.Router();
const burgerController = require("../controllers/burger");

router.get("/ingredients", burgerController.getIngredients);


module.exports = router
