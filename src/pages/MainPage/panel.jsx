import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navbar";
import Home from "../home";
import Editar from "../editar";
import Catalogo from "../catalogo";
import PanelComida from "../comida";
import ProtecterRoute from "../../components/ProtecterRoute";
import UserNavBar from "../../components/userNavBar";
import { useSelector } from "react-redux";
import ProtectedAdmin from "../../components/ProtectedAdmin";
export default function Panel() {
  const stateNav = useSelector((state) => state.nav);
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
            <Route path="/profile" element={<h1>perfil</h1>} />
            <Route path="/settings" element={<h1>configurar Usuario</h1>} />
          </Route>
          <Route element={<ProtectedAdmin />}>
            <Route path="/register" element={<h1>admin</h1>} />
          </Route>
        </Routes>
      </main>
    </>
  );
}
