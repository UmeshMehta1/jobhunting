const express = require('express'); 
const { connectDb } = require('./db/dbconfig');
const app = express();

app.use(express.json())

connectDb()

app.get("/",(req, res)=>{
    res.send("hello world")
    
})


app.get("/home",function(req,res){
    res.send("This is home page")
    console.log("home page visited")
})

console.log("Umesh here")




// app.listen(4000,function(){
//     console.log("Server is running on port 4000");
// })

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})

