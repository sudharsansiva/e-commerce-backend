const mongoose = require("mongoose")
const orderSchema = new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date,

})

const orderModle=mongoose.model("order",orderSchema)

module.exports=orderModle