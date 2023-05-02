const jwt = require('jsonwebtoken')

exports.authenticate_jwt = function authenticate_user (req, res, next) {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    console.log(token)
    if (!token){
        return res.sendStatus(401)
    }
    jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err) {return res.sendStatus(403)}
        req.user = user 
        next()
    })
}
