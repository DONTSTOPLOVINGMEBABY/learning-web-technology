const express = require('express')
const router = express.Router() 
const admin_controller = require('../controllers/admin-controller')
const articles_controller = require('../controllers/articles-controller')
const {authenticate_jwt} = require('../.config/jwt-middleware')




router.get("/home", authenticate_jwt , admin_controller.GET_ADMIN_HOME)

router.post("/create-article", authenticate_jwt, admin_controller.POST_article)

router.post("/make-article-live/:id", authenticate_jwt, admin_controller.POST_switch_article_status)

router.post('/login', admin_controller.POST_login_admin)

router.get('/articles/:id', authenticate_jwt, admin_controller.GET_article)

router.get('/get_tiny_key', authenticate_jwt, admin_controller.GET_tiny_key)

router.get('/verify', authenticate_jwt, admin_controller.verify_jwt)

module.exports = router