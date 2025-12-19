const mongoose = require("mongoose")
const schema = mongoose.Schema

const blogSchema = new schema({ //creating the object from the class Schema

   
    Title : String,
    Subtitle : String,
    Description : String

}) 

const Blog = mongoose.model("Blog",blogSchema)
module.exports = Blog



