const express = require("express")
const router = express.Router()

const ingredientsDB = require("../../data/ingredients/ingredients_db")

router.get("/", (req, res) => {
  ingredientsDB
    .getIngredients()
    .then(ingredients => res.status(200).json(ingredients))
    .catch(err => {
      res
        .status(500)
        .json({ error: "The ingredients information could not be retrieved." })
    })
})

router.post("/", (req, res) => {
  const { ingredient_name } = req.body
  if (!ingredient_name)
    res
      .status(400)
      .json({ errorMessage: "Please provide name for the ingredient." })
  else
    ingredientsDB
      .addIngredient({ ingredient_name: ingredient_name })
      .then(ingredientId => res.status(201).json(ingredientId))
      .catch(err =>
        res.status(500).json({
          error:
            "There was an error while saving the ingredient to the database"
        })
      )
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  ingredientsDB
    .getIngredient(id)
    .then(ingredient => {
      if (ingredient) res.status(200).json(ingredient)
      else
        res.status(400).json({
          errorMessage: "Please provide a valid id for the ingredient."
        })
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The ingredient information could not be retrieved." })
    )
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  ingredientsDB
    .remove(id)
    .then(count => {
      if (count > 0) res.status(200).json(count)
      else
        res
          .status(400)
          .json({ errorMessage: "Please provide a valid ingredient id." })
    })
    .catch(err =>
      res
        .status(500)
        .json({
          error: "The ingredient could not be removed from the database."
        })
    )
})

router.put("/:id", (req, res) => {
  const { id } = req.params
  const { ingredient_name } = req.body
  if (!ingredient_name)
    res
      .status(400)
      .json({ errorMessage: "Please provide name for the ingredient." })
  else
    ingredientsDB
      .update(id, { ingredient_name: ingredient_name })
      .then(count => res.status(201).json(count))
      .catch(err =>
        res.status(500).json({
          error:
            "There was an error while updating the ingredient in the database"
        })
      )
})

module.exports = router
