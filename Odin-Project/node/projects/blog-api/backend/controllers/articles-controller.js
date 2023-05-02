const Post = require('../models/posts')
const Comment = require('../models/comments')

exports.GET_Homepage = async function (req, res, next) {
    let articles = await Post.aggregate([ { $sample : { size : 10 } } ])
    res.json(articles)
}

exports.GET_Article = async function (req, res, next) {
    try {
        let article = await Post.findById(req.params.id)
        let comments = await Comment.find({ postId : req.params.id })
        if (article){
            res.json({ article : article, comments: comments })
        }
        else {
            res.sendStatus(404)
        }
    } catch (error) {
        res.sendStatus(500)
    }
}

exports.GET_Author = async function (req, res, next) {
    try {
        let author = await Post.find({author : req.params.name})
        if (author.length > 0){
            res.json(author)
        } else {
            res.sendStatus(404)
        }
    } catch (error) {
        res.sendStatus(500)
    }
}