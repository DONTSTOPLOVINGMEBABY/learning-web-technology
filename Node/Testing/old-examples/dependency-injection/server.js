const connect_mongoose = require('./provider')
const theApp = require('./app')
const path = require('path')
const dotenv_path = path.join(__dirname, "../.env")
const dotenv = require('dotenv').config({ path : dotenv_path })

const createApp = theApp(connect_mongoose(process.env.CONNECTION_STRING))

createApp.listen(8080, () => {
    console.log(`Listening on 8080`)
})