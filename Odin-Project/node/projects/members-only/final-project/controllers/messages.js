const User = require("../models/users")
const Message = require("../models/messages")
const {body, validationResult} = require('express-validator')



exports.launch = async (req, res) => {
    try {
        const query = await Message.find()
            .sort({ uploadDate : -1 })
            .exec()
        res.render("index", {
            data : {
                documents : query, 
                signed_in : req.isAuthenticated()
            }
        })
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
            let user = await User.findById(req.user.id)
            user.isMember = true 
            await user.save()
            res.redirect("/")
        }
        
    } catch (error) {
        res.redirect("/auth/login")
    }
}

exports.get_create_message = async (req, res) => {
    try {
        res.render("create-a-message")
    } catch (error) {
        res.render("login")
    }
}

exports.post_create_message = async (req, res) => {
    try {
        await body("message_title", "Title can't be longer than 100 characters")
            .trim()
            .isLength({ max : 100 })
            .escape()
            .run(req)
        await body("message_description", "Description can't be longer than 5000 characters")
            .trim()
            .isLength({ max : 5000 })
            .escape()
            .run(req)
        const errors = validationResult(req)
        const newMessage = new Message({
            title : req.body.message_title, 
            content : req.body.message_description, 
            uploadDate : new Date(), 
            author : req.user.username, 
        })
        if (!errors.isEmpty()){
            let error_object = errors.array().reduce((acc, error) => {
                acc[error.path] = error;
                return acc;
            }, {})
            res.render("create-a-message", {
                data : {
                    message : newMessage, 
                    errors: error_object, 
                }
            })
        }
        else { 
            await newMessage.save()
            res.redirect("/")
        }

    } catch (error) {
        console.log(error)
        res.render("error")
    }
}

exports.getUserPosts = async (req, res, next) => {
    try {
        let fetchUser = await User.findOne({username: req.params.username}) 
        let messages = await Message.find(
            {author : req.params.username})
            .sort({uploadDate : -1})
            .exec() 
        console.log(messages)
        res.render("user-messages", {
            data : {
                userData : fetchUser, 
                messages : messages, 
            }
        })
    } catch (error) {

    }
}