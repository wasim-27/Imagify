import mongoose from "mongoose";

const transactionSchema=new mongoose.Schema({
    userId:{type:String,required:true},
    plan:{type:String,required:true},
    amount:{type:Number,required:true},
    credits:{type:Number,required:true},
    payment:{type:Boolean,default:false},
    date:{type:Number}
})

const transactionModel= mongoose.models.transaction || mongoose.model("transaction",transactionSchema)
//agar user naam ka model pehle hi mil jayega to create nhi karega . pa rnhi lila to user schema ke according usermodel create kr dega.

export default transactionModel;