// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import Trucos from "./pages/Trucos";
import Tratos from "./pages/Tratos";
import SolveTrick from "./pages/SolveTrick";
import PruebaConexion from "./pages/PruebaConexion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trucos" element={<Trucos />} />
        <Route path="/trucos/:id" element={<SolveTrick />} />
        <Route path="/tratos" element={<Tratos />} />
        <Route path="/tratos/:id" element={<Tratos />} />
        <Route path="/solve-trick" element={<SolveTrick />} />
      </Routes>
    </Router>
  );
}

export default App;
