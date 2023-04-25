const express = require('express')
const router = express.Router() 
const {hasAccount, checkNotAMember, checkisAMember} = require("../.config/auth")

const messages_controller = require('../controllers/messages')

router.get("/", hasAccount, checkNotAMember, messages_controller.launch)

router.get("/welcome", hasAccount, checkisAMember, messages_controller.get_welcome)

module.exports = router