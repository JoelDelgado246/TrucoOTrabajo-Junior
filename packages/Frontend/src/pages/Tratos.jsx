import React from 'react';
import RecentTrickSection from '../components/ui/RecentTrickSection';
import ResourceCard from '../components/ui/ResourceCard';

export default function Truco() {
  return (
    <div className="bg-purple-800 min-h-screen p-8 text-white">
      {/* Sección de Reto Reciente */}
      <h2 className="text-2xl font-bold mb-4">RECIENTE</h2>
      <RecentTrickSection />

      {/* Sección de Tus Tratos */}
      <h2 className="text-2xl font-bold mt-8 mb-4">TUS TRATOS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
        <ResourceCard />
      </div>
    </div>
  );
}
