import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    creditBalance:{type:Number,default:5},
})

const userModel= mongoose.models.user || mongoose.model("user",userSchema)
//agar user naam ka model pehle hi mil jayega to create nhi karega . pa rnhi lila to user schema ke according usermodel create kr dega.

export default userModel;