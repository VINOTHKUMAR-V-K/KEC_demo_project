let express=require('express');
var userRoute=require("./Routing/userRouting")
var productRoute=require("./Routing/productRouter")
var cartRoute=require("./Routing/cartRouter")
let database=require('./Config/db');
var env=require("dotenv")
var port =5000;
env.config()
let server=express();
server.use(express.json());
database();

server.use("/auth",userRoute);
server.use("/product",productRoute);
server.use("/cart",cartRoute);

server.listen(port,()=>{
    console.log("server is a running successfully");
})
