import React from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useState } from "react";
import axios from "../../utils/axios";

export default function Ordenes() {
  const [Ordenes, setOrdenes] = useState([]);
  useEffect(() => {
    const newSocket = io("http://localhost:3000");
    newSocket.on("Ordenes", (ordenes) => {
      setOrdenes(ordenes);
    });
    axios
      .get("http://localhost:3000/ordenes")
      .then((response) => {
        setOrdenes(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return <div>{Ordenes.length}</div>;
}
