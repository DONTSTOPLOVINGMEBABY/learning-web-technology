import User from "./user.js"
import { compare, hash } from "bcrypt"
import { GenerateAccessToken, GenerateRefreshToken } from "./helpers.js"



// async function SaveRefreshTokenToProfile (user, token) {
//     user.refreshToken = token
//     await refreshToken.save()
// }

function sendRefreshCookie (res, refreshToken) {
    res.cookie('jsonwebtoken', refreshToken, { maxAge: 604800000, httpOnly: true, secure: true })
}   


async function Login (req, res, next) {
    try {
        debugger
        const {
            username, 
            password
        } = req.body
        let findUser = await User.findOne({ username })
        if (!findUser) {
            return res.status(404).json({ errors:  'Username not found' })
        }
        let passwordMatch = await compare(password, findUser.password)
        if (!passwordMatch){
            return res.status(401).json({ errors : 'Invalid Password' })
        }
        let accessToken = await GenerateAccessToken(username)
        let refreshToken = await GenerateRefreshToken(username)
        findUser.refreshToken = refreshToken
        await findUser.save()
        sendRefreshCookie(res, refreshToken)
        return res.status(200).json({ accessToken })
    }
    catch (error) {
        next(error)
    }
}

async function SignUp (req, res, next) {
    try {
        debugger
        const {
            username, 
            password, 
        } = req.body
        let findUser = await User.findOne({ username })
        if (findUser) {
            return res.status(409).json({ errors : 'Username unavailable' })
        }
        let encrypted_password = await hash(password, 10)
        let accessToken = await GenerateAccessToken(username)
        let refreshToken = await GenerateRefreshToken(username)
        let newUser = new User({
            username, 
            password: encrypted_password, 
            refreshToken
        })
        await newUser.save()
        sendRefreshCookie(res, refreshToken)
        return res.status(200).json({ accessToken })
    } 
    catch (error) {
        next(error)
    }
}


export {
    Login, 
    SignUp
}