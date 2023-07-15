import dotenv from "dotenv"
dotenv.config()
import pkg from 'jsonwebtoken'
const { verify } = pkg
const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET
const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET


async function VerifyToken (token, secret) {
    return new Promise( (resolve, reject) => {
        verify(token, secret, (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
            }
        })
    })
}


function GetAuthorizationHeader (req) {
    let authHeader = req.headers['authorization'] 
    let token = authHeader && authHeader.split(" ")[1]
    return token
}

function getRefreshToken (req) {
    return req.cookies && req.cookies.jsonwebtoken
}

async function VerifyAccessToken (req, res, next) {
    try {
        debugger
        let token = GetAuthorizationHeader(req)
        if (!token) {
            return next()
        }
        try {
            let validUser = await VerifyToken(token, ACCESS_TOKEN_SECRET)
            req.user = validUser
            return next()
        } 
        catch (error) {
            return next()
        }
    } 
    catch (error) {
        next(error)
    }
}

async function VerifyRefreshToken (req, res, next) {
    try {
        if (req.user) {
            return next()
        }
        let refreshCookie = getRefreshToken(req)
        if (!refreshCookie){
            return res.status(401)
        }
        let validUser = await VerifyToken(refreshCookie, REFRESH_TOKEN_SECRET)
        req.user = validUser
        return next()
    }
    catch (error) {
        return res.sendStatus(401)
    }
}

const AuthMiddleware = [ VerifyAccessToken, VerifyRefreshToken ]

export { AuthMiddleware }