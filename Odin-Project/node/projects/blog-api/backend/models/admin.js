const mongoose = require("mongoose")
const Schema = mongoose.Schema

const AdminSchema = new Schema({
    userId : { type : String, require: true }, 
    passsord : { type : String, require: true }
})

module.exports = AdminSchema