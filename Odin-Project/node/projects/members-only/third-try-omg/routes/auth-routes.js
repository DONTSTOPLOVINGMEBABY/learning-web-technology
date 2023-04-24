const express = require('express')
const router = express.Router() 
const bcrypt = require('bcrypt')
const passport = require('passport')

const signup_login = require("../controllers/signup-login")

router.get('/login', signup_login.GET_sign_in)

router.post('/login', signup_login.POST_sign_in)

router.get('/signup', signup_login.GET_sign_up)

router.post('/signup', signup_login.POST_sign_up)

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/users/login')
})

module.exports = router