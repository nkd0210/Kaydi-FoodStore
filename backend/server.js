import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js'
import mongoose, { connect } from 'mongoose';
import dotenv from "dotenv";
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

//app config
const app = express();

const port = 5000

//middleware
app.use(express.json()) 
app.use(cors()) // apply the BE from any FE

//db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user", userRouter)

app.get('/', (req,res) => {
    res.send("API working")
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})


