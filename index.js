import express from "express";
import * as dotenv from "dotenv";
import { DBconnection } from "./database/configmongodb.js";
import users from "./routes/users.routes.js";
import post from "./routes/post.routes.js";
import comment from "./routes/comment.routes.js";
import cors from "cors";

dotenv.config();
DBconnection();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/users", users);
app.use("/api/post", post);
app.use("/api/comment", comment);
app.listen(process.env.PORT, () =>
  console.log("Salchipapa " + process.env.PORT)
);
