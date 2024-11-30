import { Routes, Route } from "react-router-dom";
import Panel from "./pages/MainPage/panel";
import Login from "./pages/login";
function App() {
  return (
    <>
      <div className="min-h-screen flex flex-row relative bg-nepal-50 overflow-hidden">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/panel/*" element={<Panel />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
