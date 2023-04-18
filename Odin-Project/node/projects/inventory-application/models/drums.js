const mongoose = require("mongoose")
const Schema = mongoose.Schema


const DrumSchema = new Schema({
    name : { type : String, required : true, maxLength : 100 }, 
    description: { type: String, required: true, maxLength : 1000 }, 
    price : { type : Number, required: true }, 
    numberInStock : { type: Number, required: true }, 
    category : [ {type: Schema.Types.ObjectId,  ref : "Category"} ], 
    type: { type: String, required : true }
})


DrumSchema.virtual("url").get(function () {
    return `/Drums/${this._id}`
})

module.exports = mongoose.model("Drum", DrumSchema)
