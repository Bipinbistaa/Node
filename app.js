const express = require("express")
const dbSangaconnectHu = require("./Database/connection")
const User = require("./models/userModel")
const Blog = require("./models/blogModule")
const app = express()
const bcrypt = require("bcrypt")


dbSangaconnectHu()
app.use(express.json()) //used to display json data from the postman

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

app.post("/register",async function(req,res){
    // console.log(req.body)
    const name = req.body.name
    const email = req.body.email
    const password = req.body.password //const {name ,email ,password} = req.body which is known as destructuring
    console.log(name,email,password)

    await User.create({
        name : name,
        email : email,
        password : bcrypt.hashSync(password,10) //10 means it hash the encrypted data for 10 times more this number more the secure
        

    })
    res.json({
        message : "User registered successfully!!"
    })

})

app.get("/fetch-blog",async function(req,res){
    const data = await Blog.find()
    res.json({
        data // data : data can also written as data
    })
    
})

// app.delete("/delete/:id",async function(req,res){
//     const id = req.params.id
//     await User.findByIdAndDelete(id)
//     res.json({
//         message : "User with that id deleted successfully!!"
//     })
// })
app.delete("/delete",async function(req,res){
    const {id} = req.body
    await User.findByIdAndDelete(id)

    res.json({
        message : "User with that id deleted successfully!!"
    })
})


//create blog 

app.post("/createBlog",async function(req,res){

    
    const title  = req.body.title
    const subtitle  = req.body.subtitle
    const description  = req.body.description
    console.log(title,subtitle,description)

    await Blog.create({
        title,
        subtitle,
        description        

    })
    res.json({
        message : "blog registered successfully!!"
    })

})

//delete blog

app.delete("/deleteblog/:id",async function(req,res){
    const id = req.params.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message : "Blog with that id deleted successfully!!"
    })
})


app.listen(3000,function(){
    console.log("server has started at port 3000")
})


