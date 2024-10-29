// src/components/trucos/MultipleChoice.jsx
import { useState } from 'react';

export default function MultipleChoice({ opciones, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {opciones?.map((opcion) => (
          <button
            key={opcion.id}
            className={`p-4 text-left rounded-lg border-2 transition-colors ${
              selectedOption === opcion.id
                ? 'border-purple-600 bg-purple-100'
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setSelectedOption(opcion.id)}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
      
      <button
        onClick={() => onSubmit(selectedOption)}
        disabled={selectedOption === null}
        className="bg-customGreen px-6 py-2 rounded font-michroma text-title2 mt-4 disabled:opacity-50"
      >
        Verificar Respuesta
      </button>
    </div>
  );
}