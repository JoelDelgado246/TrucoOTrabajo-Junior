// src/pages/PruebaConexion.jsx
import { useEffect, useState } from "react";
import { trucosService } from "../services/trucosService";

export default function PruebaConexion() {
  const [trucos, setTrucos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [trucoSeleccionado, setTrucoSeleccionado] = useState(null);

  useEffect(() => {
    const cargarTrucos = async () => {
      try {
        const data = await trucosService.getAllTrucos();
        setTrucos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    cargarTrucos();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  const cargarTruco = async (id) => {
    try {
      const data = await trucosService.getTrucoById(id);
      setTrucoSeleccionado(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Lista de Trucos</h1>
      <div className="grid gap-4">
        <button
          onClick={() => cargarTruco(1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Cargar Truco 1
        </button>
        {trucoSeleccionado && (
          <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3>Truco Seleccionado:</h3>
            <pre>{JSON.stringify(trucoSeleccionado, null, 2)}</pre>
          </div>
        )}
        {trucos.map((truco) => (
          <div key={truco.truco_id} className="border p-4 rounded">
            <h2 className="font-bold">{truco.titulo_truco}</h2>
            <p>{truco.descripcion_truco}</p>
            <p>Tipo: {truco.tipo_truco}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
