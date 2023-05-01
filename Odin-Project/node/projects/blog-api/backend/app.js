const express = require('express') 
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const logger = require('morgan')
dotenv.config()

const PORT = process.env.PORT || 3000 

// Routes 
const indexRoutes = require("./routes/index")
const authRoutes = require("./routes/authRoutes")

// express middleware
app.use(express.urlencoded({ extended : true }))
app.use(express.static(path.join(__dirname, 'public'))) 
app.use(logger('dev'))

// connect mongoose
const db_connect = process.env.CONNECTION_STRING
mongoose.set('strictQuery', false)
async function connect_goose () {
    await mongoose.connect(db_connect)
}
connect_goose()


app.use("/", indexRoutes)

app.use("/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})