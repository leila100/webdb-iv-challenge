const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")

const dishesRouter = require("./routers/dishes/dishes-router")
const recipesRouter = require("./routers/recipes/recipes_router")
const ingredientsRouter = require("./routers/ingredients/ingredients_router")
const ingredientsListRouter = require("./routers/ingredientsList/ingredientsList_router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(logger("dev"))

server.use("/api/dishes", dishesRouter)
server.use("/api/recipes", recipesRouter)
server.use("/api/ingredients", ingredientsRouter)
server.use("/api/ingredientsList", ingredientsListRouter)

server.get("/", (req, res) => {
  res.status(200).json("Welcome to -- WHAT'S FOR DINNER? -- ")
})

module.exports = server
