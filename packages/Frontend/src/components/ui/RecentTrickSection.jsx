import React from 'react';

export default function RecentTrickSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-customPurple px-4 rounded-lg relative">
      <div className="bg-customOrange p-4 rounded-lg text-black relative">
        <h3 className="text-title1 font-creepster">TÍTULO</h3>
        <p className="mt-2 text-michroma text-title3 h-32 overflow-y-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequatur dolores nostrum illum, mollitia sint nemo earum eaque hic suscipit nesciunt facilis reiciendis, praesentium dolorum doloremque totam, provident tempora sit? 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quo modi eligendi inventore consequuntur nisi itaque. Accusantium quam laudantium accusamus eum, nesciunt cumque, nulla vero quos odit saepe earum numquam.
        </p>
        <div className="flex items-center mt-auto pt-2 justify-between">
          <span className="bg-customPurple text-white font-michroma text-normal py-2 px-10 rounded-full">JavaScript</span>
          <div className="flex mr-10">
            <span className="text-customGreen text-title1">★</span>
            <span className="text-customGreen text-title1">★</span>
            <span className="text-customGreen text-title1">★</span>
            <span className="text-customGreen text-title1">★</span>
            <span className="text-gray-300 text-title1">★</span>
          </div>
        </div>
      </div>

      {/* Área de comentarios */}
      <div className="px-12 rounded-lg">
        <div className="flex items-center mb-2">
          <span className="text-title2 font-michroma">💬</span>
          <p className="ml-4 text-title2 font-michroma ">Comentarios</p>
        </div>
        <textarea 
          placeholder="Escribe tu comentario aquí..."
          className="w-full p-4 rounded-lg bg-slate-300 text-black font-michroma h-40 overflow-y-auto"
          rows="4"
        ></textarea>
        <button className="bg-customGreen text-title2 mt-2 text-black font-creepster px-12 py-2 rounded-xl">COMENTAR</button>
      </div>
    </div>
  );
}
