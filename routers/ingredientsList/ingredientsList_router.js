const express = require("express")
const router = express.Router()

const ingredientsListDB = require("../../data/ingredientsList/ingredientsList_db")

router.post("/:id", (req, res) => {
  const { id } = req.params
  const { ingredient_id, qtyValue, qtyUnit } = req.body
  if (!ingredient_id || !qtyValue || !qtyUnit) {
    res.status(400).json({
      errorMessage:
        "Please provide an ingredient id and a quantity value and unit."
    })
  } else {
    ingredientsListDB
      .addIngredient(id, ingredient_id, qtyValue, qtyUnit)
      .then(count => res.status(200).json(count))
      .catch(err => {
        res.status(500).json({
          error:
            "The ingredient could not be added to the list of ingredients for this recipe."
        })
      })
  }
})

module.exports = router
