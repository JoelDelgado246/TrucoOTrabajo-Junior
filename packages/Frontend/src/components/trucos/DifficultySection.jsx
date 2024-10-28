// src/components/trucos/DifficultySection.jsx
import { useState } from "react";
import ChallengeCard from "./ChallengeCard";
import pumpkinEasy from "../../imgs/pumpkinEasy.png";
import pumpkinMedium from "../../imgs/pumpkinMedium.png";
import pumpkinHard from "../../imgs/pumpkinHard.png";

// Objeto para mapear las imágenes según dificultad
const difficultyImages = {
  FACIL: pumpkinEasy,
  MEDIO: pumpkinMedium,
  TERRORIFICO: pumpkinHard,
};

export default function DifficultySection({
  title,
  challenges,
  titleColor,
  difficulty,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(challenges.length / 3) - 1;

  const nextSlide = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="mb-12">
      {/* Header del section */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src={difficultyImages[difficulty]}
          alt={`${difficulty} difficulty`}
          className="w-16 h-16 object-contain"
        />
        <h2 className={`font-creepster text-[34px] ${titleColor}`}>{title}</h2>
      </div>

      {/* Contenedor del slider y flechas */}
      <div className="flex items-center">
        {/* Botón Anterior */}
        {currentIndex > 0 && (
          <div className="w-8 flex-shrink-0 mr-4">
            <button
              onClick={prevSlide}
              className="text-lime-400 hover:text-lime-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          </div>
        )}

        {/* Contenedor del Slider */}
        <div className="overflow-hidden flex-grow">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {Array.from({ length: Math.ceil(challenges.length / 3) }).map(
              (_, groupIndex) => (
                <div key={groupIndex} className="flex gap-4 min-w-full">
                  {challenges
                    .slice(groupIndex * 3, (groupIndex + 1) * 3)
                    .map((challenge) => (
                      <div
                        key={challenge.id}
                        className="w-[calc(33.33%-1rem)] h-[280px]" // Altura fija para todas las cards
                      >
                        <ChallengeCard {...challenge} />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>

        {/* Botón Siguiente */}
        {currentIndex < maxIndex && (
          <div className="w-8 flex-shrink-0 ml-4">
            <button
              onClick={nextSlide}
              className="text-lime-400 hover:text-lime-500 transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
