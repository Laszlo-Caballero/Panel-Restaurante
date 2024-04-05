import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navbar";
import Home from "./home";
import Editar from "../comidas/editar";
import Catalogo from "../comidas/catalogo";
import PanelComida from "../comidas/comida";
import ProtecterRoute from "../../components/ProtecterRoute";
import UserNavBar from "../../components/userNavBar";
import { useSelector } from "react-redux";
import ProtectedAdmin from "../../components/ProtectedAdmin";
import Pedir from "../Ordenes/Pedir";
import Ordenes from "../Ordenes/Ordenes";
import { io } from "socket.io-client";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Panel() {
  const stateNav = useSelector((state) => state.nav);
  useEffect(() => {
    const socket = io("http://localhost:3000");
    socket.on("nueva Orden", () => {
      console.log("nueva orden");
      toast.success("Nueva Orden", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
    socket.on("Error", () => {
      toast.error("Error", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    });
    return () => {
      socket.off("nueva Orden");
      socket.off("Error");
    };
  }, []);
  return (
    <>
      {stateNav && <NavBar />}
      <main className="w-full">
        <UserNavBar />
        <Routes>
          <Route element={<ProtecterRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/editar" element={<Editar />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/menu/:id" element={<PanelComida />} />
            <Route path="/Pedir" element={<Pedir />} />
            <Route path="/Ordenes" element={<Ordenes />} />
            <Route path="/profile" element={<h1>perfil</h1>} />
            <Route path="/settings" element={<h1>configurar Usuario</h1>} />
          </Route>
          <Route element={<ProtectedAdmin />}>
            <Route path="/register" element={<h1>admin</h1>} />
          </Route>
        </Routes>
        <ToastContainer />
      </main>
    </>
  );
}
