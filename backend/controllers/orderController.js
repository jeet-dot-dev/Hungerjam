import User from '../models/userSchema.js'
import Order from '../models/orderSchema.js'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY) 

const placeOrder = async (req,res)=>{
  try {
    const newOrder = new Order({
        user:null,
         items:req.body.items,
         amount:null,
         
    })

    const res = await newOrder.save() ;
    res.json({message:"Order Successfully placed",success:true});


  } catch (error) {
    res.json({message:"Failed",success:false});
    console.log(error);
  }
}

export default placeOrder ;