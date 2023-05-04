const Post = require('../models/posts')
const Category = require('../models/post-categories')
const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const {body, validationResult} = require('express-validator')

function generateAccessToken(user){
    return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn : '1d' })
}

exports.POST_login_admin = async function (req, res, next) {
    try {
        await body("username", "Username cannot be empty").not().isEmpty().escape().trim().run(req)
        await body("password", "Password cannot be empty").not().isEmpty().escape().trim().run(req)
    
        let errors = validationResult(req)
        let errors_object = {}
        let {username, password} = req.body
        let admin_object = new Admin({
            username : username, 
            password : password, 
        })
    
        if (!errors.isEmpty()){
            errors_object = errors.array().reduce( (prev, err) => {
                prev[err.path] = err
                return prev
            }, {})
            res.json( { admin_object : admin_object, errors_object : errors_object } )
        }
        else {
            let user = await Admin.findOne({ username: username }) 
            if (user){
                let match = await bcrypt.compare(password, user.password)
                if (match) {
                    res.json({ accessToken : generateAccessToken({ username : user.username }) })
                } else {
                    res.sendStatus(403)
                }
            } else {
                res.sendStatus(401)
            }
        }
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

exports.GET_ADMIN_HOME = async function (req, res, next) {
    let published_articles = await Post.find({ published: true })
    let unpublished_articles = await Post.find({ published : false })
    res.json({ published: published_articles, unpublished: unpublished_articles })
}

exports.POST_article = async function (req, res, next) {
    try {
        await body('title', "Title cannot be empty").not().isEmpty().escape().trim().run(req)
        await body('subtitle').escape().trim().run(req)
        await body('author', "Author cannot be empty").not().isEmpty().escape().trim().run(req)
        await body('content', "Content cannot be empty").not().isEmpty().escape().trim().run(req)
        await body('categories', "Cannot be empty").not().isEmpty().escape().trim().run(req)
        await body('published', "Published Cannot be empty").not().isEmpty().escape().trim().run(req)

        let published 
        if (req.body.published.trim() === 'true'){
            published = true
        } else { published = false }

        const errors = validationResult(req)
        let errors_object = {}

        let newPost = new Post({
            title: req.body.title,
            subtitle: req.body.subtitle ? req.body.subtitle : '', 
            author : req.body.author, 
            content : req.body.content, 
            uploadDate : new Date(), 
            categories : [ req.body.categories ], 
            published : published, 
        })
        if (!errors.isEmpty()){
            errors_object = errors.array().reduce( (prev, err) => {
                prev[err.path] = err
                return prev
            }, {})
            res.json({ post : newPost, errors : errors_object })
        }
        else {
            await newPost.save()
            res.sendStatus(200)
        }
    } catch (error) {
        res.send(500)
    }
}

exports.POST_switch_article_status = async function (req, res, next) {
    try {
        let article = await Post.findById(req.params.id)
        article.published = !article.published
        await article.save()
        res.sendStatus( 200 )
    } catch (error) {
        res.sendStatus(404)
    }
}