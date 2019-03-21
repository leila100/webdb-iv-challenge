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

module.exports = router
