const mongoose = require("mongoose")

async function dbSangaconnectHu(){
   await mongoose.connect("mongodb+srv://Nodejs:Bipin@cluster0.oxgk79c.mongodb.net/?appName=Cluster0")
   console.log("DB connected successfully !!!")
}

module.exports = dbSangaconnectHu

