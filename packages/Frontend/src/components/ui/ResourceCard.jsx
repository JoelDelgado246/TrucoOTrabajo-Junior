import React from 'react';

export default function ResourceCard({ trato }) {
  return (
    <div className="bg-customDarkOrange p-4 rounded-lg text-black flex flex-col  items-center h-48 mx-8">
      <h4 className="font-creepster text-title2">{trato.titulo || 'Recurso'}</h4>
      <p className='overflow-y-auto font-michroma text-normal'>{trato.contenido || '¡Este reto si que da miedo!'}</p>
      <div className='pt-4'>
        <button className='bg-customDarkPurple text-titl1 text-white font-creepster px-8 py-2 rounded-2xl mr-10'>Entrar</button>
      </div>
    </div>
  );
}
