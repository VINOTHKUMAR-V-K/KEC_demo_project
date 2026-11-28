let express=require('express');
let server=express();
let database=require('./Config/db');
var port =5000;
database();

server.listen(port,()=>{
    console.log("server is a running successfully");
})
