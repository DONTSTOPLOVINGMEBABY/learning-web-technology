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
const User = require("./models/users")
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

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new LocalStrategy(async(username, password, done) => {
       try {
        const user = await User.findOne({ username: username });
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        };
        bcrypt.compare(password, user.password, (err, res) => {
            if (res) {
              // passwords match! log user in
              return done(null, user)
            } else {
              // passwords do not match!
              return done(null, false, { message: "Incorrect password" })
            }
        })
        // return done(null, user);
      } catch(err) {
        return done(err);
      };
    })
);

passport.serializeUser(function(user, done) {
    done(null, user.id);
});
  
passport.deserializeUser(async function(id, done) {
    try {
      const user = await User.findById(id);
      done(null, user);
    } catch(err) {
      done(err);
    };
});

app.use(express.static(path.join(__dirname, 'public'))) 

app.use('/', indexRouter)

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`)
})