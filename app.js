const express = require("express")
const app = express()

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


app.listen(3000,function(){
    console.log("server has started at port 3000")
   

})
