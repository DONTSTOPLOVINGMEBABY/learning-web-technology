const express = require('express')
const router = express.Router()

const drumsController = require("../controllers/drumsController")
const guitarsController = require("../controllers/guitarControllers")
const tamberineController = require("../controllers/tamberineController")
const categoriesController = require("../controllers/categoriesController")

router.get('/', categoriesController.index) 

router.get(`/categories/:id`, categoriesController.show_products_in_categories)

router.get('/Drums', drumsController.get_all_drums)

router.get('/Guitars', guitarsController.get_all_guitars)

router.get('/Tamberines', tamberineController.get_all_tamberines)

router.get('/Drums/createDrum', drumsController.createNew)

router.post('/Drums/createDrum', drumsController.postUpdate)

router.get('/Tamberines/createTamberine', tamberineController.createNew)

router.post('/Tamberines/createTamberine', tamberineController.postUpdate)

router.get('/Guitars/createGuitars', guitarsController.createNew)

router.post('/Guitars/createGuitars', guitarsController.postUpdate)

router.get('/Drums/:id', drumsController.get_drum)

router.get('/Guitars/:id', guitarsController.get_guitar)

router.get('/Tamberines/:id', tamberineController.get_tamberine)

router.get('/Drums/:id/delete', drumsController.delete)

router.get('/Guitars/:id/delete', guitarsController.delete)

router.get('/Tamberines/:id/delete', tamberineController.delete)

router.get('/Drums/:id/update', drumsController.update)

router.post('/Drums/:id/update', drumsController.postUpdate)

router.get('/Tamberines/:id/update', tamberineController.update)

router.post('/Tamberines/:id/update', tamberineController.postUpdate)

// router.get('/Drums/:id/update', drumsController.update)

// router.post('/Drums/:id/update', drumsController.postUpdate)



module.exports = router