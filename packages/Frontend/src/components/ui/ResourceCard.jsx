import React from 'react';

export default function ResourceCard({ trato, onExpand }) {
  return (
    <div className="bg-customDarkOrange p-4 rounded-lg text-black flex flex-col justify-between items-center h-60 mx-4">
        <h4 className="font-creepster text-title1 text-center">{trato.titulo || 'Recurso'}</h4>
      <div className="flex flex-col items-center justify-center h-full overflow-hidden">
        <p className="overflow-y-auto font-michroma text-title3 text-center max-h-20 px-2">
          {trato.contenido || '¡Este reto sí que da miedo!'}
        </p>
      </div>
      {trato.dificultad !== 'facil' && (
        <div className="pt-4">
          <button onClick={onExpand} className="bg-customDarkPurple text-title3 text-white font-creepster px-6 py-2 rounded-2xl">
            Expandir
          </button>
        </div>
      )}
    </div>
  );
}
