const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name : { type: String, require: true }, 
})

CategorySchema.virtual("url").get( function () {
    return `/articles/categories/${this._id}`
})

module.exports = mongoose.model("Category", CategorySchema)

