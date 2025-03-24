import express from 'express'
import {fetchorderhistory, placeOrder,verifyOrder} from '../controllers/orderController.js'

const orderRouter = express.Router();

orderRouter.post('/place',placeOrder);
orderRouter.post('/verify',verifyOrder);
orderRouter.get('/history',fetchorderhistory);

export default orderRouter ;