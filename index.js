let express=require('express');
var userRoute=require("./Routing/userRouting")
let database=require('./Config/db');
var env=require("dotenv")
var port =5000;
env.config()
let server=express();
server.use(express.json());
database();

server.use("/auth",userRoute);

server.listen(port,()=>{
    console.log("server is a running successfully");
})
