import request from "supertest"
import CreateApp from "./app.js"
import * as dbHelpers from './in-memory-stuff/db-handlers.js' 
import user from "./user.js"
import mongoose from "mongoose"
let app 

async function hello  () {
    const response = await request(app)
        .post('/signup')
        .send({ username : 'hankus', password : 'pass' })
}


beforeAll( async () => {
    let connection_uri = await dbHelpers.connect()
    app = CreateApp(connection_uri)
    await hello()
})

afterAll( async () => {
    await dbHelpers.disconnect()
})


describe("/login", () => {

    it('Logs you in and sends back a valid accessToken and cookie', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username : 'hankus', password : 'pass' })
        expect(response.body).toHaveProperty('accessToken')
        expect(response.headers['set-cookie']).toBeDefined()
    })
    it('Provides bad username and responds with 404', async () => {
        const response = await request(app)
            .post('/login')
            .send({ username : 'dne', password : 'pass' })
        expect(response.status).toBe(404)
    })
    it("Provides right username but wrong password and responds with 401", async () => {
        const response = await request(app)
            .post('/login')
            .send({ username : 'hankus', password : 'incorrect-password' })
            expect(response.status).toBe(401)
    })
})

describe("General Sign Up Route Testing", () => {
    it("signs up and creates an account", async () => {
        const response = await request(app)
            .post('/signup')
            .send({ username : 'fakeAccount', password: 'password' })
        expect(response.status).toBe(200)
        const test_signup = await request(app)
            .post('/login')
            .send({ username : 'fakeAccount', password: 'password' })
        expect(test_signup.status).toBe(200)
        expect(test_signup.headers['set-cookie']).toBeDefined()
    })
})