import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
 
});

const User = mongoose.model("User", userSchema);

export default User;

// const userSchema = new Schema ({
//     firstName: { type: String, required: true },
// 	lastName: { type: String, required: true },
// 	email: { type: String, required: true },
// 	password: { type: String, required: true },
// 	verified: { type: Boolean, default: false },
//     order: {
//         type: ObjectId,
//         ref: 'Order'
//       },
//       cart: {
//         type: ObjectId,
//         ref: 'Cart'
//       },
//       review :{
//         type: ObjectId,
//         ref: 'review'
//       },
//       address :{
//         type: ObjectId,
//         ref: 'review'
//       }
// })
