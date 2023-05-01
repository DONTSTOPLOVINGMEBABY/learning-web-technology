const express = require('express')
const router = express.Router() 
const articles_controller = require('../controllers/articles-controller')

router.get('/', articles_controller.GET_Homepage)

module.exports = router