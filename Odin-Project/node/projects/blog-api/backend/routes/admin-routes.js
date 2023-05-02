const express = require('express')
const router = express.Router() 
const admin_controller = require('../controllers/admin-controller')


router.get("/", admin_controller.GET_ADMIN_HOME)

router.post("/create-article", admin_controller.POST_article)

router.post("/make-article-live/:id", admin_controller.POST_switch_article_status)

module.exports = router