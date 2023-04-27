if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
const express = require('express')
const app = express()
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const path = require('path')
const User = require('./models/users')

const indexRouter = require('./routes/index')
const authRouter = require("./routes/auth")
const PORT = process.env.PORT || 3000 

app.set('view-engine', 'pug')

mongoose.set('strictQuery', false)
const mongoDB = process.env.connection_string 

main().catch(err => console.log(err)) 
async function main() {
    await mongoose.connect(mongoDB)
}

const initializePassport = require('./utils/passport-config')
initializePassport(
  passport,
  email => User.find({ email: email }),
  id => User.findById(id), 
)

app.set('view engine', 'pug')
app.use(express.urlencoded({ extended: false }))
app.use(flash())
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(methodOverride('_method'))

app.use(express.static(path.join(__dirname, 'public'))) 

app.use('/auth', authRouter)

app.use('/', indexRouter)


app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`)
})
