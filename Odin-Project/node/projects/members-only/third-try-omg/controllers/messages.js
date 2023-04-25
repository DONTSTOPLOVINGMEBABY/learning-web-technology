const User = require("../models/users")
const {body, validationResult} = require('express-validator')



exports.launch = async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.send("error")
        console.log(error)
    }
}

exports.get_welcome = async (req, res) => {
    try {
        res.render("welcome")
    } catch (error) {
        res.render("error")
        console.log(error)
    }
}


exports.post_welcome = async(req, res) => {
    try {
        await body("secret", "INCORRECT")
            .trim()
            .escape()
            .run(req)
        const errors = validationResult(req)
        if (!errors.isEmpty()){
            res.render("welcome", {
                error : "Incorrect Secret"
            })
        }
        else {
            let user = await User.findById(req.user._conditions._id)
            user.isMember = true 
            await user.save()
            res.redirect("/")
        }
        
    } catch (error) {
        res.redirect("/auth/login")
    }
}

 