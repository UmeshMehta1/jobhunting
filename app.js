const express = require('express'); 
const { connectDb } = require('./db/dbconfig');
const app = express();

app.use(express.json())

connectDb()
const userRoute = require('./routes/userRoute');
const jobRoute = require('./routes/jobRoute');

app.use("/api/auth",userRoute)
app.use("/api/job",jobRoute)

//localhost:3000/api/user/

app.listen(4000,()=>{
    console.log("Server is running on port 4000");
})

