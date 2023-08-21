import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";

// servidor pra utilizar o express
const app = express();   

app.use(express.static(path.join(__dirname, "..", "public")));

const serverHttp = http.createServer(app);

// servidor pra utilizar o socket.io
const io = new Server(serverHttp);

export { serverHttp, io };
