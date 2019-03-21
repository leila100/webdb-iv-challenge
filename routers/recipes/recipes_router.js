const express = require("express")
const router = express.Router()

const recipesDB = require("../../data/recipes/recipes_db")

router.get("/", (req, res) => {
  recipesDB
    .getRecipes()
    .then(recipes => res.status(200).json(recipes))
    .catch(err => {
      res
        .status(500)
        .json({ error: "The recipes information could not be retrieved." })
    })
})

router.post("/", (req, res) => {
  const { title, dish_id } = req.body
  if (!title || !dish_id)
    res.status(400).json({
      errorMessage: "Please provide a title and a dish id for the dish."
    })
  else {
    recipesDB
      .addRecipe(req.body)
      .then(recipeId => res.status(201).json(recipeId))
      .catch(err =>
        res.status(500).json({
          error: "There was an error while saving the recipe to the database"
        })
      )
  }
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  recipesDB
    .getRecipe(id)
    .then(recipe => {
      if (recipe) res.status(200).json(recipe)
      else
        res
          .status(400)
          .json({ errorMessage: "Please provide a valid recipe id." })
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The recipe information could not be retrieved." })
    )
})

router.get("/:id/shoppingList", (req, res) => {
  const { id } = req.params
  recipesDB
    .getShoppingList(id)
    .then(list => {
      if (list) res.status(200).json(list)
      else
        res
          .status(400)
          .json({ errorMessage: "Please provide a valid recipe id." })
    })
    .catch(err =>
      res
        .status(500)
        .json({
          error: "The shopping list information could not be retrieved."
        })
    )
})

module.exports = router
