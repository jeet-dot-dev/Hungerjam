import express from'express'
import cors from 'cors'
import 'dotenv/config.js'
import connectDB from './config/dbConnect.js';
import foodRoute from './routers/food_router.js';
import bodyParser from 'body-parser';

//app config
const app = express();
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//database connection
connectDB();

//middlewares
app.use(cors());
app.use(express.json());

//api endpoints
app.use("/api/food",foodRoute);

//start the server
app.listen(port,()=>{
    console.log("I am listing");
})