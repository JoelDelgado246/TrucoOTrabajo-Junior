// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Comunidad from "./pages/Comunidad";
import Trucos from "./pages/Trucos";
import Tratos from "./pages/Tratos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import ChallengeDetail from "./components/trucos/ChallengeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/comunidad" element={<Comunidad />} />
        <Route path="/" element={<Home />} />
        <Route path="/trucos" element={<Trucos />} />
        <Route path="/trucos/:id" element={<ChallengeDetail />} />
        <Route path="/tratos" element={<Tratos />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </Router>
  );
}

export default App;
