const Post = require('../models/posts')
const Category = require('../models/post-categories')
const {body, validationResult} = require('express-validator')

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