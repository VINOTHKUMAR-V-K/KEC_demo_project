let mongoose=require("mongoose");
const userSchema = new mongoose.Schema({
    name:{ type:String,require:true},
    email:{type:String,require:true,lowercase:true},
    password:{type:String,require:true},
    isAdmin:{type:Boolean,require:true}
},{timestamps:true}
)
module.exports=mongoose.model("user",userSchema)