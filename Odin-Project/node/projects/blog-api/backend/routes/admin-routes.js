const express = require('express')
const router = express.Router() 
const admin_controller = require('../controllers/admin-controller')
const articles_controller = require('../controllers/articles-controller')
const {authenticate_jwt} = require('../.config/jwt-middleware')




router.get("/home", authenticate_jwt , admin_controller.GET_ADMIN_HOME)

router.post("/create-article", authenticate_jwt, admin_controller.POST_article)

router.post("/make-article-live/:id", authenticate_jwt, admin_controller.POST_switch_article_status)

router.post('/login', admin_controller.POST_login_admin)

router.get('/articles/:id', articles_controller.GET_Article)

module.exports = router