const express = require('express')

function ExportApp (database) {
    const app = express()
    app.use(express.json())
    
    app.post('/users', async (req, res) => {
        let { username, password } = req.body
        if (!username || !password){
            return res.sendStatus(400)
        }
        res.json({ userId : 'hank' })
    })
    return app 
}

module.exports = ExportApp

