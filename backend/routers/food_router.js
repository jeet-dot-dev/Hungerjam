import express from 'express';
import {addData,removeData,list} from '../controllers.js'


const foodRoute = express.Router();

foodRoute.post("/add",addData);
foodRoute.get("/list",removeData);
foodRoute.post("/remove",list);

export default foodRoute;