import dotenv from "dotenv"
dotenv.config()
import pkg from 'jsonwebtoken'
const { sign } = pkg
const ACCESS_TOKEN_SECRET = process.env.ACCESS_SECRET
const REFRESH_TOKEN_SECRET = process.env.REFRESH_SECRET


async function GenerateAccessToken (username) {
    return await sign({ username }, ACCESS_TOKEN_SECRET, { 'expiresIn' : '15m' })
}

async function GenerateRefreshToken (username) {
    return await sign({ username }, REFRESH_TOKEN_SECRET, { 'expiresIn' : '7d' })
}

export {
    GenerateAccessToken, 
    GenerateRefreshToken
}