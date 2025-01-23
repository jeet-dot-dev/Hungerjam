import express from "express";
import  {addUser,tokenVerify,loginUser,getdata}  from "../controllers/userController.js";
import userValidation from "../middlewares/userValidation.js";

const userRoute = express.Router();

userRoute.post("/signup",userValidation,addUser);
userRoute.post("/login",loginUser);
userRoute.get("/signup/:id/verify/:token",tokenVerify);
userRoute.get("/data",getdata);


export default userRoute;