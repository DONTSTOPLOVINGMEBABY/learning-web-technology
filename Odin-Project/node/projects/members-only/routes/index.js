const express = require('express')
const router = express.Router()

const initController = require("../controllers/init")

console.log(initController.launch)

router.get("/", initController.launch)

module.exports = router