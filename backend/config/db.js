import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async() => {
    await mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log('MongoDb is connected');
        })
        .catch((error) => {
            console.log(error);
        }) 
    }