exports.getIngredients = (req,res,next) => {
    console.log("Getting Ingredients")

    res.status(200).json({
        salad: 0,
        bacon: 0,
        meat: 0,
        cheese: 0
    })
}

