let userModel=require("../Model/userSchema")
let bcrypt=require("bcrypt")
exports.registerUser=async(req,res)=>{
     try{
        const {name,email,password,isAdmin}=req.body;
     const existed=await userModel.findOne({email});
     if(existed){
        return res.status(400).json({mse:"User already existed..."})
     }

     const hashedpassword=await bcrypt.hash(password,10);
     var userData= await userModel.create({
        name:name,
        email:email,
        password:hashedpassword,
        isAdmin: isAdmin || false
     })
     res.status(201).json({mse:"User Added Successfully",user:userData})
     }catch(err){
        res.status(500).json({mse:"Something went Wrong",Err:err})
     }


}