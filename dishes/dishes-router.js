const express = require("express")
const router = express.Router()

const dishesDB = require("../data/dishes/dishes_db")

router.get("/", (req, res) => {
  dishesDB
    .getDishes()
    .then(dishes => res.status(200).json(dishes))
    .catch(err => {
      res
        .status(500)
        .json({ error: "The dishes information could not be retrieved." })
    })
})

router.post("/", (req, res) => {
  const { dish_name } = req.body
  if (!dish_name)
    res.status(400).json({ errorMessage: "Please provide name for the dish." })
  dishesDB
    .addDish({ dish_name: dish_name })
    .then(dishId => res.status(201).json(dishId))
    .catch(err =>
      res.status(500).json({
        error: "There was an error while saving the dish to the database"
      })
    )
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  dishesDB
    .getDish(id)
    .then(dish => {
      res.status(200).json(dish)
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The dish information could not be retrieved." })
    )
})
module.exports = router
