import express from 'express'
import {placeOrder,verifyOrder} from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/place',placeOrder);
orderRouter.post('/verify',verifyOrder)

export default orderRouter ;