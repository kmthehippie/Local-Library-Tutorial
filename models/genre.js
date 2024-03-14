const mongoose = require("mongoose")
const Schema = mongoose.Schema


const minlength = 3
const maxlength = 100

const GenreSchema = new Schema({
    name: {
        type: String, 
        minlength: minlength,
        maxlength: maxlength,
        required: true},
})


GenreSchema.virtual("url").get(function(){
    return `/catalog/genre/${this._id}`
})



module.exports = mongoose.model("Genre", GenreSchema)