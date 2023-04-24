const express = require('express')
const router = express.Router()

const login_signup = require("../controllers/login-signup")
const users = require("../controllers/users")
const messages = require("../controllers/messages")

router.get("/", login_signup.launch)

router.get("/welcome", login_signup.GET_welcome)


module.exports = router