import express from "express"
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
app.listen(process.env.PORT, ()=> console.log("Salchipapa " + process.env.PORT) )