const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const path = require('path')
const dotenv = require('dotenv') ; dotenv.config() 

const app = express() 
const PORT = process.env.PORT || 3000

require('./.config/passport')(passport)


const db_connect = process.env.connection_string
mongoose.set('strictQuery', false)
async function connect_goose(){
    await mongoose.connect(db_connect)
}
connect_goose()


app.set('view engine', 'pug')

// Express body parser
app.use(express.urlencoded({ extended : true }))

// Express Session
app.use(session({
    secret : 'secret',
    resave : true, 
    saveUninitialized : true, 
}))

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth-routes'))

// Use public for js, css files
app.use(express.static(path.join(__dirname, 'public'))) 



app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})