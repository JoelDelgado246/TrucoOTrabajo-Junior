import { useState } from 'react';

export default function MultipleChoice({ opciones, onSubmit }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSubmit = () => {
    if (selectedOption !== null) {
      onSubmit(selectedOption);
    }
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4">
        {opciones.map((opcion) => (
          <button
            key={opcion.opcion_id}
            className={`p-4 text-left rounded-lg border-2 transition-colors ${
              selectedOption === opcion.opcion_id
                ? 'border-purple-600 bg-purple-100'
                : 'border-gray-200 hover:border-purple-300'
            }`}
            onClick={() => setSelectedOption(opcion.opcion_id)}
          >
            {opcion.texto}
          </button>
        ))}
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={selectedOption === null}
        className="bg-purple-600 text-white px-6 py-2 rounded-lg disabled:opacity-50"
      >
        Verificar Respuesta
      </button>
    </div>
  );
}