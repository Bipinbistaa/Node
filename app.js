const express = require("express")
const dbSangaconnectHu = require("./Database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blogModule")
const app = express()

dbSangaconnectHu()

app.get("/",function(req,res){
    res.send("Hello World")
   
})


 app.get("/about",function(req,res){ //http://localhost:3000/about
    
    res.json({
        name : "Bipin",
        age : 21,
        address : "Kalabanjar"
    })

 })
// app.get("/Bipin",function(req,res){ http://localhost:3000/Bipin
//     res.send("Hello Bipin")

// })

app.get("/",function(req,res){
    res.json({
        name : "Home page"
    })

})


 app.get("/fetch-users",async function(req,res){
    const data = await User.find()
    res.json({
        data : data // data : data can also written as data
    })
    
})

app.get("/fetch-blog",async function(req,res){
    const data = await Blog.find()
    res.json({
        data // data : data can also written as data
    })
    
})


app.listen(3000,function(){
    console.log("server has started at port 3000")
   

})


// mongodb+srv://Nodejs:<db_password>@cluster0.oxgk79c.mongodb.net/?appName=Cluster0
