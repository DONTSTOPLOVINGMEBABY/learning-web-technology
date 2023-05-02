const express = require('express') 
const app = express()
const dotenv = require('dotenv')
const path = require('path')
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const logger = require('morgan')
dotenv.config()

const PORT = process.env.PORT || 3000 

require('./.config/passport')(passport)

// Routes 
const indexRoutes = require("./routes/index")
const authRoutes = require("./routes/authRoutes")
const adminRoutes = require('./routes/admin-routes')

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

app.use(session({
    secret : 'hank', 
    resave : true, 
    saveUninitialized: true, 
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// routes 
app.use("/", indexRoutes)
app.use("/auth", authRoutes)
app.use("/admin", adminRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})