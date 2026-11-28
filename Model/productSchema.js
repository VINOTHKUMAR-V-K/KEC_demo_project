let mongoose=require("mongoose");
const productSchema = new mongoose.Schema({
    name:{ type:String,require:true, trim:true},
    description:{type:String,require:true,lowercase:true},
    price:{type:Number,require:true,min:0},
    stock:{type:Number,require:true,min:0,default:0},
    image:{type:String,require:true}
},{timestamps:true}
)
module.exports=mongoose.model("product",productSchema)