import express from "express";
import pkg from 'express-openid-connect';
const { requiresAuth } = pkg;
import  {signup, getUser } from '../controllers/userController.js';
import checkJwt from "../middlewares/checkJwt.js";
import checkJwtMiddleware from "../middlewares/checkJwt.js";
// import  {addUser,tokenVerify,loginUser,getdata}  from "../controllers/userController.js";
// import userValidation from "../middlewares/userValidation.js";



const userRoute = express.Router();

// userRoute.get('/login', (req, res) => {
//     console.log("hello");
//     res.oidc.login(); // Redirect to Auth0 login
//   });
  
//   userRoute.get('/logout', (req, res) => {
//     res.oidc.logout(); // Redirect to Auth0 logout
//   });
  
// //userRoute.get("/signup/:id/verify/:token",tokenVerify);

// userRoute.get("/data",requiresAuth(),getdata);


userRoute.post("/signup",checkJwtMiddleware,signup);
userRoute.get("/details",getUser);


export default userRoute;