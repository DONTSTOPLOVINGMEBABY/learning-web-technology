const express = require('express')
const router = express.Router() 
const articles_controller = require('../controllers/articles-controller')

router.get('/', articles_controller.GET_Homepage)

router.get('/articles/:id', articles_controller.GET_Article)

router.get('/authors/:name', articles_controller.GET_Author)

router.get('/category/:category', articles_controller.GET_Category)

module.exports = router