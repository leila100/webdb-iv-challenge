const express = require("express")
const router = express.Router()

const recipesDB = require("../../data/recipes/recipes_db")
const dishesDB = require("../../data/dishes/dishes_db")

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
      errorMessage: "Please provide a title and a dish id for the recipe."
    })
  else {
    //check that dish_id is valid
    dishesDB
      .getDish(dish_id)
      .then(dish => {
        recipesDB
          .addRecipe(req.body)
          .then(recipeId => res.status(201).json(recipeId))
          .catch(err =>
            res.status(500).json({
              error:
                "There was an error while saving the recipe to the database"
            })
          )
      })
      .catch(err =>
        res.status(400).json({
          errorMessage: "Please provide a valid dish_id"
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
      res.status(500).json({
        error: "The shopping list information could not be retrieved."
      })
    )
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  recipesDB
    .remove(id)
    .then(count => {
      if (count > 0) res.status(200).json(count)
      else
        res
          .status(400)
          .json({ errorMessage: "Please provide a valid recipe id." })
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The recipe could not be removed from the database." })
    )
})

router.put("/:id", (req, res) => {
  const { id } = req.params
  const { title, dish_id } = req.body
  if (!title || !dish_id)
    res.status(400).json({
      errorMessage: "Please provide a title and a dish id for the recipe."
    })
  else {
    //check that dish_id is valid
    dishesDB
      .getDish(dish_id)
      .then(dish => {
        recipesDB
          .update(id, req.body)
          .then(count => res.status(201).json(count))
          .catch(err =>
            res.status(500).json({
              error:
                "There was an error while updating the recipe in the database"
            })
          )
      })
      .catch(err =>
        res.status(400).json({
          errorMessage: "Please provide a valid dish_id"
        })
      )
  }
})

module.exports = router
