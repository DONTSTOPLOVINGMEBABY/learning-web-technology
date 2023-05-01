const User = require('../models/users')
const bcrypt = require('bcrypt')
const {body, validationResult} = require('express-validator')

exports.POST_login = async function (req, res, next) {
    res.send("hello")
}

exports.POST_sign_up = async function (req, res, next) {
    try {
        await body("firstName", "You must enter a valid first name").not().isEmpty().escape().run(req)
        await body("lastName", "You must enter a valid last name").not().isEmpty().escape().run(req)
        await body("email", "You must enter a valid email").not().isEmpty().escape().run(req)
        await body("password", "You must enter a valid password").not().isEmpty().escape().run(req)

        const newUser = new User({
            email: req.body.email, 
            name: `${req.body.firstName} ${req.body.lastName}`, 
            password: req.body.password, 
            comments: [], 
        })

        const errors = validationResult(req)
        if (!errors.isEmpty()){
            let errors_object = errors.array().reduce(( acc, err ) => {
                acc[err.path] = err
                return acc
            }, {})
            res.send(errors_object)
        }
        else {
            try {   
                let query_existing_user = await User.findOne({email: newUser.email})
                if (query_existing_user){
                    res.send("User already exists with that account")
                } else {
                    console.log(newUser)
                    let hashed_password = await bcrypt.hash(newUser.password, 10)
                    newUser.password = hashed_password 
                    console.log(hashed_password)
                    await newUser.save()
                }
            } catch (err) {
                res.send(err)
            }
        }
    } catch (error) {
        res.send("error")
    }
}