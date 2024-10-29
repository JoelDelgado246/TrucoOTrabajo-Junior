import { useState, useEffect } from "react";
import ChallengeCard from "./ChallengeCard";
import pumpkinEasy from "../../imgs/pumpkinEasy.png";
import pumpkinMedium from "../../imgs/pumpkinMedium.png";
import pumpkinHard from "../../imgs/pumpkinHard.png";

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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = isMobile ? challenges.length - 1 : Math.ceil(challenges.length / 3) - 1;

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
      <div className="flex items-center gap-4 mb-6">
        <img
          src={difficultyImages[difficulty]}
          alt={`${difficulty} difficulty`}
          className="w-16 h-16 object-contain"
        />
        <h2 className={`font-creepster text-[34px] ${titleColor}`}>{title}</h2>
      </div>

      <div className="flex items-center">
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            className="text-customDarkOrange hover:text-customGreen transition-colors p-2"
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
        )}

        <div className="overflow-hidden flex-grow">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {isMobile
              ? challenges.map((challenge) => (
                  <div
                    key={challenge.id}
                    className="flex-shrink-0 w-full h-[280px] bg-customOrange p-4 rounded-lg shadow-md"
                  >
                    <ChallengeCard {...challenge} />
                  </div>
                ))
              : Array.from({ length: Math.ceil(challenges.length / 3) }).map(
                  (_, groupIndex) => (
                    <div key={groupIndex} className="flex gap-4 min-w-full">
                      {challenges
                        .slice(groupIndex * 3, (groupIndex + 1) * 3)
                        .map((challenge) => (
                          <div
                            key={challenge.id}
                            className="w-1/3 h-[280px] bg-customOrange p-4 rounded-lg shadow-md"
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
          <button
            onClick={nextSlide}
            className="text-customDarkOrange hover:text-customGreen transition-colors p-2"
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
        )}
      </div>
    </div>
  );
}
