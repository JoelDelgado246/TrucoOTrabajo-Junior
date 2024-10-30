import { useState, useEffect } from "react";

export default function TratoSlider({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  return (
    <div
      className="relative bg-customDarkPurple p-8 rounded-[50px] mx-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex gap-8 transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * (250 + 32)}px)`,
          width: `${items.length * (250 + 32)}px`,
        }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[250px] h-[250px] bg-customOrange rounded-lg transition-transform duration-500 transform hover:scale-105"
          >
            <div className="p-4 flex flex-col justify-center items-center h-full">
              <h3 className="text-title2 font-creepster mb-2 text-center">{item.titulo}</h3>
              <p className="text-normal font-michroma mb-4 text-center">{item.contenido}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-customGreen rounded-lg w-10 h-10 flex items-center justify-center hover:bg-lime-300 transition-colors"
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-customGreen rounded-lg w-10 h-10 flex items-center justify-center hover:bg-lime-300 transition-colors"
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
  );
}
