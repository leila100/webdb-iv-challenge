const express = require("express")
const router = express.Router()

const dishesDB = require("../../data/dishes/dishes_db")

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
  else
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
      if (dish) res.status(200).json(dish)
      else
        res.status(400).json({
          errorMessage: "Please provide a valid id for the dish."
        })
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The dish information could not be retrieved." })
    )
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  dishesDB
    .remove(id)
    .then(count => {
      if (count > 0) res.status(200).json(count)
      else
        res
          .status(400)
          .json({ errorMessage: "Please provide a valid dish id." })
    })
    .catch(err =>
      res
        .status(500)
        .json({ error: "The dish could not be removed from the database." })
    )
})

router.put("/:id", (req, res) => {
  const { id } = req.params
  const { dish_name } = req.body
  if (!dish_name)
    res.status(400).json({ errorMessage: "Please provide name for the dish." })
  else
    dishesDB
      .update(id, { dish_name: dish_name })
      .then(count => res.status(201).json(count))
      .catch(err =>
        res.status(500).json({
          error: "There was an error while updating the dish in the database"
        })
      )
})

module.exports = router
