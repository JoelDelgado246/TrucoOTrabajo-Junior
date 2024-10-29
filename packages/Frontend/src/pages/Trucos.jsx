// src/pages/Trucos.jsx
import { useState, useEffect } from "react";
import Header from "../components/layout/Header";
import DifficultySection from "../components/trucos/DifficultySection";
import { trucosService } from "../services/trucosService";

export default function Trucos() {
  const [trucos, setTrucos] = useState({
    facil: [],
    intermedio: [],
    terrorifico: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarTrucos = async () => {
      try {
        const data = await trucosService.getAllTrucos();
        console.log("Datos recibidos:", data); // Para debugging

        // Inicializar el objeto con arrays vacíos
        const trucosPorDificultad = {
          facil: [],
          intermedio: [],
          terrorifico: [],
        };

        // Agrupar trucos por dificultad
        data.forEach((truco) => {
          // Adaptar la estructura que viene del backend
          const trucoFormateado = {
            id: truco.id,
            title: truco.titulo,
            description: truco.descripcion,
            language: "JS", // Por ahora hardcodeado, luego podemos ajustarlo
            difficulty: truco.dificultad,
          };

          // Asegurarse de que el tipo existe antes de hacer push
          if (trucosPorDificultad[truco.dificultad]) {
            trucosPorDificultad[truco.dificultad].push(trucoFormateado);
          }
        });

        console.log("Trucos procesados:", trucosPorDificultad); // Para debugging
        setTrucos(trucosPorDificultad);
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
    <div className="min-h-screen">
      <Header />

      <main className="bg-customPurple py-12 px-6">
        <div className="container mx-auto">
          <DifficultySection
            title="FÁCIL"
            challenges={trucos.facil}
            titleColor="text-lime-400"
            difficulty="FACIL"
          />

          <DifficultySection
            title="MEDIO"
            challenges={trucos.intermedio}
            titleColor="text-lime-400"
            difficulty="MEDIO"
          />

          <DifficultySection
            title="TERRORÍFICO"
            challenges={trucos.terrorifico}
            titleColor="text-lime-400"
            difficulty="TERRORIFICO"
          />
        </div>
      </main>
    </div>
  );
}
