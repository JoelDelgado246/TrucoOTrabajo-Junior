import React, { useEffect, useState } from 'react';
import RecentTrickSection from '../components/ui/RecentTrickSection';
import ResourceCard from '../components/ui/ResourceCard';
import Header from '../components/layout/Header';
import axios from 'axios';

export default function Truco() {
  const [tratos, setTratos] = useState([]);
  const [tratoReciente, settratoReciente] = useState([null]);
  const [selectedTrato, setSelectedTrato] = useState(null);

  useEffect(() => {
    const storedTratosIds = JSON.parse(localStorage.getItem('tratos')) || [];

    if(storedTratosIds.length > 0) {
      const fetchTratos = async () => {
        try {
          const responses = await Promise.all(storedTratoIds.map(id => 
            axios.get(`http://localhost:3000/tratos?id=${id}`)
          ));
          const fetchedTratos = responses.map(response => response.data[0]);

          setTratos(fetchedTratos);
          setTratoReciente(fetchedTratos[0]);
        } catch (error) {
          console.error("Error al obtener los tratos:", error);
        }
      };
      fetchTratos();  
    }
  }, []);

  const openPopup = (trato) => {
    setSelectedTrato(trato);
  };

  const closePopup = () => {
    setSelectedTrato(null);
  };

  return (
    <div className="bg-customPurple min-h-screen text-white">
      <Header />
      <h2 className="text-title1 font-creepster ml-16 my-4 ">Reciente</h2>
      <RecentTrickSection trato={tratoReciente} />
      <h2 className="text-title1 font-creepster ml-16 my-4">Tus Tratos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {tratos.map((trato, index) => (
          <ResourceCard key={index} trato={trato} onEntrar={() => openPopup(trato)} />
        ))}
      </div>
      {selectedTrato && <TratoPopup trato={selectedTrato} onClose={closePopup} />}
    </div>
  );
}
