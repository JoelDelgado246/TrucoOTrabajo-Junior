import React, { useEffect, useState } from "react";
import RecentTrickSection from "../components/ui/RecentTrickSection";
import ResourceCard from "../components/ui/ResourceCard";
import Header from "../components/layout/Header";
import tratoService from "../services/tratoService";
import TratoPopup from "../components/ui/TratoPopup";

export default function Truco() {
  const [tratos, setTratos] = useState([]);
  const [tratoReciente, setTratoReciente] = useState(null);
  const [selectedTrato, setSelectedTrato] = useState(null);

  useEffect(() => {
    const fetchTratosCompletados = async () => {
      try {
        const trucosCompletados = Object.entries(localStorage)
          .filter(([key]) => key.startsWith("truco_completado_"))
          .map(([_, value]) => {
            try {
              const parsed = JSON.parse(value);
              return parsed && parsed.trucoId ? parsed : null;
            } catch {
              return null;
            }
          })
          .filter(Boolean)
          .sort((a, b) => new Date(b.completadoEn) - new Date(a.completadoEn));

        console.log("Trucos completados filtrados:", trucosCompletados);

        if (trucosCompletados.length > 0) {
          const responses = await Promise.all(
            trucosCompletados.map((truco) =>
              tratoService.getTratoById(truco.trucoId)
            )
          );

          const validTratos = responses.filter(Boolean);
          console.log("Tratos válidos:", validTratos);

          if (validTratos.length > 0) {
            // Establecer el trato más reciente
            setTratoReciente(validTratos[0]);
            // Guardar el resto de tratos
            setTratos(validTratos);
          }
        }
      } catch (error) {
        console.error("Error detallado:", error);
      }
    };
    // Ejecutar la función cuando se monta el componente y cuando cambia el localStorage
    fetchTratosCompletados();
    window.addEventListener("storage", fetchTratosCompletados);

    return () => {
      window.removeEventListener("storage", fetchTratosCompletados);
    };
  }, []);

  const openPopup = (trato) => {
    setSelectedTrato(trato);
  };

  const closePopup = () => {
    setSelectedTrato(null);
  };

  return (
    <div className="bg-customPurple min-h-screen text-white">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-title1 font-creepster mb-8">Reciente</h2>
        {tratoReciente ? (
          <RecentTrickSection
            trato={{
              titulo: tratoReciente.titulo_trato,
              contenido: tratoReciente.texto_contenido,
              tutorial: tratoReciente.enlace_tutorial,
              curso: tratoReciente.enlace_curso,
            }}
            onExpand={() => setSelectedTrato(tratoReciente)}
          />
        ) : (
          <p>No hay tratos recientes</p>
        )}

        <h2 className="text-title1 font-creepster my-8">Tus Tratos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {tratos.map((trato, index) => (
            <ResourceCard
              key={index}
              trato={{
                titulo: trato.titulo_trato,
                contenido: trato.texto_contenido,
                tutorial: trato.enlace_tutorial,
                curso: trato.enlace_curso,
              }}
              onExpand={() => setSelectedTrato(trato)}
            />
          ))}
        </div>

        {selectedTrato && (
          <TratoPopup
            trato={selectedTrato}
            onClose={() => setSelectedTrato(null)}
          />
        )}
      </div>
    </div>
  );
}
