import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();

  // Si no está autenticado, redirigir al login
  return isLoggedIn ? children : <Navigate to="/login" />;
}
