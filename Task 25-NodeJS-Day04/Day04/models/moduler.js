const mongoose=require("mongoose");
const mongoSchema= new mongoose.Schema({
    userName:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
}})

module.exports=mongoose.model("User",mongoSchema)    

