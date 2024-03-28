import { Server } from "socket.io";
import { ordenSchema } from "../utils/validation.js";

export let Ordenes = [];
export function initializeSocket(server) {
  const io = new Server(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    socket.on("ordenes", (orden) => {
      try {
        ordenSchema.parse(orden);
        Ordenes.push(orden);
        io.emit("nueva Orden");
      } catch (error) {
        console.log(error);
      }
    });
  });
}
