import express from "express";
import { addData, removeData, list } from "../controllers/foodController.js";
import fooValidation from "../middlewares/foodValidation.js";
import upload from "../config/multerconfig.js";

const foodRoute = express.Router();

// Route Definitions
foodRoute.post(
  "/add",
 
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
    { name: "image5", maxCount: 1 },
  ]),
  fooValidation,
  addData
);

foodRoute.get("/list", list);
foodRoute.post("/remove", removeData);

export default foodRoute;
