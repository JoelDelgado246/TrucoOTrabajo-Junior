// src/pages/PruebaConexion.jsx
import { useEffect, useState } from 'react';
import { trucosService } from '../services/trucosService';

export default function PruebaConexion() {
  const [trucos, setTrucos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Lista de Trucos</h1>
      <div className="grid gap-4">
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