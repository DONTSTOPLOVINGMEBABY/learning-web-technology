const express = require('express')
const router = express.Router() 
const {ensureAuthenticated, forwardAuthenticated, forwardIsUser} = require("../.config/auth")

const messages_controller = require('../controllers/messages')

router.get("/", ensureAuthenticated, messages_controller.launch)

router.get("/welcome", forwardIsUser, messages_controller.get_welcome)

module.exports = router