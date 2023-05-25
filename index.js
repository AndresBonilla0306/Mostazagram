import express from "express";
import * as dotenv from "dotenv";
import { DBconnection } from "./database/configmongodb.js";
import user from "./routes/users.routes.js";
import post from "./routes/post.routes.js";
import comment from "./routes/comment.routes.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";


dotenv.config();
DBconnection();

const app = express();


const httpServer = createServer(app);
const io = new Server(httpServer, { 
  cors: {origin: '*'}
 });

io.on("connection", (socket) => {
  console.log('se conecto tu papa');
  socket.on('chat_message', (data)=>{
    console.log(data)
    io.emit('chat_message', data);
  })
});

app.use(express.json());
app.use(cors());
app.use("/api/user", user);
app.use("/api/post", post);
app.use("/api/comment", comment);
// app.listen(process.env.PORT, () =>
//   console.log("Salchipapa " + process.env.PORT)
// );

httpServer.listen(process.env.PORT);
