import React from "react";
import { io } from "socket.io-client";
import { useEffect } from "react";
import { useState } from "react";
import axios from "src/utils/axios";

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

  return (
    <section className="p-8">
      <div>
        <p>Orden 1</p>
        <p>mesa 2</p>
        <ul className="pl-10 list-auto">
          <li>asda</li>
        </ul>
      </div>
    </section>
  );
}
