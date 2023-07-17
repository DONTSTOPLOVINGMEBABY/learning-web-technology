import mongoose from "mongoose"
import { MongoMemoryServer } from 'mongodb-memory-server'

let mongod = undefined 


export async function connect () {
    mongod = await MongoMemoryServer.create()
    const uri = mongod.getUri()
    return await mongoose.connect(uri) 
}

export async function disconnect () {
    if (mongod){
        await mongoose.connection.dropDatabase()
        await mongoose.connection.close()
        await mongod.stop()
    }
}

export async function clearDatabase () {
    if (mongod) {
        const collections = mongoose.connection.collections
        for (const key in collections) {
            const collection = collections[key]
            await collection.deleteMany()
        }
    }
}





