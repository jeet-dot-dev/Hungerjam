import express from "express";

import validateAddress from '../middlewares/validateAddress.js'
import {storeAddress} from "../controllers/addressController.js"
const addRoute = express.Router()

addRoute.post('/address',validateAddress,storeAddress);
//addRoute.put('/adress',updateAddress);

export default addRoute ;