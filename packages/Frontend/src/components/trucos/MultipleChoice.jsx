// src/components/trucos/MultipleChoice.jsx
import { useState, useEffect } from "react";

export default function MultipleChoice({ opciones, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [opcionesDesordenadas, setOpcionesDesordenadas] = useState([]);

  useEffect(() => {
    if (opciones) {
      // Crear copia del array y desordenarla
      const opcionesArray = [...opciones];
      for (let i = opcionesArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [opcionesArray[i], opcionesArray[j]] = [
          opcionesArray[j],
          opcionesArray[i],
        ];
      }
      setOpcionesDesordenadas(opcionesArray);
    }
  }, [opciones]);

  return (
    <div className="space-y-4">
      {opcionesDesordenadas.map((opcion) => (
        <button
          key={opcion.id}
          onClick={() => setSelectedOption(opcion.id)}
          className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
            selectedOption === opcion.id
              ? "border-purple-600 bg-purple-100"
              : "border-gray-200 hover:border-purple-300"
          }`}
        >
          {opcion.texto}
        </button>
      ))}

      <button
        onClick={() => onSubmit(selectedOption)}
        disabled={!selectedOption}
        className="w-full mt-4 bg-purple-600 text-white py-2 rounded-lg disabled:opacity-50"
      >
        Verificar Respuesta
      </button>
    </div>
  );
}
