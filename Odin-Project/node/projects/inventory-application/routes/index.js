const express = require('express')
const router = express.Router()

const drumsController = require("../controllers/drumsController")
const guitarsController = require("../controllers/guitarControllers")
const tamberineController = require("../controllers/tamberineController")
const categoriesController = require("../controllers/categoriesController")

router.get('/', categoriesController.index) 

router.get(`categories/:id`, categoriesController.show_products_in_categories)


module.exports = router