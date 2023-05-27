import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

const DBconnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log("Base melita")
    } catch (error) {
        console.log(error)
        throw new Error ("Diablooooooooos")
    }
} 

export {DBconnection}