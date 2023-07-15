import mongoose from "mongoose"
const Schema = mongoose.Schema
const Types = Schema.Types

const UserSchema = new mongoose.Schema({
    username : { type : Types.String, require: true }, 
    password : { type : Types.String, require : true }, 
    refreshToken : { type : Types.String }, 
}, { timestamps : true })


export default mongoose.model('User', UserSchema)