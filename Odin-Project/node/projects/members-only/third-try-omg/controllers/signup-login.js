const {body, validationResult} = require('express-validator')
const passport = require('passport')
const User = require('../models/users')
const bcrypt = require("bcrypt")

exports.GET_sign_in = async (req, res) => {
    res.render("login")
}

exports.POST_sign_in = async (req, res, next) => {
    passport.authenticate( 'local', {
        successRedirect : '/welcome', 
        failureRedirect: '/auth/login', 
        failureFlash: false
    })(req, res, next); 
}

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
            .isLength({ min: 2 })
            .escape()
            .run(req)
        await body ("confirm_password", "Password must be 8 characters long")
            .trim()
            .isLength({ min: 2 })
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
            console.log("hello")
            try {
                const hashedPassword = await bcrypt.hash(req.body.password, 10)
                newUser.password = hashedPassword 
                console.log(hashedPassword)
                console.log(newUser)
                newUser.save()
                res.redirect("login")
            } catch (error) {
                res.redirect("/auth/signup")
            }
        }
    } catch (error) {
        console.log(error)
        res.render("error")
    }
}