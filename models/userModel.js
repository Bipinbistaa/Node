const mongoose = require("mongoose")
const schema = mongoose.Schema

const userSchema = new schema({ //creating the object from the class Schema

    name : String,
    email : String,
    password : String

}) 

const User = mongoose.model("User",userSchema)
module.exports = User



