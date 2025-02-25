// import mongoose from "mongoose";
// const Schema = mongoose.Schema;

// const tokenSchema = new Schema ({
//    userID : {
//     type:Schema.Types.ObjectId,
//     require:true,
//     ref:"User",
//     unique:true,
//    },
//    token:{
//        type:String,
//        required:true,
//    },
//    createdAt:{
//     type:Date,
//     default:Date.now(),
//     expire:3600
//    }
// })

//  const Token = mongoose.model("Token",tokenSchema);

// export default Token;