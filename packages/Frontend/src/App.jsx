// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import Trucos from "./pages/Trucos";
import Tratos from "./pages/Tratos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import SolveTrick from "./pages/SolveTrick";
import PruebaConexion from './pages/PruebaConexion';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/trucos" element={<Trucos />} />
        <Route path="/trucos/:id" element={<SolveTrick />} />
        <Route path="/tratos" element={<Tratos />} />
        <Route path="/solve-trick" element={<SolveTrick />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/prueba" element={<PruebaConexion />} />
      </Routes>
    </Router>
  );
}

export default App;
