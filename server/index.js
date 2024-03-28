import express from "express";
import cors from "cors";
import { createServer } from "node:http";
import routesM from "./routes/menu.js";
import routesU from "./routes/auth.js";
import bodyParser from "body-parser";
import EliminarOtros from "./utils/eliminar.js";
import cookieParser from "cookie-parser";
import { initializeSocket } from "./socket/socketHandle.js";
EliminarOtros();

const app = express();
const server = createServer(app);
initializeSocket(server);
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/menu", routesM);
app.use("/users", routesU);
app.use(express.static("storage"));

server.listen(3000, () => {
  console.log("Servidor Corriendo en 3000");
});
