let express=require('express');
let server=express();
var port =5000;
//api -1
server.get("/",(req,res)=>{
    res.status(200).send("welcome to Our API");
})
//api-2
server.get("/home",(req,res)=>{
    res.status(200).json({});
})
//api-3
server.get("/about",(req,res)=>{
    res.status(200).send("About page");
})

server.listen(port,()=>{
    console.log("server is a running successfully");
})
