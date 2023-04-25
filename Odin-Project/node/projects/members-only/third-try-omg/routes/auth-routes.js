const express = require('express')
const router = express.Router() 
const bcrypt = require('bcrypt')
const passport = require('passport')
const {checkLoggedIn, hasAccount} = require("../.config/auth")



const signup_login = require("../controllers/signup-login")

router.get('/login', checkLoggedIn, signup_login.GET_sign_in)

router.post('/login', checkLoggedIn, signup_login.POST_sign_in)

router.get('/signup', checkLoggedIn, signup_login.GET_sign_up)

router.post('/signup', checkLoggedIn, signup_login.POST_sign_up)

router.get('/logout', hasAccount, (req, res) => {
    req.logout()
    res.redirect('/users/login')
})

// Fix bug where users can access login and signup while being logged in 
// 

module.exports = router