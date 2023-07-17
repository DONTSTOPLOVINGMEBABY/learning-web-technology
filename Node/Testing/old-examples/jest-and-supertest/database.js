const User = require('./sample-model')


async function getUser (username) {
    try {
        let user = await User.findOne({ username })
        return user 
    } catch (error) {
        console.error(error)
    }
}

async function createUser (username, password) {
    try {
        let newUser = new User({
            username, 
            password
        })
        await newUser.save()
        console.log(`Successfully created new user : ${username}`)
        return newUser._id
    } catch (error) {
        console.error(error)
    }
}

module.exports = {
    getUser, createUser
}