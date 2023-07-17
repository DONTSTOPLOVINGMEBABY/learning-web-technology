const ExportApp = require('./app')
const path = require('path')
const dotenv = require('dotenv').config({ path : path.join(__dirname, '../.env' ) })
const connect_mongoose = require('./provider')

const app = ExportApp(connect_mongoose(process.env.CONNECTION_STRING))    

app.listen(8080, () => {
    console.log('listening on port 8080')
})

