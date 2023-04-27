const express = require('express')
const jwt = require('jsonwebtoken')

const app = express()

app.get('/api', (req, res) => {
    res.json({
        message : "Welcome to the API"
    })
})


app.post('/api/login', (req, res) => {
    // Mock User
    const user = {
        id : "1", 
        username : "brad", 
        email : "brad@gmail", 
    }
    
    jwt.sign({user}, 'secret', { expiresIn: '30s' } ,(error, token) => {
        res.json({
            token 
        })
    })
})


app.post('/api/posts', verifyToken, (req, res) => {
    jwt.verify(req.token, 'secret', (error, authData) => {
        if (err) {
            res.sendStatus(403)

        } else {
            res.json({
                message: 'Post created.', 
                authData
            })
        }
    })

})

// Format of token 
// Authorization : Bearer <access_token> 


function verifyToken (req, res, next) {
    // Verify Token
    const bearerHeader = req.headers['authorization'] ; 
    // Check if bearer is undefined 
    if (typeof bearerHeader !== 'undefined'){
        // Split at the space 
        const bearer = bearerHeader.split(" ")
        const bearerToken = bearer[1]
        // Set the token 
        req.token = bearerToken 
        next()
    }
    else {
        // forbideen
        res.sendStatus(403)
    }
}





app.listen(3000, () => {
    console.log("listening on 3000")
})