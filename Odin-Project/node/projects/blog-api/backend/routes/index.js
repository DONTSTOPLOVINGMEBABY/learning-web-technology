const express = require('express')
const router = express.Router() 
const articles_controller = require('../controllers/articles-controller')

router.get('/', articles_controller.GET_Homepage)

router.get('/articles/:id', articles_controller.GET_Article)

router.get('/authors/:name', articles_controller.GET_Author)

module.exports = router