
function theApp (mongoDB) {
    const express = require('express')
    const app = express()
    const database = require('./database')

    app.use(express.json())
    
    
    app.post('/users', async (req, res) => {
        const { username, password } = req.body
        try {
            const user = await database.getUser(username)
            if (user) {
                res.sendStatus(400).json({ error : 'Username already exists' })
                return 
            }
            const userId = await database.createUser(username, password)
            res.json({ userId })
        } catch (error) {
            res.sendStatus(500)
            console.error(error)
        }
    })
    return app
}


module.exports = theApp