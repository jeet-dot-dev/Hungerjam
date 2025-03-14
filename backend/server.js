import express from "express";
import cors from "cors";
import "dotenv/config.js";
import connectDB from "./config/dbConnect.js";
import foodRoute from "./routers/food_router.js";
import userRoute from "./routers/user_router.js";
import addRoute from "./routers/add_Route.js";
//import cartRoute  from './routers/cart_Route.js';
import bodyParser from "body-parser";
import orderRouter from "./routers/order_Route.js";

//app config
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//api endpoints
app.use("/api/food", foodRoute);

//api endpoint for user
app.use("/api/user", userRoute);

//api end point for cart
//app.use("/api/cart",cartRoute);

//api end point for address
app.use("/api", addRoute);

//orderRouter
app.use("/api/order", orderRouter);

//start the server
app.listen(process.env.PORT || 3000, () => {
  console.log("I am listing");
});
