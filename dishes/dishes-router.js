const express = require("express")
const router = express.Router()

const dishesDB = require("../data/dishes/dishes_db")

router.get("/", (req, res) => {
  dishesDB
    .getDishes()
    .then(dishes => {
      res.status(200).json(dishes)
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: "The dishes information could not be retrieved." })
    })
})

module.exports = router
