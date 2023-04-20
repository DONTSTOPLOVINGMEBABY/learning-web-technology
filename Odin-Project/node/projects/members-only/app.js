const express = require("express")
const path = require("path")
const session = require("express-session")
const passport = require("passport")
const LocalStrategy = require("passport-local").Strategy
const mongoose = require("mongoose")
const morgan = require("morgan")
const Schema = mongoose.Schema
const dotenv = require("dotenv")
const bcrypt = require("bcryptjs")
dotenv.config()

const indexRouter = require("./routes/index")

const app = express() 
const PORT = process.env.PORT || 3000

mongoose.set('strictQuery', false)
const mongoDB = process.env.connection_string 

main().catch(err => console.log(err)) 
async function main() {
    await mongoose.connect(mongoDB)
}

app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, 'public'))) 

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})