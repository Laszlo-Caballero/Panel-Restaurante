import React from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";

export default function Ordenes() {
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
  }, []);

  return <div>Ordenes</div>;
}
