const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt') 

const User = require('../models/users')

module.exports = function (passport) {
    const authenticateUser = async (username, password, done) => {
        const findUser = await User.findOne({ username : username })
        if (!findUser){
            return done(null, false)
        }
        try {
            const passOkay = bcrypt.compare(password, findUser.password)
            if (passOkay){
                return done(null, findUser)
            } else {
                return done(null, false)
            }
        } catch (error){
            return done(error)
        }
    }

    passport.use( new LocalStrategy({usernameField : 'username'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        done(null, User.findById(id))
    })
}