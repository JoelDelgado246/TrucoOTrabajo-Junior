// src/components/trucos/DifficultySection.jsx
import { useState } from "react";
import ChallengeCard from "./ChallengeCard";

export default function DifficultySection({ title, challenges, titleColor }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(challenges.length / 3));
  };

  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-16 h-16 border-2 border-gray-400 flex items-center justify-center">
          <span className="text-gray-400">Logo</span>
        </div>
        <h2 className={`font-creepster text-[34px] ${titleColor}`}>{title}</h2>
      </div>

      <div className="relative">
        <div className="flex gap-6 overflow-hidden">
          {challenges
            .slice(currentIndex * 3, (currentIndex + 1) * 3)
            .map((challenge, index) => (
              <div key={index} className="w-1/3">
                <ChallengeCard {...challenge} />
              </div>
            ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-lime-400 rounded-lg w-10 h-10 flex items-center justify-center hover:bg-lime-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
