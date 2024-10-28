import React from 'react';

export default function ResourceCard() {
  return (
    <div className="bg-customDarkOrange p-4 rounded-lg text-black flex flex-col  items-center h-48 mx-8">
      <h4 className="font-creepster text-title2">RECURSO</h4>
      <p className='overflow-y-auto font-michroma text-normal'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odio eveniet quisquam maiores tenetur quam, eaque consequatur reprehenderit distinctio, pariatur praesentium corrupti culpa id laudantium. Dolor earum sunt error officia?</p>
      <div className='pt-4'>
        <button className='bg-customDarkPurple text-titl1 text-white font-creepster px-8 py-2 rounded-2xl mr-10'>Entrar</button>
        <button className="bg-customGreen text-titl1 text-black font-creepster px-6 py-2 rounded-xl">COMUNIDAD</button>
      </div>
    </div>
  );
}
