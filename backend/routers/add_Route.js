import express from "express";

import validateAddress from '../middlewares/validateAddress.js'
import checkJwtMiddleware from '../middlewares/checkJwt.js'
import {storeAddress} from "../controllers/addressController.js"
const addRoute = express.Router()

addRoute.post('/address', checkJwtMiddleware, validateAddress, storeAddress);
//addRoute.put('/adress',updateAddress);

export default addRoute ;