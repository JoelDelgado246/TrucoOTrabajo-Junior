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
          .map(([key, value]) => {
            try {
              return JSON.parse(value);
            } catch {
              return null;
            }
          })
          .filter(Boolean)
          .sort((a, b) => new Date(b.completadoEn) - new Date(a.completadoEn));

        if (trucosCompletados.length > 0) {
          const responses = await Promise.all(
            trucosCompletados.map((truco) =>
              tratoService.getTratoById(truco.trucoId || truco.tratado_id)
            )
          );

          const validTratos = responses.filter(Boolean);
          console.log("Tratos obtenidos:", validTratos);

          if (validTratos.length > 0) {
            setTratoReciente(validTratos[0]);
            setTratos(validTratos.slice(1));
          }
        }
      } catch (error) {
        console.error("Error al cargar tratos:", error);
      }
    };
    fetchTratosCompletados();
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
      <h2 className="text-title1 font-creepster ml-16 my-4 ">Reciente</h2>
      <RecentTrickSection trato={tratoReciente} onExpand={openPopup} />
      <h2 className="text-title1 font-creepster ml-16 my-4">Tus Tratos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tratos.map((trato, index) => (
          <ResourceCard
            key={index}
            trato={trato}
            onExpand={() => openPopup(trato)}
          />
        ))}
      </div>
      {selectedTrato && (
        <TratoPopup trato={selectedTrato} onClose={closePopup} />
      )}
    </div>
  );
}
