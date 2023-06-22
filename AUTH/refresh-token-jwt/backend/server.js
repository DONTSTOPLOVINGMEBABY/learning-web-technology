const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const everything_route = require('./routes/everything-4-now')
dotenv.config()
const morgan = require('morgan')


// DB
const db = process.env.CONNECTION_STRING
async function connect_the_goose () {
    let connection = await mongoose.connect(db)
    console.log(`[CONNECTED] Connected to ${connection.connection.name}`)
}
connect_the_goose()


// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(morgan('dev'))


// Stuff 
app.use("/", everything_route)


app.listen(3000, () => {
    console.log(`listening on port 3000`)
})


