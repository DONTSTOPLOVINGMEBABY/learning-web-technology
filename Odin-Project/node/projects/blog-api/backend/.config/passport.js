const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt') 

const User = require("../models/users")

module.exports = function (passport) {
    const authenticateUser = async (email, password, done) => {
        const findUser = await User.findOne({ email : email })
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

    passport.use( new LocalStrategy({usernameField : 'email'}, authenticateUser))
    passport.serializeUser((user, done) => done(null, { id: user.id, email: user.email }))
    passport.deserializeUser(async (userData, done) => {
        try {
            const user = await User.find({email : userData.email})
            user.email = userData.email 
            done(null, user)
        } catch (error) {
            done(error)
        }
    })
}