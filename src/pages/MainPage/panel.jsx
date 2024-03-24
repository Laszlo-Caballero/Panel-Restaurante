import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "../../components/navbar";
import Home from "../home";
import Editar from "../editar";
import Catalogo from "../catalogo";
import PanelComida from "../comida";
export default function Panel() {
  return (
    <>
      <NavBar />
      <main className="w-5/6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editar" element={<Editar />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/menu/:id" element={<PanelComida />} />
        </Routes>
      </main>
    </>
  );
}
