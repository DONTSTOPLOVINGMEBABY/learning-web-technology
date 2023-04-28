const express = require('express')
const app = express()
const dotenv = require('dotenv').config()

const jwt = require('jsonwebtoken')

app.use(express.json())

const posts = [
    {
        username : "Henry", 
        title : "post 1"
    }, 
    {
        username : "Hank", 
        title : "post 2"
    }
]
 

app.get('/posts', authenticateToken , (req, res) => {

    res.json(posts.filter( post => post.username === req.user.name ))
})

function authenticateToken (req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    console.log(token)
    if (!token) {
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err){ return res.sendStatus(403) }
        req.user = user 
        next()
    })
}





app.listen(3000, () => {
    console.log("App running on port 3000")
})