import React from 'react';

export default function RecentTrickSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-customPurple p-4 rounded-lg text-white">
      {/* Información del reto reciente */}
      <div className="bg-customOrange p-4 rounded-lg text-black">
        <h3 className="text-xl font-bold">TÍTULO</h3>
        <p className="mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex items-center mt-4">
          <span className="bg-black text-white px-2 py-1 rounded-full text-xs">JS</span>
          <div className="flex ml-4">
            <span className="text-customGreen text-xl">★</span>
            <span className="text-customGreen text-xl">★</span>
            <span className="text-customGreen text-xl">★</span>
            <span className="text-customGreen text-xl">★</span>
            <span className="text-gray-300 text-xl">★</span>
          </div>
        </div>
      </div>

      {/* Área de comentarios */}
      <div className="bg-customPurple p-4 rounded-lg text-white">
        <div className="flex items-center mb-2">
          <span className="text-customGreen text-lg">💬</span>
          <p className="ml-2">Comentarios</p>
        </div>
        <textarea
          placeholder="Escribe tu comentario aquí..."
          className="w-full p-2 rounded-lg bg-white text-black resize-none"
          rows="4"
        ></textarea>
        <button className="mt-2 text-black px-4 py-2 rounded-lg">COMENTAR</button>
      </div>
    </div>
  );
}
