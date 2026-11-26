let express=require('express');
let server=express();
let mongoose=require('mongoose');
var port =5000;
mongoose.connect("mongodb://localhost:27017/KEC_DB")
.then(()=>{
    console.log("Database connected successfully")
})
.catch((err)=>{
    console.log("Mongodb error",err);
})

// //api -1
// server.get("/",(req,res)=>{
//     res.status(200).send("welcome to Our API");
// })
// //api-2
// server.get("/home",(req,res)=>{
//     res.status(200).json({});
// })
// //api-3
// server.get("/about",(req,res)=>{
//     res.status(200).send("About page");
// })
// //api-4
// server.use((req,res)=>{
//     res.status(404).send("page not found");
// })

server.listen(port,()=>{
    console.log("server is a running successfully");
})
