let express=require('express');
var userRoute=require("./Routing/userRouting")
let database=require('./Config/db');
var port =5000;
let server=express();
server.use(express.json());
database();

server.use("/auth",userRoute);

server.listen(port,()=>{
    console.log("server is a running successfully");
})
