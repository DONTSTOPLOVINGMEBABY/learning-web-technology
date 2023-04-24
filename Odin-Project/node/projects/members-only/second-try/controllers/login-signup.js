const {body, validationResult} = require('express-validator')
const passport = require("passport");
const bcrypt = require("bcrypt")
const User = require("../models/users")

exports.launch = async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.send("error")
        console.log(error)
    }
}

exports.GET_welcome = async (req, res) => {
    try {
        res.render("welcome")
    } catch (error) {
        res.render("error")
        console.log(error)
    }
}


exports.GET_sign_in = async (req, res) => {
    res.render("login")
}

exports.POST_sign_in = passport.authenticate('local', {
    successRedirect : '/', 
    failureRedirect: '/login', 
    failureFlash: true, 
})

exports.GET_sign_up = async (req, res) => {
    res.render("signup")
}

exports.POST_sign_up = async (req, res) => {
    try {
        await body("firstName", "You must enter a valid first name")
            .trim()
            .isLength({ min: 1 })
            .escape()
            .run(req)
        await body("lastName", "You must enter a valid last name")
            .trim()
            .isLength({ min: 1 })
            .escape()
            .run(req)
        await body("email", "You must enter a valid email")
            .trim()
            .escape()
            .isLength({ min: 1 })
            .run(req)
        await body("username", "You must enter a valid username")
            .trim()
            .isLength({ min: 1 })
            .escape()
            .run(req)
        await body ("password", "Password must be 8 characters long")
            .trim()
            .isLength({ min: 1 })
            .escape()
            .run(req)
        await body ("confirm_password", "Password must be 8 characters long")
            .trim()
            .isLength({ min: 1 })
            .escape()
            .run(req)

        const errors = validationResult(req)
        const newUser = new User({
            firstName : req.body.firstName, 
            lastName : req.body.lastName, 
            username: req.body.username, 
            password: req.body.password, 
            email: req.body.email, 
            isMember : false
        })
        if (!errors.isEmpty()){
            let error_object = errors.array().reduce((acc, error) => {
                acc[error.path] = error;
                return acc;
            }, {})
            res.render("signup", {
                data : {
                    error: error_object, 
                    newUser : newUser, 
                }
            })
        }
        else {
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                newUser.password = hashedPassword 
                await newUser.save()
                res.render("login")
            } catch (error) {
                res.redirect("/signup")
            }
        }
    } catch (error) {
        console.log(error)
        res.render("error")
    }
}