const express = require('express')
const router = express.Router() 
const {hasAccount, checkNotAMember, checkisAMember} = require("../.config/auth")

const messages_controller = require('../controllers/messages')

router.get("/", hasAccount, checkNotAMember, messages_controller.launch)

router.get("/welcome", hasAccount, checkisAMember, messages_controller.get_welcome)

router.post("/welcome", messages_controller.post_welcome)

router.get("/create-a-message", hasAccount, checkNotAMember, messages_controller.get_create_message)

router.post("/create-a-message", hasAccount, checkNotAMember, messages_controller.post_create_message)

router.get('/logout', hasAccount, (req, res) => {
    req.logout((err) => {
        if (err) {console.log(err)}
        res.redirect("/auth/login")
    })
})

module.exports = router