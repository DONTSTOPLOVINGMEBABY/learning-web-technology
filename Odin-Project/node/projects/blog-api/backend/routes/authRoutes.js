const express = require('express')
const router = express.Router() 
const login_controller = require('../controllers/signup-login-controller')

router.post("/login", login_controller.POST_login)

router.post("/signup", login_controller.POST_sign_up)

module.exports = router