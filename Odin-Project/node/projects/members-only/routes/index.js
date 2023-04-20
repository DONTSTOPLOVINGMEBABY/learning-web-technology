const express = require('express')
const router = express.Router()

const login_signup = require("../controllers/login-signup")
const users = require("../controllers/users")
const messages = require("../controllers/messages")

router.get("/", login_signup.launch)

router.get("/login", login_signup.GET_sign_in)

router.get("/signup", login_signup.GET_sign_up)

router.post("/signup", login_signup.POST_sign_up)

module.exports = router