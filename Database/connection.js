const mongoose = require("mongoose")

async function dbSangaconnectHu(){
   await mongoose.connect(process.env.connection_string)
   console.log("DB connected successfully !!!")
}

module.exports = dbSangaconnectHu

