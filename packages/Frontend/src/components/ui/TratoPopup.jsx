import React from 'react';

export default function TratoPopup({ trato, onClose }) {
  if (!trato) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-lg w-full text-black">
        <h2 className="text-2xl font-bold mb-4">{trato.titulo}</h2>
        <p className="mb-4">{trato.contenido}</p>
        
        {trato.tutorial ? (
          <>
            <h3 className="font-semibold">Tutorial:</h3>
            <p>{trato.descripcionTutorial}</p>
            <a href={trato.tutorial} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Ver Tutorial</a>
          </>
        ) : (
          <>
            <h3 className="font-semibold">Curso:</h3>
            <p>{trato.descripcionCurso}</p>
            <a href={trato.curso} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Ver Curso</a>
          </>
        )}

        <button onClick={onClose} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">Cerrar</button>
      </div>
    </div>
  );
}
