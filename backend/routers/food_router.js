import express from 'express';
import {addData,removeData,list} from '../controllers/foodController.js'
import fooValidation from '../middlewares/foodValidation.js';


const foodRoute = express.Router();

foodRoute.post("/add",fooValidation,addData);
foodRoute.get("/list",list);

foodRoute.post("/remove",removeData);

export default foodRoute;