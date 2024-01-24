import NavBar from "./components/navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-row relative bg-nepal-50 overflow-hidden">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
