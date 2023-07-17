const request = require('supertest')
const ExportApp = require('./app')

const app = ExportApp


describe("given a username and password", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(app).post("/users").send({
            username : 'username', 
            password : 'password', 
        })
        expect(response.statusCode).toBe(200)
    })
    test("Should specify json in the content header", async () => {
        const response = await request(app).post('/users').send({
            username : 'username', 
            password : 'password', 
        })
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    test("response has userId", async () => {
        const response = await request(app).post('/users').send({
            username : 'username', 
            password : 'password', 
        })
        expect(response.body.userId).toBeDefined()
    })
})

describe("When the username and password is missing", () => {
    test("Should respond with a status code of 400", async () => {
        const response = await request(app).post('/users').send({
            username : 'username'
        })
        expect(response.statusCode).toBe(400)
    })
})