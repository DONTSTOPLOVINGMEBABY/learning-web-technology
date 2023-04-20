const {body, validationResult} = require('express-validator')
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs")
const User = require("../models/users")

exports.launch = async (req, res) => {
    try {
        res.render("index")
    } catch (error) {
        res.send("error")
        console.log(error)
    }
}

exports.GET_sign_in = async (req, res) => {
    res.render("login")
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
            .isLength({ min: 8 })
            .escape()
            .run(req)
        await body ("confirm_password", "Password must be 8 characters long")
            .trim()
            .isLength({ min: 8 })
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
                bcrypt.hash(newUser.password, 10, async (err, hashedPassword) => {
                    if (err){next(err)}
                    newUser.password = hashedPassword
                    await newUser.save()
                })
                res.render("signup")
            } catch (error) {
                console.log(error)
                res.render("error")
            }
        }
    } catch (error) {
        console.log(error)
        res.render("error")
    }
}