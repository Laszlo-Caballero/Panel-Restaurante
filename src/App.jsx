import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Editar from "./pages/editar";
import Catalogo from "./pages/catalogo";
import PanelComida from "./pages/comida";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-row relative bg-nepal-50 overflow-hidden">
        <NavBar />
        <main className="w-5/6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editar" element={<Editar />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/menu/:id" element={<PanelComida />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
