import React from 'react';

export default function RecentTrickSection({ trato, onExpand }) {
  if (!trato) {
    return <p className="text-center text-customDarkOrange font-michroma text-title1">No tienes ningún trato el día de hoy</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-customPurple px-4 rounded-lg relative">
      <div className="p-4 rounded-lg text-white relative bg-customDarkPurple">
        <div className='flex justify-center flex-col'>
          <h3 className="text-title1 font-creepster">{trato.titulo}</h3>
          <p className="mt-2 text-michroma text-title3 h-32 overflow-y-auto">
            {trato.contenido}
          </p>
          <div className='flex justify-end'>
          {trato.dificultad !== 'facil' && (
          <button onClick={() => onExpand(trato)} className="bg-customGreen text-title2 mt-2 text-black font-creepster px-12 py-2 rounded-xl ">Expandir</button>
            )}
          </div>
        </div> 
      </div>
    </div>
  );
}
