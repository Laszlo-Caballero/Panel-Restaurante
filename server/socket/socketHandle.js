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
        console.log(orden);
        ordenSchema.parse(orden);
        Ordenes.push(orden);
        console.log("Ordenes", Ordenes);
      } catch (error) {
        console.log(error);
      }
    });
  });
}
