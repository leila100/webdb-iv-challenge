const express = require("express")
const helmet = require("helmet")
const logger = require("morgan")

const dishesRouter = require("./dishes/dishes-router")

const server = express()

server.use(express.json())
server.use(helmet())
server.use(logger("dev"))

server.use("/api/dishes", dishesRouter)

server.get("/", (req, res) => {
  res.status(200).json("Welcome to -- WHAT'S FOR DINNER? -- ")
})

module.exports = server
