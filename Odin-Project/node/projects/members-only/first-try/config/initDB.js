const User = require("../models/users")
const dotenv = require("dotenv")
dotenv.config()

const mongoose = require("mongoose");
mongoose.set("strictQuery", false); // Prepare for Mongoose 7

mongoDB = process.env.connection_string


main()

async function main(){
    await mongoose.connect(mongoDB)
    try {
        const newUser = User({
            firstName : "Henry", 
            lastName : "Jacobs", 
            username : "Big-Hankus", 
            password : "admin", 
            isMember: true, 
        })

        await newUser.save()
    } catch (error) {
        console.log(error)
    }
    process.exit()
} 
