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

        const trucosPorDificultad = {
          facil: [],
          intermedio: [],
          terrorifico: [],
        };

        data.forEach((truco) => {
          const trucoFormateado = {
            id: truco.id,
            title: truco.titulo,
            description: truco.descripcion,
            language: "JS", 
            difficulty: truco.dificultad,
          };

          if (trucosPorDificultad[truco.dificultad]) {
            trucosPorDificultad[truco.dificultad].push(trucoFormateado);
          }
        });

        console.log("Trucos procesados:", trucosPorDificultad);
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

      <main className="bg-customPurple py-12 px-6s">
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
