import User from "../models/userSchema.js";
import Order from "../models/orderSchema.js";
import Stripe from "stripe";
import jwt from "jsonwebtoken";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  try {
    const newOrder = new Order({
      user: req.body.userId,
      items: req.body.items,
      amount: req.body.amount,
    });

    const response = await newOrder.save();
    // res.json({message:"Order Successfully placed",success:true});
    const line_items = req.body.items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100, // Assuming price is in rupees, Stripe expects the amount in paise
      },
      quantity: item.qnt, // Add quantity if required
    }));

    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: req.body.deliveryFee * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      line_items: line_items,
      mode: "payment",
      success_url: `${process.env.FRONT_END_URL}/verify?success=true&orderID=${response._id}`,
      cancel_url: `${process.env.FRONT_END_URL}/verify?success=true&orderID=${response._id}`,
    });

    res.json({ success: true, session_url: session.url });
  } catch (error) {
    res.json({ message: "Failed", success: false });
    console.log(error);
  }
};

const verifyOrder = async (req, res) => {
  try {
    const { orderId, success } = req.body;
    //console.log("orderId:", orderId);

    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res
        .status(401)
        .json({ message: "Authorization token is missing" });
    }
    const decodedToken = jwt.decode(token);
    const userId = decodedToken?.sub;
    const user = await User.findOne({ auth0UserId: userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (success === "true") {
      await User.findByIdAndUpdate(user._id, {
        $addToSet: { orders: orderId }, // Ensures no duplicates
      });

      await Order.findByIdAndUpdate(orderId, { payment: true });

      res.json({ success: true, message: "Payment Successfully Done" });
    } else {
      await Order.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Payment Failed" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

export { placeOrder, verifyOrder };
