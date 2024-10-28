import React from 'react';
import RecentTrickSection from '../components/ui/RecentTrickSection';
import ResourceCard from '../components/ui/ResourceCard';
import Header from '../components/layout/Header';

export default function Truco() {
  return (
    <div className="bg-customPurple min-h-screen text-white">
      <Header />
      <h2 className="text-title1 font-creepster ml-16 my-4 ">Reciente</h2>
      <RecentTrickSection />
      <h2 className="text-title1 font-creepster ml-16 my-4">Tus Tratos</h2>
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
