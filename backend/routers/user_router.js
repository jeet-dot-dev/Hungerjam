import express from "express";
import  {addUser,tokenVerify,loginUser}  from "../controllers/userController.js";
import userValidation from "../middlewares/userValidation.js";

const userRoute = express.Router();

userRoute.post("/signin",userValidation,addUser);
userRoute.post("/login",loginUser);
userRoute.get("/signin/:id/verify/:token",tokenVerify);


export default userRoute;