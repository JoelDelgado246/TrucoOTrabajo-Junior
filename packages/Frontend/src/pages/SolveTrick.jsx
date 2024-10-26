import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import Header from '../components/layout/Header';
import '../css/SolveTrick.css';

export default function TrucoPage() {
  const [rating, setRating] = useState(0);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(true);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const popupRef = useRef(null);

  const handleRating = (rate) => {
    setRating(rate);
  };

  const toggleAnimation = (event) => {
    event.stopPropagation();
    setIsAnimationPlaying(!isAnimationPlaying);
  };

  const showPopup = (event) => {
    event.stopPropagation();
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  const handleMouseDown = (e) => {
    const popup = popupRef.current;
    let shiftX = e.clientX - popup.getBoundingClientRect().left;
    let shiftY = e.clientY - popup.getBoundingClientRect().top;

    const onMouseMove = (event) => {
      popup.style.left = `${event.pageX - shiftX}px`;
      popup.style.top = `${event.pageY - shiftY}px`;
    };

    document.addEventListener('mousemove', onMouseMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', onMouseMove);
    }, { once: true });
  };

  return (
    <div className="bg-customDarkPurple text-white min-h-screen">
      <Header />
      {/* Main Content */}
      <main className="container mx-auto ">
      <div className="flex justify-around w-full bg-customePurple p-4">
        <div className='w-1/2'>
            <h1 className="text-super font-creepster mb-6">¿Podrás completar el truco?</h1>
            <p className="text-title3 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
             nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div
            className={`w-1/2 relative h-64 overflow-hidden cursor-pointer ${isAnimationPlaying ? '' : 'paused'}`}
            onClick={toggleAnimation}
        >
        <div className="flex flex-col space-y-4">
            <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">JS</div>
            <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">Dificultad</div>
            <div className="rain-button bg-customDarkOrange px-6 py-2 shadow-lg rounded font-michroma text-title2">Categoría</div>
            <button 
              onClick={showPopup} 
              className="rain-button bg-customGreen text-black px-6 py-2 shadow-lg rounded font-michroma text-title2 transition duration-200 hover:bg-green-700 hover:shadow-xl hover:text-white">¿Trato?
            </button>
          </div>
        </div>
        </div>
        <div className="flex gap-6 mt-8">
          {/* Challenge Area */}
          <div className="flex-1 bg-white text-black p-6 rounded flex flex-col justify-between">
            <div>
              <h2 className="text-title2 font-michroma mb-4">Depende la pregunta se adapta esta pantalla</h2>
              <div className="w-full h-72 border-2 border-gray-300 rounded mb-4 overflow-y-auto"></div>
            </div>
            <div>
              <div className="text-normal">Puntúa el ejercicio:</div>
              <div className="flex gap-2 mt-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} onClick={() => handleRating(star)}>
                    <span className={`text-3xl ${rating >= star ? 'text-customOrange' : 'text-gray-400'}`}>★</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          {/* Response Area */}
          <div className="flex-1 bg-white text-black p-6 rounded">
            <h2 className="text-title2 font-michroma mb-4">Tu respuesta</h2>
            <div className="w-full h-72 border-2 border-gray-300 p-2 rounded"></div>
            <button className="bg-customGreen px-6 py-2 mt-4 rounded font-michroma text-title2">¿Trato?
            </button>
          </div>
        </div>
      </main>
      {isPopupVisible && (
        <div
          ref={popupRef}
          className="fixed top-1/3 left-1/3 bg-customPurple text-white p-20 rounded shadow-lg z-10 cursor-move"
          onMouseDown={handleMouseDown}
        >
          <div className="flex justify-between items-center mb-4">
            <p>Este es un trato especial...</p>
            <button onClick={closePopup} className="text-xl top-2 right-2 absolute ">×</button>
          </div>
        </div>
      )}
    </div>
  );
}