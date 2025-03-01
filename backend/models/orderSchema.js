import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
   user: {
       type: String,
       required:true,
     },
    items:{
        type:Array,
        required:true,
    },
    amount:{
       type:Number,
       require:true,
    },
   status:{
    type:String,
    default:"Food Processing"
   },
   date:{
    type:String,
    default:Date.now(),
   },
   payment:{
    type:Boolean,
    default:false
   }
})

const Order = new mongoose.model("Order",orderSchema);

export default  Order ;